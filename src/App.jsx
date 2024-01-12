import { useEffect } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

export default function App() {
  useEffect(function () {
    fetch("http://127.0.0.1:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  });
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}
