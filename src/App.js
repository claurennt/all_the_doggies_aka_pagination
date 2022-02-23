import "./styles.css";
import { useEffect, useState } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";
import NoDog from "./NoDog.jsx";
import Dog from "./Dog.jsx";
import Next from "./Next.jsx";
import Prev from "./Prev.js";
import useAllTheDoggies from "./useAllTheDoggies";

export default function App() {
  const { dogs, isError, isLoading } = useAllTheDoggies();
  const [startEnd, setStartEnd] = useState({ start: 0, end: 2 });

  const handleMore = () => {
    setStartEnd((prev) => ({ start: prev.start + 1, end: prev.end + 1 }));
  };
  return (
    <div className="App">
      {isError && <NoDog />}
      {isLoading && (
        <Rings height="300" width="300" color="#8EB8E5" ariaLabel="loading" />
      )}
      <Next handleMore={handleMore} />
      <Prev />
      {dogs?.slice(startEnd.start, startEnd.end).map((dog) => (
        <Dog {...dog} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}
