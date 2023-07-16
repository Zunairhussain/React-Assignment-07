import About from "./components/about/About";
import Category from "./components/category/Category";
import Discount from "./components/discount/Discount";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Arrival from "./components/newArrivals/Arrivals";
import Ournews from "./components/ourNews/Ournews";
import Trick from "./components/trickortreat/Trick";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />    
      <Category />
      <About />
      <Trick />
      <Discount />
      <Arrival />
      <Ournews />
      <Footer />
    </div>
  );
}

export default App;
