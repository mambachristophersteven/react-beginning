import Button from "./Components/Button/Button";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ModeToggler from "./Components/ModeToggler/ModeToggler";
import Navbar from "./Components/Navbar/Navbar";
import Promo from "./Components/Promo/Promo";

function App() {
  return (
    <div className="app">
      <Navbar name='christopher' age='19' weapon='hammer'/>
      <Header word='hello'/>
      <Footer/>
      <Button />
      <ModeToggler />
      <Promo />
    </div>
  );
}

export default App;
