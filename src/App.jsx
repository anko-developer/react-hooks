import React from "react";
import useInputs from "./hooks/useInputs";
import axios from "axios";

export default function App() {
  const maxLength = (value) => value.length <= 10;
  const [form, onChange, reset] = useInputs(
    {
      username: "",
      email: "",
    },
    maxLength
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/memo", form);
  };

  return (
    <>
      <div>Custom Hook</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="username"
          onChange={onChange}
          value={form.value}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={form.value}
        />
        <button>확인</button>
        <button onClick={reset}>Reset</button>
      </form>
    </>
  );
}
