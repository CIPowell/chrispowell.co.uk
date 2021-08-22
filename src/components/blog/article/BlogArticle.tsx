import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { IBlogPost, IBlogPostList } from '../../../store/blog/store';
import { currentPostSelected, currentPostNotLoaded } from '../../../store/blog/actions';

import './BlogArticle.scss';

interface IBlogArticleProps {
    slug?: string,
    selectedPost?: IBlogPost
}

const BlogArticle: FunctionComponent<IBlogArticleProps> = (props: IBlogArticleProps) =>  {
    const { selectedPost } = props;

    return  <article className="blog-article"> { selectedPost ?
                <div>
                    <h1>{selectedPost.title}</h1>
                    <div dangerouslySetInnerHTML={({__html: selectedPost.body})}></div>
                </div>
            : "" }
        </article>
}

const mapStateToProps  = ({ blogStore } : { blogStore: IBlogPostList }) : IBlogArticleProps => {
    return {
        slug: blogStore.slug,
        selectedPost: blogStore.selectedPost
    }
}

export default connect(mapStateToProps, { currentPostSelected, currentPostNotLoaded })(BlogArticle);