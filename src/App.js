import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./comps/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
        <Routes>
         
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
