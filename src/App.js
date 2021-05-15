import React, { useState, useEffect } from 'react';
import { transformData, getFilteredItems } from './utils/transform';
import MainList from './main-list';
import Search from './search';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://okrcentral.github.io/sample-okrs/db.json')
      .then(res => res.json())
      .then(
        data => {
          const results = transformData(data);
          setIsLoaded(true);
          setItems(results);
          setResults(results);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const onSearch = value => {
    let tempItems = [...results];
    let filteredItems = []
    if(value.length !== 0) {
      filteredItems = getFilteredItems(tempItems, value);
    } else {
      filteredItems = [...results];
    }
    setItems(filteredItems);
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Search onSearch={onSearch}/>
        <MainList items={items} />
      </>
    );
  }
}

export default App;
