import { useState, useEffect } from "react";
import axios from "axios";

export default useFetch = (endpoint, querry) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...querry,
    },
    headers: {
      "x-rapidapi-key": "f0dc0fb7a9msh395c65eeacd21e3p134854jsn992ec268938f",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert("there is an error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    isLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};
