import { useState, useEffect } from "react";

export function useLocalStore(intialState, key) {
  const [value, setValue] = useState(function () {
    const localData = localStorage.getItem("key");
    return localData ? JSON.parse(localData) : intialState;
  });

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
