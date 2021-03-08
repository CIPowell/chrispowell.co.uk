import { INavAction, INavLink } from "./actions";

export class NavStore {
    loading = true
    links = new Array<INavLink>();
    error = ""
}

export function navReducer(state: NavStore = new NavStore(), action: INavAction): NavStore {
    return Object.assign({}, state, action);
}