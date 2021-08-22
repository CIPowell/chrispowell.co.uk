import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import BlogArticle from '../../components/blog/article/BlogArticle';
import BlogRibbon from '../../components/blog/ribbon/BlogRibbon';
import { getContext } from '../../config/Config';
import { getCurrentPost } from '../../store/blog/actions';
import store from '../../store/store'; 

import './BlogPage.scss';

const BlogPage: FunctionComponent<unknown> = () => {
    const { slug } : {slug?: string} = useParams();

    if (slug) {
        store.dispatch(getCurrentPost(getContext(), slug));
    }
    
    return <section className="blog-page">
        <BlogArticle />
        <BlogRibbon />
    </section>
}

export default connect(null, { getCurrentPost })(BlogPage);