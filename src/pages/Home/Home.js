import React, { useContext } from 'react';
import { List as VList, AutoSizer } from "react-virtualized";
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import GnomesContext from '../../context/gnomes/GnomesContext';
import './home.css';

// Virtualization constants
const ROW_HEIGHT = 450;
const OVERSCAN_ROW_COUNT = 10;

export default () => {
  const [gnomesState] = useContext(GnomesContext);

  if (gnomesState.error.status) return <Redirect to="/NoMatch" />;
  if (gnomesState.loading || Object.entries(gnomesState.gnomes).length === 0) return <p>Loading...</p>

  const printData = ({ index, key, style }) => <Card style={style} gnome={gnomesState.filter[index]} key={key} />;

  return (
    <>
      <Header />

      <div className="list-wrap">
        <AutoSizer>
          {(prop) => {
            return <VList
              width={prop.width}
              height={prop.height}
              rowHeight={ROW_HEIGHT}
              rowRenderer={printData}
              rowCount={gnomesState.filter.length}
              overscanRowCount={OVERSCAN_ROW_COUNT} />
          }}
        </AutoSizer>
      </div>

    </>
  );
}
