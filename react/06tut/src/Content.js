import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Alpha");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Lee", "Job", "Arun", "Babar"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
    </main>
  );
};

export default Content;
