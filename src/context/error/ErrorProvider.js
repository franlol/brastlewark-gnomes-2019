import React from 'react';

import ErrorContext from './ErrorContext';

export default props => {

    return (
        <ErrorContext.Provider value={"errorcontext"}>
            {props.children}
        </ErrorContext.Provider>
    );
}
