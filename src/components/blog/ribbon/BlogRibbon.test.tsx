import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import ConnectedBlogRibbon, { BlogRibbon } from './BlogRibbon';
import { BlogStore } from '../../../store/blog/store';
import { IContentSectionProps } from '../../contentsection/ContentSection';


describe('The Blog Ribbon', () => {
    it('should render with an inital state', () => {
        const blogRibbonProps: BlogStore = {
            loading: false,
            posts: [],
            page: 1,
            postsOnPage: 5
        };

        const { container } = render(<BlogRibbon type="blog_ribbon" posts={blogRibbonProps} />);
        
        expect(container.querySelectorAll('section')).toHaveLength(1);
    });

    it('should render one post when there is one post', () => {
        const blogRibbonProps: BlogStore = {
            loading: false,
            posts: [
                { video: undefined, title: "Hello World", body: "Welcome"}
            ],
            page: 1,
            postsOnPage: 5
        };

        const contentSectionProps: IContentSectionProps = {
            type: 'blog_ribbon',
            posts: blogRibbonProps
        };

        const { container } = render(<BlogRibbon {...contentSectionProps} />);

        expect(container.querySelectorAll('section')).toHaveLength(1);

        const h3s = container.querySelectorAll('h3');
        expect(h3s).toHaveLength(1);
        expect(h3s.item(0).textContent).toBe("Hello World");
    })
});

describe('The Connected Blog Ribbon', () => {
    const initialState = new BlogStore();
    const mockStore = configureStore();
    const blogRibbonProps = {
        store: mockStore({blogStore: initialState})
    }

    it('should render with initial state', () => {
        render(<ConnectedBlogRibbon {...blogRibbonProps}/>)
    });

});