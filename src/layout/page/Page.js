import React from 'react';

import './Page.scss';
import ContentSection from '../../components/contentsection/ContentSection';

const Page = (props) => {
  function getSectionClasses(index) {
    const classList = [(index % 2 === 0 ? 'even' : 'odd')];

    if (index === 0) { classList.push('page-intro'); }

    return classList.join(' ');
  }

  return <section className="page">
    <header className="page-header">
      <h1>{props.content.headline}</h1>
    </header>

    {props.content.sections.map((section, index) => <ContentSection content={section} key={index} className={getSectionClasses(index)} />)}
  </section>;
}

export default Page;