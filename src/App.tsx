import AboutUs from "./components/aboutUs";
import Hero from "./components/hero";
import Header from "./components/header";
import Menu from "./components/menu";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import './style.css';
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Menu />
      <Gallery />
      <Contact />
    </Container>
  );

}

export default App
