import React, { useReducer, useEffect } from 'react';

import GnomesState from './GnomesState';
import GnomesReducer from './GnomesReducer';
import GnomesContext from './GnomesContext';
import * as actionTypes from './GnomesActions';
import useFetch from '../../hooks/useFetch';

export default props => {
    const [state, dispatch] = useReducer(GnomesReducer, GnomesState);
    const [gnomes, gnomesLoading, gnomesError] = useFetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');

    useEffect(() => {
        if (Object.entries(gnomes).length !== 0) dispatch({ type: actionTypes.UPLOAD_GNOMES, payload: gnomes.Brastlewark });
    }, [gnomes]);

    useEffect(() => {
        dispatch({ type: actionTypes.UPLOAD_LOADING, payload: gnomesLoading });
    }, [gnomesLoading]);

    useEffect(() => {
        dispatch({ type: actionTypes.UPLOAD_ERRORS, payload: gnomesError });
    }, [gnomesError]);

    return (
        <GnomesContext.Provider value={[state, dispatch]}>
            {props.children}
        </GnomesContext.Provider>
    );

}
