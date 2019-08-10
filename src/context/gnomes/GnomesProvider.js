import React from 'react';
import GnomesContext from './GnomesContext';

export default props => {

    return (
        <GnomesContext.Provider value={1}>
            {props.children}
        </GnomesContext.Provider>
    );

}
