import React from 'react';
import { useLocation } from 'react-router-dom';

export const Error404 = () => {
    console.log(useLocation())
    return (
        <div>
            Error404
        </div>
    );
};

