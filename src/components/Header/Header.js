import React, { useState, useContext } from 'react';

import GnomesContext from '../../context/gnomes/GnomesContext';
import * as actionTypes from '../../context/gnomes/GnomesActions';
import './header.css';

export default () => {
  const [state, setState] = useState({ searchInput: '' });
  const [gnomesState, gnomesDispatch] = useContext(GnomesContext);

  React.useEffect(() => {
    return () => gnomesDispatch({ type: actionTypes.UPLOAD_FILTER, payload: gnomesState.gnomes });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputHandler = event => {
    strFilter(event.target.value);
    setState({
      [event.target.name]: event.target.value,
    });
  }

  const strFilter = str => {
    const filtered = str.length > 0 ?
      gnomesState.gnomes.filter(gnome => gnome.name.trim().toLowerCase().includes(str.trim().toLowerCase()))
      :
      gnomesState.gnomes;

    gnomesDispatch({ type: actionTypes.UPLOAD_FILTER, payload: filtered });
  }

  return (
    <header>
      <h1>Brastlewark</h1>
      <h5>Brastlewark is an almost exclusively gnomish city in eastern Cheliax, located on the western edge of the Aspodell Mountains, at the head of the Brastle River.</h5>
      <input placeholder="Search.." className="header-input" name="searchInput" type="text" value={state.searchInput} onChange={inputHandler} />
    </header>
  );

}
