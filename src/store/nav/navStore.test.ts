import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Middleware } from 'redux';
import fetchMock from 'fetch-mock';

import { fetchNav, navError, receiveNav, requestNav } from './actions';
import { navReducer, NavStore } from './nav';

describe('Nav Store actions >> ', () => {
    it('Should be loading after requested',() => {
        const store = navReducer(undefined, requestNav());
        expect(store.loading).toBeTruthy();
    });

    it('Should not be loading after receive', () => {
        let store = navReducer(undefined, requestNav());
        store = navReducer(store, receiveNav([]));

        expect(store.loading).toBeFalsy();
    });

    it('Should not be loading after error', () => {
        let store = navReducer(undefined, requestNav());
        store = navReducer(store, navError("an error"));

        expect(store.loading).toBeFalsy();
    });

    it('Should have the right links after receive', () => {

        let store = navReducer(undefined, receiveNav([{
            slug: '/home',
            title: 'Home'
        }]));

        expect(store.links).toHaveLength(1);
        expect(store.links[0].title).toBe('Home');
        expect(store.links[0].slug).toBe('/home');

        store = navReducer(store, receiveNav([{
            slug: '/blog',
            title: 'Blog'
        },{
            slug: '/cv',
            title: 'CV'
        }]));

        expect(store.links).toHaveLength(2);
        expect(store.links[0].title).toBe('Blog');
        expect(store.links[0].slug).toBe('/blog');
        expect(store.links[1].title).toBe('CV');
        expect(store.links[1].slug).toBe('/cv');
    }); 
});

describe("Navstore load nav >>", () => {
    const middlewares: Middleware[] = [ thunk ];
    const mockStore = configureMockStore(middlewares);

    afterEach(() => {
        fetchMock.restore();
    })

    it("fetches the nav", async () => {
        const body = {"links":[{"slug":"about","title":"About"}],"content":{}};

        fetchMock.getOnce('/page/', {
            headers: { 'content-type': 'application/json' },
            body
        });

        const store = mockStore(new NavStore());

        const fetchNavAction = fetchNav({
            apiBase: "",
            siteTitle: "[Test] ChrisIPowell"
        });

        await store.dispatch(fetchNavAction as any);

        expect(store.getActions()).toHaveLength(2);
        expect(store.getActions()[0]).toEqual(requestNav());
        expect(store.getActions()[1]).toEqual(receiveNav(body.links));
    });
});