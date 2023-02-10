import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {

    const navigate = useNavigate();
    

  const handleSubmit = (event) => {
    event.preventDefault();
    let params = event.target.search.value;
      console.log("Params is equal to" + params);
        navigate("/searchresults?policy_number=" + params);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          id="search"
          type="text"
          className="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-black focus:ring-white focus:border-white"
          placeholder="I'm looking for..."
        />
        <button
          type="submit"
          className="hover:text-black text-white absolute right-2.5  px-2 bottom-2.5 border-solid border-stone-200 bg-grey hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm py-2"
        >
          Search
        </button>
        
      </div>
    </form>
    
  );
};

export default Search;
