import { REQUEST_POSTS, POSTS_ARRIVED, POSTS_FAILED } from './actions';

export interface IBlogPost {
    title: string
    body: string
    video?: string
}

export interface IBlogPostList {
    posts: Array<IBlogPost>
    loading: boolean,
    page: number,
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
    page: number;
    postsOnPage: number;
    error?: string;
}

export function blogStore(state : IBlogPostList = new BlogStore(), action: any) {
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
        default:
            return state;
    }
}