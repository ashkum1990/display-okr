import React, { useEffect } from 'react';
import KeyList from './key-list';
import personLogo from './images/person.png';

export default function MainList({ items }) {
  useEffect(() => {
    let arrows = document.getElementsByClassName('arrow');
    function clickHandler(event) {
      this.parentElement
          .querySelector('.display-list-item')
          .classList.toggle('hide-list-item');
        this.classList.toggle('arrow-down');
    }
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener('click', clickHandler);
    }
    return ( () => {
      for (let i = 0; i < arrows.length; i++) {
        arrows[i].removeEventListener('click', clickHandler);
      }
   });
  }, [items]);

  return (
    <ol className="parent-list">
      {items.map(item => (
        <li key={item.id} className="list-item">
          <img src={personLogo} className="person-icon" width="20" height="20"/>
          <div className={item.keys.length > 0 ? 'arrow' : ''}>{item.title}</div>
          <KeyList item={item} />
        </li>
      ))}
    </ol>
  );
}
