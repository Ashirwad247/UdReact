import { useState } from "react";
import styled from "styled-components"; // Import styled from styled-components
import Button from "./Button";
import Input from "./Input";
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm mx-auto  p-8 rounded shadow-md bg-gradient-to-b from-stone-700
    to-stone-800
    "
    >
      <div className="flex flex-col gap-2 mb-6">
        <Input label="Email" invalid={emailNotValid} type="email"></Input>
        <Input
          label="Password"
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        ></Input>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
        <p style={{ color: "red" }}>hello</p>
      </div>
    </div>
  );
}
