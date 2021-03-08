import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import BlogPreview from './BlogPreview';
import { IBlogPost } from '../../../store/blog/store';

import { DateTime } from 'luxon';

describe("Blog Preview", () => {
    it('should render', async () => {
        const props : IBlogPost = {
            title: "Hello World",
            body: "<p>Hello World! Nice to meet you<p><p>shouldn't see this in preview</p>",
            preview: "<p>Hello World! Nice to meet you</p>",
            author: "CIP",
            updatedAt: DateTime.utc().minus({ days: 3 }).toISO()
        }

        const element = render(<MemoryRouter><BlogPreview {...props}/></MemoryRouter>)

        const title = element.getByText("Hello World");
        const author = element.getByText("CIP");
        const date = element.getByText("3 days ago");
        
        expect(title.tagName).toBe("H1");
        expect(author).toBeTruthy();
        expect(author.parentElement).not.toBeNull();
        expect(author.parentElement?.tagName).toBe("H2");
        expect(author.classList).toContain("author");
        expect(date).toBeTruthy();

        expect(element.getByText("Hello World! Nice to meet you")).toBeTruthy();
        expect(element.queryByText("shouldn't see this in preview")).toBeFalsy();
    });

    describe('Date Element', () => {
        it.each`
        interval            | output
        ${{ months: 26 }}    | ${DateTime.utc().minus({ months: 26 }).toFormat('LLLL y')}
        ${{ months: 13 }}    | ${DateTime.utc().minus({ months: 13 }).toFormat('LLLL y')}
        ${{ months: 6 }}     | ${'6 months ago'}
        ${{ months: 1, days: 3 }}     | ${'Last Month'}
        ${{ days: 14 }}      | ${'2 weeks ago'}
        ${{ days: 8 }}       | ${'Last Week'}
        ${{ days: 1 }}       | ${'Yesterday'}
        ${{ hours: 1 }}      | ${'Today'}
        `('Print the time as $output', ({ interval, output}) => {
        
            const props : IBlogPost = {
                title: "Hello World",
                body: "<p>Hello World! Nice to meet you<p><p>shouldn't see this in preview</p>",
                preview: "<p>Hello World! Nice to meet you</p>",
                author: "CIP",
                updatedAt: DateTime.utc().minus(interval).toISO()
            }

            const element = render(<MemoryRouter><BlogPreview {...props}/></MemoryRouter>)
            const date = element.getByText(output);

            expect(date).toBeTruthy();
        });
    });
})