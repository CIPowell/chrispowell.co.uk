import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { getPosts, onPostsArrived, onPostsFailed } from '../../../store/blog/actions';
import { Video } from '../../video/Video';
import { IBlogPostList } from '../../../store/blog/store';

import './BlogRibbon.scss';
import { IContentSectionProps } from '../../contentsection/ContentSection';

export const BlogRibbon: FunctionComponent<IContentSectionProps> = (props: IContentSectionProps) => {
    return <section className='blog-ribbon'>
        <h2>Recent Posts</h2>   
        <div className="window">
            <div className="ribbon">
                {props.posts?.posts.map((post, index) => (<article key={index}>
                    <h3>{post.title}</h3>
                    { post.video ? <Video src={post.video} />: <div dangerouslySetInnerHTML={({__html: post.body})} />}  
                </article>))}
            </div> 
        </div>
    </section>;
}

const mapStatetoProps = ({ blogStore } : { blogStore: IBlogPostList }) => {
    const state: IContentSectionProps = {
        type: 'blog_list',
        posts: {
            posts: blogStore.posts,
            loading: blogStore.loading,
            postsOnPage: blogStore.postsOnPage,
            page: blogStore.page
        }
    };
    return state;
};

const mapDispatch = { getPosts, onPostsArrived, onPostsFailed };

export default connect(mapStatetoProps, mapDispatch)(BlogRibbon);