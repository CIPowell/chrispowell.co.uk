import { Link } from "react-router-dom";

export default function BlogSummary({title, handle}) {
    return (
        <article>
            <h2><Link to={`/blog/${handle}`} >{title}</Link></h2>
        </article>
    )
}