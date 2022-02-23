import { useEffect, useState } from "react";
import axios from "axios";
const { REACT_APP_API_KEY } = process.env;

const useAllTheDoggies = () => {
  const [dogs, setDogs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAllTheDoggies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.thedogapi.com/v1/breeds?api_key=${REACT_APP_API_KEY}`
        );

        //if the data is empty return and show error
        if (!Object.keys(data).length) return setIsError(true);
        setIsLoading(false);
        setIsError(false);
        setDogs(data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
    };

    getAllTheDoggies();
  }, []);
  return { dogs, isError, isLoading };
};

export default useAllTheDoggies;
