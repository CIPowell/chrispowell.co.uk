export const REQUEST_POSTS = 'REQUEST_POSTS';
export const POSTS_ARRIVED = 'POSTS_ARRIVED';
export const POSTS_FAILED = 'POSTS_FAILED';

export function getPosts() {
    return { type: REQUEST_POSTS };
}

export function onPostsArrived(posts = []) {
    return { type: POSTS_ARRIVED, posts };
}

export function onPostsFailed(error = '') {
    return { type: POSTS_FAILED, error };
}