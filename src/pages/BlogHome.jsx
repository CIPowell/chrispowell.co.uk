import { useSearchParams } from "react-router-dom";
import BlogSummary from "../components/blog/summary/BlogSummary";

export default function BlogHome() {
    const [searchParams] = useSearchParams();

    return <section>
        <h1>Blog</h1>
        <BlogSummary tag={searchParams.get('tag')}/>
    </section>
}