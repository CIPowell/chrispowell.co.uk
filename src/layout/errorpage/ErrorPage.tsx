import React, { FunctionComponent } from 'react';

const messages: {[index:number]: string} = {
    404 : "This isn't the content you're looking for...",
    500 : "Oops, that wasn't supposed to happen..."
}

interface IErrorPageProps {
    code: number
}

const ErrorPage: FunctionComponent<IErrorPageProps> = (props: IErrorPageProps) => {
    return <section className="error-page">
        <h2>{messages[props.code]}</h2>
    </section>
};

export default ErrorPage;