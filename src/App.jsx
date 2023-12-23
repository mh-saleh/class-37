import Navbar from "./components/layouts/1.Navbar/Navbar";
import Banner from "./components/layouts/2.Banner/Banner";
import About from "./components/layouts/3.About/About";
import Blog from "./components/layouts/4.Blog/Blog";
import Service from "./components/layouts/5.Service/Service";
import Portfolio from "./components/layouts/6.Portfolio/Portfolio";
import Letter from "./components/layouts/7.Letter/Letter";
import Footer from "./components/layouts/8.Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      <Service />
      <Blog />
      <Letter />
      <Footer />
    </>
  );
}

export default App;
