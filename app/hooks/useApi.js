import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [listings, setlistings] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const request = async (...args) => {
    setloading(true);
    const response = await apiFunc(...args);
    setloading(false);
    if (!response.ok) return seterror(true);

    seterror(false);

    setlistings(response.data);
  };
  return { listings, error, loading, request };
};
