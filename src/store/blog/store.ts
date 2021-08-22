import { REQUEST_POSTS, POSTS_ARRIVED, POSTS_FAILED, IBlogAction, SELECT_CURRENT_POST, CURRENT_POST_SET, CURRENT_POST_NOT_LOADED } from './actions';

export interface IBlogPost {
    title: string
    body: string
    slug: string
    preview: string
    video?: string
    updatedAt: string
    author: string
}

export interface IBlogPostList {
    posts: Array<IBlogPost>
    loading: boolean
    slug?: string
    selectedPost?: IBlogPost
    page: number
    postsOnPage: number
    error?: string
}

export class BlogStore implements IBlogPostList {
    constructor() {
        this.posts = [];
        this.loading = false;
        this.page = 1;
        this.postsOnPage = 5;
    }
    posts: IBlogPost[];
    loading: boolean;
    slug?: string
    selectedPost?: IBlogPost
    page: number;
    postsOnPage: number;
    error?: string;
}

export function blogStore(state : IBlogPostList = new BlogStore(), action: IBlogAction): IBlogPostList {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                loading: true
            });
        case POSTS_ARRIVED:
            return Object.assign({}, state, {
                loading: false,
                posts: action.posts
            });
        case POSTS_FAILED:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });
        case SELECT_CURRENT_POST:
            return Object.assign({}, state, {
                slug: action.slug
            });
        case CURRENT_POST_SET:
            return Object.assign({}, state, {
                selectedPost: action.currentPost
            });
        case CURRENT_POST_NOT_LOADED:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return Object.assign({}, state, {
                error: `action "${action.type}" not implemented in the Blog Store`
            })
    }
}