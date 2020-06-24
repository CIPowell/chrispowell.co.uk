import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedBlogRibbon, { BlogRibbon } from './BlogRibbon';


describe('The Blog Ribbon', () => {
    it('should render with an inital state', () => {
        const component = shallow(<BlogRibbon loading={false} posts={[]} error={null} />);
        
        expect(component.find('section')).toHaveLength(1);
    });
});

describe('The Connected Blog Ribbon', () => {
    const initialState = {
        posts: [],
        loading: false,
        page: 1,
        postsOnPage: 5,
        error: null
    };
    const mockStore = configureStore();

    it('should render with initial state', () => {
        shallow(<ConnectedBlogRibbon store={mockStore({ blogStore: initialState})} />)
    });

});