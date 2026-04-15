import React from 'react';
import clsx from "clsx";

const Container = ({children, className = "max-w-7xl"}) => {
    return (
        <div className={clsx("mx-auto px-4 md:px-5 lg:px-0", className)}>
            {children}
        </div>
    );
};

export default Container;