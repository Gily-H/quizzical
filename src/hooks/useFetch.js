import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((newData) => setData(newData))
      .catch((err) => console.error(err));
  }, []);

  return data;
}
