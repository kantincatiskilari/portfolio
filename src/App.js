import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Tabs from "./components/tabs/Tabs";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="app">
      {page === 0 && <Home setPage={setPage}/>}
      {page === 1 && <About />}
      {page === 2 && <Portfolio />}
      {page === 3 && <Contact />}
      <Tabs setPage={setPage} />
    </div>
  );
}

export default App;
