import { useState } from "react";

export default function useStart(initialValue) {
  const [start, setStart] = useState(initialValue);

  return [start, () => setStart((prevStart) => !prevStart)];
}
