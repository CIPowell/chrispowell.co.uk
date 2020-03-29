import React from 'react';

const messages = {
    404 : "This isn't the content you're looking for...",
    500 : "Oops, that wasn't supposed to happen..."
}

const ErrorPage = (props) => {
    return <section className="error-page">
        <h2>{messages[props.code]}</h2>
    </section>
};

export default ErrorPage;