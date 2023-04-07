import BlogArticle from "../components/blog/article/BlogArticle";
import { builder } from '@builder.io/react';
import React from "react";
import { useLoaderData } from "react-router-dom";

function BlogArticlePage() {
    const article = useLoaderData();
    return <BlogArticle article={article} />
}

export async function loader({params}) {
    const article = await builder
        .get('blog-article', {
            options: { includeRefs: true },
            query: {
                "data.handle": params.handle
            }
        }).promise();

    return article.data;
}

export default BlogArticlePage;