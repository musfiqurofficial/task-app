import "./App.css";
import Footer from "./components/common/Footer";
import { Navbar } from "./components/common/Navbar";
import Home from "./components/homePage/home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
