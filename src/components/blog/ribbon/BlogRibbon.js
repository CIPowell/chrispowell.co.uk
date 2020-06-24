import React from 'react';
import { connect } from 'react-redux';
import {getPosts, onPostsArrived, onPostsFailed} from '../../../store/blog/actions';

export const BlogRibbon = ({ posts }) => {
    return <section className='blog-ribbon'>
        <h2>Recent Posts</h2>    
    </section>;
}

const mapStatetoProps = ({ blogStore }) => blogStore;

const mapDispatch = { getPosts, onPostsArrived, onPostsFailed };

export default connect(mapStatetoProps, mapDispatch)(BlogRibbon);