import { FunctionComponent } from 'react';

import { DateTime } from 'luxon';

import { IBlogPost } from '../../../store/blog/store';

import './BlogPreview.scss';
import { Link } from 'react-router-dom';

interface IIntervalFormat {
    name: "days" | "weeks" | "months" | "years",
    previousPeriod: string,
    format?:string
    threshold: number,
    isPeriodFormatted?: boolean
}

const dateTimePeriods: IIntervalFormat[] = [
    { name: 'days', previousPeriod: "Yesterday", threshold: 1},
    { name: 'weeks', previousPeriod: "Last Week", threshold: 7},
    { name: 'months', previousPeriod: "Last Month", threshold: 31},
    { name: 'years', previousPeriod: "LLLL y", format: "LLLL y", threshold: 365, isPeriodFormatted: true}
]

const getAgeOfPost = (dateString: string): string => {
    const date = DateTime.fromISO(dateString)
    const diff = date.diffNow();
    const days = Math.floor(Math.abs(diff.as("days")));

    const periods = dateTimePeriods.filter(period => period.threshold <= days);

    if (!periods.length) { 
        return "Today";
    }

    const period = periods[periods.length-1];
    const nPeriods = Math.floor(Math.abs(diff.as(period.name)));

    if (nPeriods == 1) {
        return period.isPeriodFormatted ? date.toFormat(period.previousPeriod) : period.previousPeriod;
    }

    return period.format ? date.toFormat(period.format) : `${nPeriods} ${period.name} ago`;
};


const BlogPreview : FunctionComponent<IBlogPost> = (props: IBlogPost) => {
    return <article className="blog__preview">
        <Link to={`/blog/${props.slug}`}>
            <h1>{props.title}</h1>
            <h2>
                <span className="updated">{getAgeOfPost(props.updatedAt)}</span> by <span className="author">{props.author} </span>
            </h2>

            <div dangerouslySetInnerHTML={({__html: props.preview})}></div>
        </Link>
    </article>
}

export default BlogPreview;

