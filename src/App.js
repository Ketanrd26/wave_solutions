import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./comps/header/Header";
import Footer from "./comps/footer/Footer";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import ScrollToTop from "./comps/scrolltotop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
       <Header />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
