import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./comps/header/Header";
import Footer from "./comps/footer/Footer";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import ScrollToTop from "./comps/scrolltotop/ScrollToTop";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Blog from "./pages/blogs/Blog";
function App() {

  ReactGA.initialize("G-C7MTQ781QQ");

  
  useEffect(() => {
    // Add the analytics script to the <head>
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-C7MTQ781QQ";
    document.head.appendChild(script1);

    // Add the gtag initialization script
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-C7MTQ781QQ');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
       <Header />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
