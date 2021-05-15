import React from 'react';

export default function Search({ onSearch }) {
  const clickHandler = event => {
    if (event.keyCode === 13) {
      onSearch(event.target.value);
    }
  }
  return (
    <input type="text" onKeyUp={clickHandler} className="search" placeholder="Search for category.." />
  );
}
