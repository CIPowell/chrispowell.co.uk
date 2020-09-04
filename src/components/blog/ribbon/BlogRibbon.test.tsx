import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedBlogRibbon, { BlogRibbon } from './BlogRibbon';
import { BlogStore } from '../../../store/blog/store';


describe('The Blog Ribbon', () => {
    it('should render with an inital state', () => {
        const component = shallow(<BlogRibbon loading={false} posts={[]} page={1} postsOnPage={1} />);
        
        expect(component.find('section')).toHaveLength(1);
    });

    it('should render one post when there is one post', () => {
        const blogRibbonProps: BlogStore = {
            loading: false,
            posts: [
                { video: undefined, title: "Hello World", body: "Welcome"}
            ],
            page: 1,
            postsOnPage: 5
        }

        const component = shallow(<BlogRibbon {...blogRibbonProps} />);

        expect(component.find('section')).toHaveLength(1);

        let h3s: ShallowWrapper = component.find('h3');
        expect(h3s).toHaveLength(1);
        expect(h3s.at(0).text()).toBe("Hello World");
    })
});

describe('The Connected Blog Ribbon', () => {
    const initialState = new BlogStore();
    const mockStore = configureStore();
    const blogRibbonProps = {
        store: mockStore({blogStore: initialState})
    }

    it('should render with initial state', () => {
        shallow(<ConnectedBlogRibbon {...blogRibbonProps}/>)
    });

});