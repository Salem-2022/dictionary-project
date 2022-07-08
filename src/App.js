import logo from "./logo.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="img-fluid rounded mt-5"
          width="100"
          alt="logo"
        />
      </header>
    </div>
  );
}
