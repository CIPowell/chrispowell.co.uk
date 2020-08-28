import React from 'react';
import { connect } from 'react-redux';
import { getPosts, onPostsArrived, onPostsFailed } from '../../../store/blog/actions';
import { Video } from '../../video/Video';
import { BlogStore } from '../../../store/blog/store';

import './BlogRibbon.scss';

export const BlogRibbon = (blogList: BlogStore) => {
    return <section className='blog-ribbon'>
        <h2>Recent Posts</h2>   
        <div className="window">
            <div className="ribbon">
                {blogList.posts.map((post, index) => (<article key={index}>
                    <h3>{post.title}</h3>
                    { post.video ? <Video src={post.video} />: <div dangerouslySetInnerHTML={({__html: post.body})} />}  
                </article>))}
            </div> 
        </div>
    </section>;
}

const mapStatetoProps = ({ blogStore } : {blogStore: BlogStore}) => blogStore;

const mapDispatch = { getPosts, onPostsArrived, onPostsFailed };

export default connect(mapStatetoProps, mapDispatch)(BlogRibbon);