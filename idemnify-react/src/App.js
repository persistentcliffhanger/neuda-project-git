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
import Purpose from "./components/Purpose";
import AddClaim from "./components/Addclaim";
import SearchResults from "./components/Searchresults";
import Claimdetailsedit from "./components/ClaimdetailsEdit";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/claimstable" element={<ClaimsTable />} />
          <Route path="/addclaim" element={<AddClaim />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/claimdetails" element={<Claimdetails />} />
          <Route path="/allclaims" element={<Allclaims />} />
          <Route path="/about" element={<About />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/claimdetailsedit" element={<Claimdetailsedit />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
