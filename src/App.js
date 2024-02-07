import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";


function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
