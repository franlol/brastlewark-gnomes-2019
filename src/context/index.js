import React from 'react';

import GnomesProvider from './gnomes/GnomesProvider';
import ErrorProvider from './error/ErrorProvider';

export default props => (
    <GnomesProvider>
        <ErrorProvider>
            {props.children}
        </ErrorProvider>
    </GnomesProvider>
);
