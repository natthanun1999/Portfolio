import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonial/testimonial";
import Work from "./components/work/work";
import './app.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
