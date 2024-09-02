import { useState, useEffect } from "react";

  function useLocalStorage(key, defaultValue) {
    const [selectedItems , setSelectedItems] = useState(() => {
      const savedItem = localStorage.getItem(key);
      return savedItem ? JSON.parse(savedItem) : defaultValue;
  });
  
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(selectedItems));
    }, [selectedItems]);
  
    return [selectedItems, setSelectedItems];
  }
  
  export default useLocalStorage;


 