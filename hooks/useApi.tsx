import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);// first story    

    if (!response.ok) {
      setError(true);
      console.log(response.problem);
      return;
    }//set error to true and log problem

    setError(false);
    setData(response.data);// another story
  }

  return { data, error, loading, request };
};
