export const transformData = results => {
  const data = results.data;
  const tResults = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].parent_objective_id === '') {
      data[i].keys = [];
      tResults[data[i].id] = data[i];
    } else if (data[i].parent_objective_id) {
      if (tResults[data[i].parent_objective_id]) {
        tResults[data[i].parent_objective_id].keys.push(data[i]);
      }
    }
  }
  return Object.values(tResults);
};

export const getFilteredItems = (results, key) => {
  const filterResults = [];
  const lKey = key.toLowerCase();
  for (let i = 0; i < results.length; i++) {
    if (results[i].category.toLowerCase() === lKey) {
      filterResults.push(results[i]);
    }
  }
  return filterResults;
}