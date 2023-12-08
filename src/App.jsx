//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
