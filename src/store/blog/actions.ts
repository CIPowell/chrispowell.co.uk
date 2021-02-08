import { Dispatch } from "react";
import { IContext } from "../../config/Config";
import { IBlogPost } from "./store";

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const POSTS_ARRIVED = 'POSTS_ARRIVED';
export const POSTS_FAILED = 'POSTS_FAILED';

export interface IBlogAction {
    type: string,
    posts?: IBlogPost[]
    error?: string
}

export function getPosts(): IBlogAction {
    return { type: REQUEST_POSTS };
}

export function onPostsArrived(posts = []): IBlogAction {
    return { type: POSTS_ARRIVED, posts };
}

export function onPostsFailed(error: string): IBlogAction {
    return { type: POSTS_FAILED, error };
}

export function fetchPosts(ctx : IContext) {
    return async function (dispatch: Dispatch<IBlogAction>) : Promise<void> {
        const apiRoot: string = ctx.apiBase;

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