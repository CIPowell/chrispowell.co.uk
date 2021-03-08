import { Dispatch } from "react";
import { Action, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IContext } from "../../config/Config";
import { NavStore } from "./nav";

export const REQUEST_NAV = 'request_nav';
export const RECEIVE_NAV = 'receive_nav';
export const NAV_ERROR = 'nav_error';

export interface INavLink {
    title: string
    slug: string
}

export interface INavAction {
    type: string;
    loading: boolean
    links?: Array<INavLink>
    error?: string
}


export function requestNav(): INavAction {
    return {
        type: REQUEST_NAV,
        loading: true
    }
}

export function receiveNav(links: Array<INavLink> = []): INavAction {
    return {
        type: RECEIVE_NAV,
        loading: false,
        links: links
    }
}

export function navError(error: string): INavAction {
    return {
        type: NAV_ERROR,
        loading: false,
        error
    }
}

export const fetchNav = (context: IContext) =>
     async (dispatch: Dispatch<INavAction>): Promise<void> => {

        dispatch(requestNav());

        try {
            const response = await fetch(`${context.apiBase}/page/`);
            const body = await response.json();
            dispatch(receiveNav(body.links));
        } catch (err) {
            dispatch(navError(err));
        }
    };