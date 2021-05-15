import React from 'react';
import personLogo from './images/person.png';

export default function KeyList({ item }) {
  return (
    <ol type="a" className="display-list-item" key={item.id}>
      {item.keys.map(key => (
        <li key={key.id} className="list-item-key">
          <img src={personLogo} className="person-icon-key" width="20" height="20"/>
          {key.title}
        </li>
      ))}
    </ol>
  );
}
