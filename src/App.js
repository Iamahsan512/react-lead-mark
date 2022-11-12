import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Blog />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
