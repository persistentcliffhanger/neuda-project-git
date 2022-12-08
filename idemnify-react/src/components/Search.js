import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
  //   const [valid, setValid] = useState(true);
  //   const [touched, setTouched] = useState(false);
    const navigate = useNavigate();
    

  const handleSubmit = (event) => {
    event.preventDefault();
    let params = event.target.search.value;
      console.log("Params is equal to" + params);
        navigate("/claimstable?search=" + params);
  };

  return (
    // <div className="searchBox">
    <form onSubmit={handleSubmit}>
      <div className="relative">
        {/* <label htmlFor="policynumber">Policy Number</label> */}
        <input
          //   onChange={handleChange}
          //   value={localSearchTerm}
          id="search"
          type="text"
          className="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-black focus:ring-white focus:border-white"
          placeholder="policy number..."
        />
        <button
          type="submit"
          className="hover:text-black text-white absolute right-2.5  px-2 bottom-2.5 border-solid border-stone-200 bg-grey hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm py-2"
        >
          Search
        </button>
        
      </div>
    </form>
    // </div>
  );
};

export default Search;
