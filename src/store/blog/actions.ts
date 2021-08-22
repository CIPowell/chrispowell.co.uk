import { Dispatch } from "react";
import { IContext } from "../../config/Config";
import { IBlogPost } from "./store";

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const POSTS_ARRIVED = 'POSTS_ARRIVED';
export const POSTS_FAILED = 'POSTS_FAILED';

export const SELECT_CURRENT_POST = 'SELECT_CURRENT_POST';
export const CURRENT_POST_SET = 'CURRENT_POST_SELECT';
export const CURRENT_POST_NOT_LOADED = 'CURRENT_POST_NOT_LOADED';

export interface IBlogAction {
    type: string
    posts?: IBlogPost[]
    slug?: string
    currentPost?: IBlogPost
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

export function selectCurrentPost(slug: string): IBlogAction {
    return  {type: SELECT_CURRENT_POST, slug }
}

export function currentPostSelected(post?: IBlogPost): IBlogAction {
    return { type: CURRENT_POST_SET, currentPost: post }
}

export function currentPostNotLoaded(error: string): IBlogAction {
    return { type: CURRENT_POST_NOT_LOADED, error }
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

export function getCurrentPost(ctx: IContext, slug: string) {
    return async function(dispatch: Dispatch<IBlogAction>): Promise<void> {
        const { apiBase } = ctx;
        dispatch(selectCurrentPost(slug));

        try {
            const response = await fetch(`${apiBase}/blog`, {
                method: 'GET'
            });
            const posts: IBlogPost[] = await response.json();
            const selected = posts.filter(post => post.slug == slug);

            dispatch(currentPostSelected(selected.length ? selected[0] : undefined));

        } catch (err) {
            dispatch(currentPostNotLoaded(err.error));
        }
    }
}