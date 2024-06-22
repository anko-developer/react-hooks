import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  return { value, onChange };
}
