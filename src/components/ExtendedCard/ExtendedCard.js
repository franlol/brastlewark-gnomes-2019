import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import GnomesContext from '../../context/gnomes/GnomesContext';
import './extendedCard.css';

export default props => {
  const [gnomesState] = useContext(GnomesContext);
  const { gnome } = props;

  const getByName = name => {
    const filter = gnomesState.gnomes.filter(gnome => gnome.name.trim().toLowerCase().includes(name.trim().toLowerCase().replace(',', '')));
    return filter[0];
  }

  const getFriends = () => gnome.friends.map((friend, i) => {
    const gnomeFriend = getByName(friend);
    return <Link key={i} to={{ pathname: `/gnome/${gnomeFriend.id}`, gnome: gnomeFriend }}>{`${friend}${gnome.friends.length > i + 1 ? `, ` : ``}`}</Link>
  });

  const getProfessions = () => gnome.professions.map((profession, i) => `${profession}${gnome.professions.length > i + 1 ? `, ` : ``}`);

  return (
    <div className="extended-card">

      <div className="extended-card-wrap">
        <div className="extended-card-image-wrap">
          <img src={gnome.thumbnail} alt={gnome.name} />
        </div>
        <div className="extended-card-info">
          <h2>{gnome.name}</h2>
          <p>{gnome.age} years old</p>
          <p>{gnome.weight.toFixed(1)}kg</p>
          <p>{gnome.height.toFixed(1)}cm</p>
          <p>Hair color: {gnome.hair_color}</p>
          {gnome.friends.length > 0 && <p>Friends: {getFriends()}</p>}
          {gnome.professions.length > 0 && <p>Profession: {getProfessions()}</p>}
        </div>
      </div>
    </div>
  );

}
