import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordian from "./components/Accordian";
import Passionate from "./components/Passionate";
import VerticalOverflow from "./components/VerticalOverflow";
import OurProject from "./components/OurProject";
import SocialIcon from "./components/SocialIcon";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Accordian />
      <Passionate />
      <OurProject />
      <SocialIcon />
      <VerticalOverflow />
      <Footer />
    </>
  );
}

export default App;
