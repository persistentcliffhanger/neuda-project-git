import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Pagenotfound from "./components/Pagenotfound";
import About from "./components/About";
import Footer from "./components/Footer";
import Allclaims from "./components/Allclaims";
import Claimdetails from "./components/Claimdetails";
import Landing from "./components/Landing";
import ClaimsTable from "./components/Claimstable";
import Newclaim from "./components/Newclaim";



function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/claimstable" element={<ClaimsTable />} />
          <Route path="/newclaim" element={<Newclaim />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/claimdetails" element={<Claimdetails />} />
          <Route path="/allclaims" element={<Allclaims />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
