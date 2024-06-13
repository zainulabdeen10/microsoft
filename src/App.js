import "./App.css";
import Navbar from "./components/Navbar";
import Curousel from "./components/Curousel";
import MicrosoftTypes from "./components/MicrosoftServices/MicrosoftTypes";
import HomeCard from "./components/HomeCard/Card";
import HomeBusinessSection from "./components/HomeBusinessSection/index";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Curousel />
      <MicrosoftTypes />
      <HomeCard />
      <HomeBusinessSection />
      <Footer />
    </>
  );
}

export default App;
