import { useState } from "react";

export default function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const { value } = e.target;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
}
