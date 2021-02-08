import React from 'react';

import Page, {IPageContent} from './Page';
import { render } from '@testing-library/react';

describe('Homepage component', () => {
  it('renders the headline', () => {
    const content: IPageContent = {
      "headline": "I've been working in tech roles in an eclectic mix of fields since 2006",
      "sections": []
    };

    const app = render(<Page content={content}/>);

    expect(app.getByText(content.headline)).toBeTruthy();
  });
});