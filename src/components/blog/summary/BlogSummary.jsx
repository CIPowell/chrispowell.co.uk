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
                        "data.tags.$elemMatch": tag ? {
                           $in: ["engineering"]
                        } : undefined
                    }
                });
             
            setPosts(response);
        }
        
        getPosts();
    }, [tag]);

    return (
        <section>
            {
                posts.map(({data}) => {
                        return (<article className={styles.summary} key={data.handle}>
                            <Link to={`/blog/${data.handle}`} className={styles.blog_link}>
                                <h2>{data.title.Default}</h2>
                                <DateDisplay date={new Date(data.published)}/>
                                <picture>
                                    <source srcSet={`${data.featuredImage}?width=250&format=avif`} alt="" />
                                    <source srcSet={`${data.featuredImage}?width=250&format=webp`} alt=""  />
                                    <img src={`${data.featuredImage}?width=250`} alt="" className={styles.featuredImage} />
                                </picture>
                                <p>{data.blurb}</p>
                            </Link>
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