import { BuilderComponent, builder } from '@builder.io/react';
import React from "react";
import { useLoaderData } from "react-router-dom";
import DateDisplay from '../components/date/DateDisplay';

import styles from './BlogArticlePage.module.css'
import BlogSummary from '../components/blog/summary/BlogSummary';

function BlogArticlePage() {
    const article = useLoaderData();

    return (
        <section>
            <article role="main">
                <h1>{article.data.title.Default}</h1>
                <DateDisplay date={new Date(article.data.published)} />
                <picture>
                    <source srcSet={`${article.data.featuredImage}?width=500&format=avif`} alt="" />
                    <source srcSet={`${article.data.featuredImage}?width=500&format=webp`} alt=""  />
                    <img src={`${article.data.featuredImage}?width=500`} alt="" className={styles.featuredImage} />
                </picture>
                <BuilderComponent model="blog-article" content={article} options={{}} />
            </article>
            <section role="navigation">
                <h3>RelatedArticles</h3>
                <BlogSummary tag={article.data.tags.join(",")} />
            </section>
        </section>
        
    )
}

export async function loader({params}) {
    const article = await builder
        .get('blog-article', {
            options: { includeRefs: true },
            query: {
                "data.handle": params.handle
            }
        }).promise();

    return article;
}

export default BlogArticlePage;