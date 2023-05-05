import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleNameChange = () => {
    const names = ["Lee", "Job", "Arun", "Babar"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()}!</p>

        {/* <p>{"Alpha"}</p>
        <p>{[1, 2, 3]}</p>
        <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
