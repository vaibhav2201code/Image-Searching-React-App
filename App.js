import Searchbar from "./Components/SearchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./Components/ImageList";
function App() {
  const [images, setImages] = useState([]);
  const handlSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <Searchbar onSubmit={handlSubmit} />  
      <ImageList image={images} />
    </div>
  );
}

export default App;
