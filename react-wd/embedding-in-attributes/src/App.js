// import logo from "./logo.svg";
// import "./App.css";
import avatar from "./avatar.jpeg";

function Logo(props) {
  const userPic = <img src={avatar} />;
  return userPic;
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Logo />
    </div>
  );
}

export default App;
