import React from 'react';

import Page from './Page';
import { shallow } from 'enzyme';

describe('Homepage component', () => {
  it('renders the headline', () => {
    const content = {
      "headline": "I've been working in tech roles in an eclectic mix of fields since 2006",
      "sections": []
    };

    const app = shallow(<Page content={content}/>);

    expect(app.containsMatchingElement(<h2>{content.headline}</h2>))
      .toEqual(true);
  });

  it('has an intro section if there is one section', () => {
    const content = {
      "headline": "Headline",
      "sections": [{}]
    };

    const app = shallow(<Page content={content}/>);

    expect(app.find('section.page-intro').length).toBe(1);
  });

  it('has one intro section if there is more than one section', () => {
    const content = {
      "headline": "Headline",
      "sections": [{}, {}]
    };

    const app = shallow(<Page content={content}/>);

    expect(app.find('section.page-intro').length).toBe(1);
    expect(app.find('section.page-body').length).toBe(1);
  });
});