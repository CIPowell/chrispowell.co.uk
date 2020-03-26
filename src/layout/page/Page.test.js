import React from 'react';

import Page from './Page';
import ContentSection from '../../components/contentsection/ContentSection';
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
    const ContentSections = app.find(ContentSection);

    expect(ContentSections.length).toBe(1);
    expect(ContentSections.at(0).hasClass('page-intro')).toBe(true);
  });

  it('has one intro section if there is more than one section', () => {
    const content = {
      "headline": "Headline",
      "sections": [{}, {}]
    };

    const app = shallow(<Page content={content}/>);
    const ContentSections = app.find(ContentSection);

    expect(ContentSections.length).toBe(2);

    ContentSections.forEach((ele, index) => expect(ele.key()).toBe(index.toString()));

    expect(ContentSections.at(0).hasClass('page-intro')).toBe(true);
    expect(ContentSections.at(0).hasClass('even')).toBe(true);
    expect(ContentSections.at(0).hasClass('odd')).toBe(false);
    expect(ContentSections.at(1).hasClass('page-intro')).toBe(false);
    expect(ContentSections.at(1).hasClass('even')).toBe(false);
    expect(ContentSections.at(1).hasClass('odd')).toBe(true);
  });
});