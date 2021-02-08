import React, { FunctionComponent } from 'react';

import './Page.scss';
import { ContentSection, IContentSectionProps } from '../../components/contentsection/ContentSection';

export interface IPageProps {
  content: IPageContent
}

export interface IPageContent {
  headline: string,
  sections: IContentSectionProps[]
}

const Page: FunctionComponent<IPageProps> = (props: IPageProps) => {
  return <section className="page">
    <header className="page-header">
      <h1>{props.content.headline}</h1>
    </header>

    {props.content.sections.map((section, index) => <ContentSection {...section} key={index} />)}
  </section>;
}

export default Page;