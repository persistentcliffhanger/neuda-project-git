
import "./App.css";
import Header1 from "./components/Header";
import Newquikclaim from "./components/Newquikclaim";
import Footer from "./components/Footer";
import ClaimsTable from "./components/Claimstable";

// import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      {/* <Landing /> */}
      
      <Header1 />
      
      <ClaimsTable />
      {/* <Newquikclaim /> */}
      <Footer />
    </div>
  );
}

export default App;
