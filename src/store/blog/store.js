import { REQUEST_POSTS, POSTS_ARRIVED, POSTS_FAILED } from './actions';

const initialState = {
    posts: [],
    loading: false,
    page: 1,
    postsOnPage: 5,
    error: null
};

export function blogStore(state = initialState, action) {
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