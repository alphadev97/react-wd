import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Lee", "Job", "Arun", "Babar"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          handleClick2("Alpha");
        }}
      >
        Click Me
      </button>
      <button onClick={(e) => handleClick3(e)}>Click Me</button>
    </main>
  );
};

export default Content;
