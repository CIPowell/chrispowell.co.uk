import { BuilderComponent, builder } from '@builder.io/react';
import React from "react";
import { useLoaderData } from "react-router-dom";
import DateDisplay from '../components/date/DateDisplay';

function BlogArticlePage() {
    const article = useLoaderData();

    return (
        <article role="main">
            <h1>{article.data.title.Default}</h1>
            <DateDisplay date={new Date(article.data.published)} />
            <BuilderComponent model="blog-article" content={article} options={{}} />
        </article>
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