// import { useState } from "react";
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
// import Newclaim from "./components/Newclaim";
import Purpose from "./components/Purpose";
import AddClaim from "./components/Addclaim";
import SearchResults from "./components/Searchresults";

function App() {
  // const [searchTerm, setSearchTerm] = useState("");

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
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

// export default App;

//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentUser, setCurrentUser] = useState({ name : "", role : ""});

//   return (
//     <BrowserRouter>
//     <Provider store={store} >
//     <UserContext.Provider value={{user:currentUser, setUser:setCurrentUser }}>
//       <Menu />
//       <Routes>
//         <Route path="/login" element = {<Login />} />

//         <Route path="/add" element = {
//             <ProtectedRoute path="add" roles={["MANAGER"]} element = {<AddClaim />} />}
//         />
//         <Route path="/find" element = {
//             <ProtectedRoute path="find" roles={["USER", "MANAGER"]} element = {
//             <FindClaimsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
//           />
//         } />
//         <Route path="/find/:orderId" element = {<ProtectedRoute roles={["USER", "MANAGER"]}
//         element = {
//           <FindTransactionsPage path="find" searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
//         /> }
//         />
//         <Route path="/" element = { <h1>Welcome to the Payments system</h1>}/>
//         <Route path="*" element = { <><h1>Sorry - that page doesn't exist</h1><p>Page not found</p></>}/>
//       </Routes>
//       </UserContext.Provider>
//       </Provider>
//     </BrowserRouter>
//   );
// }

export default App;
