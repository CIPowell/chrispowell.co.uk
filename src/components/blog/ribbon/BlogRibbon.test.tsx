import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import ConnectedBlogRibbon, { BlogRibbon } from './BlogRibbon';
import { BlogStore } from '../../../store/blog/store';
import { IContentSectionProps } from '../../contentsection/ContentSection';

import { MemoryRouter as Router } from 'react-router-dom';

describe('The Blog Ribbon', () => {
    it('should render with an inital state', () => {
        const blogRibbonProps: BlogStore = {
            loading: false,
            posts: [],
            page: 1,
            postsOnPage: 5
        };

        const { container } = render(<Router>
            <BlogRibbon type="blog_ribbon" posts={blogRibbonProps} />
        </Router>);
            
        
        expect(container.querySelectorAll('section')).toHaveLength(1);
    });

    it('should render one post when there is one post', () => {
        const blogRibbonProps: BlogStore = {
            loading: false,
            posts: [
                { video: undefined, slug:"hello-world", title: "Hello World", preview: "Welcome", body: "Welcome", updatedAt: "2020-01-01 12:00:00", author: "CIP"}
            ],
            page: 1,
            postsOnPage: 5
        };

        const contentSectionProps: IContentSectionProps = {
            type: 'blog_ribbon',
            posts: blogRibbonProps
        };

        const { container } = render(<Router>
            <BlogRibbon {...contentSectionProps} />
        </Router>);

        expect(container.querySelectorAll('section')).toHaveLength(1);

        const h3s = container.querySelectorAll('h1');
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