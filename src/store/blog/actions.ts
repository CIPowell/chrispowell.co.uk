export const REQUEST_POSTS = 'REQUEST_POSTS';
export const POSTS_ARRIVED = 'POSTS_ARRIVED';
export const POSTS_FAILED = 'POSTS_FAILED';

export function getPosts() {
    return { type: REQUEST_POSTS };
}

export function onPostsArrived(posts = []) {
    return { type: POSTS_ARRIVED, posts };
}

export function onPostsFailed(error: string = '') {
    return { type: POSTS_FAILED, error };
}

export function fetchPosts({ apiRoot } : { apiRoot: string }) {
    return async function (dispatch: Function) {
        dispatch(getPosts());
        
        try {
            const response = await fetch(`${apiRoot}/blog`, {
                method: 'GET'
            });
            const posts = await response.json();
                
            dispatch(onPostsArrived(posts));
        } catch (err) {
            dispatch(onPostsFailed(err.error));
        }
    }
}