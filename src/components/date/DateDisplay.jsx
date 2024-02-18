import { format, formatDistanceToNowStrict } from 'date-fns';


export default function DateDisplay({date}) {

    if (typeof date !== typeof new Date()) {
        date = new Date(date);  
    }

    if (date.getFullYear() === new Date().getFullYear()) {
        return (<p data-testid="date-display">{formatDistanceToNowStrict(date, {
            roundingMethod: "floor",
            addSuffix: true
        })}</p>)
    }

    return (<p data-testid="date-display">{format(date, 'do MMMM yyyy')}</p>)
}