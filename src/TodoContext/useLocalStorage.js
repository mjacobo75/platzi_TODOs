import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItems = localStorage.getItem(itemName);
          let parsedItems;
  
          if (!localStorageItems) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItems = initialValue;
          } else {
            parsedItems = JSON.parse(localStorageItems);
          }
  
          setItem(parsedItems);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 1000);
    });
  
    const saveItems = (newItems) => {
      try {
        const stringifyItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifyItems);
        setItem(newItems);
      } catch(error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItems,
      loading,
      error
    }
}

export { useLocalStorage };