import React from 'react';
import { useLocation } from "react-router-dom";

export function withLocationHook(Component) {
    return function WrappedComponent(props) {
        const location = useLocation();
        return <Component {...props} location={location} />
    }
}