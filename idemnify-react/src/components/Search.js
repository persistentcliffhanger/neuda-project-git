import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [valid, setValid] = useState(true);
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  const checkValidity = (value) => {
    setValid(value.trim().length > 0);
  };

  const handleChange = (event) => {
    setTouched(true);
    setLocalSearchTerm(event.target.value);
    checkValidity(event.target.value);
  };

  const doSearch = (event) => {
    event.preventDefault();
    props.setSearchTerm(localSearchTerm);
    navigate(`/find/${localSearchTerm}`);
  };

  const clearForm = () => {
    setLocalSearchTerm("");
    setTouched(false);
    setValid(true);
    props.setSearchTerm("");
  };

  return (
    <div className="searchBox">
      <form onSubmit={doSearch}>
        <label htmlFor="policynumber">Policy Number</label>
        <input
          onChange={handleChange}
          value={localSearchTerm}
          id="policynumber"
          type="text"
          style={{ border: valid ? "1px solid #000" : "2px solid #f00" }}
        />
        <button type="submit" disabled={!valid || !touched}>
          Search
        </button>
        <button onClick={clearForm}>Reset</button>
      </form>
    </div>
  );
};

export default Search;
