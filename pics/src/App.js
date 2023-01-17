import SearchBar from "./compoments/SearchBar";
import ImageList from "./compoments/ImageList";
import searchImages from "./api";

function App() {
  const handleSubmit = async (term) => {
    const images = await searchImages(term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
