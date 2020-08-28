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

export function fetchPosts() {
    return async function (dispatch) {
        dispatch(getPosts());

        try {
            const response = await fetch('https://ugp71764c3.execute-api.eu-west-1.amazonaws.com/dev/blog', {
                method: 'GET'
            });
            const posts = await response.json();
                
            dispatch(onPostsArrived(posts));
        } catch (err) {
            dispatch(onPostsFailed(err));
        }
    }
}