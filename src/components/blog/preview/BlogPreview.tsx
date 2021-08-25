import { FunctionComponent } from 'react';

import { IBlogPost } from '../../../store/blog/store';
import { getAge } from '../../../utils/dates';

import './BlogPreview.scss';
import { Link } from 'react-router-dom';

const BlogPreview : FunctionComponent<IBlogPost> = (props: IBlogPost) => {
    return <article className="blog__preview">
        <Link to={`/blog/${props.slug}`}>
            <h1>{props.title}</h1>
            <h2>
                <span className="updated">{getAge(props.updatedAt)}</span> by <span className="author">{props.author} </span>
            </h2>

            <div dangerouslySetInnerHTML={({__html: props.preview})}></div>
        </Link>
    </article>
}

export default BlogPreview;

