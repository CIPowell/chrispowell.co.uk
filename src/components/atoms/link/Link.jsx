import styles from "./Link.module.css";

export default function Link({label, url, current}) {
    return (<a href={url} className={(current ? styles.current : "")}>{label}</a>)
}