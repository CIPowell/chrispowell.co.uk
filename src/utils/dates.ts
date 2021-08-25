import { DateTime } from 'luxon';

export interface IIntervalFormat {
    name: "days" | "weeks" | "months" | "years",
    previousPeriod: string,
    format?:string
    threshold: number,
    isPeriodFormatted?: boolean
}

export const dateTimePeriods: IIntervalFormat[] = [
    { name: 'days', previousPeriod: "Yesterday", threshold: 1},
    { name: 'weeks', previousPeriod: "Last Week", threshold: 7},
    { name: 'months', previousPeriod: "Last Month", threshold: 31},
    { name: 'years', previousPeriod: "LLLL y", format: "LLLL y", threshold: 365, isPeriodFormatted: true}
]

export const getAge = (dateString: string): string => {
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