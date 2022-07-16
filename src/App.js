import logo from "./logo.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="img-fluid mb-4 rounded mt-5"
          width="80"
          alt="logo"
        />
        <Dictionary />
        
      </header>
    </div>
  );
}
