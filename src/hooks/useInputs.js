import { useCallback, useState } from "react";

export default function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  // change
  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}
