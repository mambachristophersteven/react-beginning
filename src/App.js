import Button from "./Components/Button/Button";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ModeToggler from "./Components/ModeToggler/ModeToggler";
import Navbar from "./Components/Navbar/Navbar";
import Promo from "./Components/Promo/Promo";
import ShowDate from "./Components/ShowDate/ShowDate";

function App() {

  const date =new Date();
  return (
    <div className="app">
      <Navbar name='christopher' age='19' weapon='hammer'/>
      <Header word='hello'/>
      <Footer/>
      <Button />
      <ModeToggler />
      <Promo />
      <ShowDate message = {date.getTime()}/>
    </div>
  );
}

export default App;
