import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Pagenotfound from "./components/Pagenotfound";
// import Newquikclaim from "./components/Newquikclaim";
import Home from "./components/Home";
// import Menu from "./components/Menu";
// import Search from "./components/Search";
import Footer from "./components/Footer";
// import ClaimsTable from "./components/Claimstable";
import FindClaimsPage from "./components/FindClaimsPage";
import Allclaims from "./components/Allclaims";

import Landing from "./components/Landing";
import ClaimsTable from "./components/Claimstable";
import Newclaim from "./components/Newclaim";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/newquikclaim" element={<Newquikclaim />} /> */}
          <Route path="/claimstable" element={<ClaimsTable />} />
          <Route path="/newclaim" element={<Newclaim />} />
          <Route
            path="/find"
            element={
              <FindClaimsPage
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          {/* <Route
            path="/find/:policyNumber"
            element={
              <FindClaimsPage
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              /> */}
          {/* } */}
          {/* /> */}
          <Route path="/landing" element={<Landing />} />
          <Route path="/allclaims" element={<Allclaims />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<h1>Welcome to the Payments system</h1>} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
