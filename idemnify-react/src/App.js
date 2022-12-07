import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Newquikclaim from "./components/Newquikclaim";
// import Menu from "./components/Menu";
import Search from "./components/Search";
// import Footer from "./components/Footer";
// import ClaimsTable from "./components/Claimstable";
import FindClaimsPage from "./components/FindClaimsPage";

import Landing from './components/Landing';
import ClaimsTable from "./components/Claimstable";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/newquikclaim" element={<Newquikclaim />} />
          <Route path="/claimstable" element={<ClaimsTable />} />
          <Route
            path="/find"
            element={
              <FindClaimsPage
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          <Route
            path="/find/:orderId"
            element={
              <FindClaimsPage
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<h1>Welcome to the Payments system</h1>} />
          <Route path="*" element={<h1>Sorry - that page doesn't exist</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
