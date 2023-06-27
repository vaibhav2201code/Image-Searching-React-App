import "./SearchBar.css";
import { useState } from "react";
function Searchbar({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");
    onSubmit(value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term:</label>
        <input onChange={handleChange} value={value} />
        <button>Click me</button>
      </form>
    </div>
  );
}

export default Searchbar;
