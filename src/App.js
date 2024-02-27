import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import WorkerText from "./Components/WorkerText/WorkerText";
import Calculator from "./Components/Calculator/Calculator";
import Accordion from "./Pages/Accordion/Accordion";
import './App.css'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/day" element={<WorkerText/>}/>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/accordion" element={<Accordion />}></Route>
      </Routes>
    </div>
  );
}

export default App;
