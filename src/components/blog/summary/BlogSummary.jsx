import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Builder, builder } from '@builder.io/react';
import DateDisplay from "../../date/DateDisplay";
import styles from "./BlogSummary.module.css";

export default function BlogSummary(props) {
    const [posts, setPosts] = useState([])
    let { tag } = props;

    useEffect(() => { 
        async function getPosts() {
            let response = await builder
                .getAll('blog-article', {
                    options: { 
                        includeRefs: true,
                        sort: {
                            "data.published": -1
                        }
                    },
                    query: {
                        "data.tags": tag || undefined
                        
                    }
                });
             
            setPosts(response);
        }
        
        getPosts();
    }, [tag]);

    return (
        <section>
            {
                posts
    
                    .map(({data}) => {
                        console.log(data.published)

                        return (<article className={styles.summary} key={data.handle}>
                            <h2><Link to={`/blog/${data.handle}`} >{data.title.Default}</Link></h2>
                            <DateDisplay date={new Date(data.published)}/>
                            <img src={data.featuredImage} alt="" className={styles.featuredImage}/>
                            <p>{data.blurb}</p>
                        </article>)
                })
            }
        </section>
    )
}

Builder.registerComponent(BlogSummary, {
    name: "Blog Summary",
    inputs: [{ name: "tag", type: "text" }],
    image: "https://tabler-icons.io/static/tabler-icons/icons-png/article.png"
})