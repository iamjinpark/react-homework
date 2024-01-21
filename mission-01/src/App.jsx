import React from "react";
import { GoBackButton } from "./components/GoBackButton.jsx";
import { LoginText } from "./components/LoginText.jsx";
import { LoginInput } from "./components/LoginInput.jsx";
import { FindAccountText } from "./components/FindAccountText.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <GoBackButton />
      <LoginText />
      <LoginInput />
      <FindAccountText />
    </div>
  );
}
