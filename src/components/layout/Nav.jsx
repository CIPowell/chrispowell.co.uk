import builder from "@builder.io/react"
import { useEffect, useState } from "react"
import styles from "./Nav.module.css";

export default function Navigation() {
    let [pages, setPages] = useState([]);

    useEffect(() => {
        builder.getAll('page', {
            query: {
                "data.showInNav": true
            },
            options: {
                noTargeting: true
            }
        }).then(returnedPages => setPages(returnedPages))
    }, []);

    return (<nav role="navigation" className={styles.main_nav}>
        {pages?.map(page => (
           <a className={window.location.pathname === page.data.url ? styles.active : ""} key={page.data.url} href={page.data.url}>{page.data.title}</a>
        ))}
    </nav>);
}