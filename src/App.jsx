import useFetchPhotos from "./hooks/useFetchPhotos";
import PhotoCard from "./components/PhotoCard";
import SearchBar from "./components/SearchBar";
import { useState,useReducer } from "react";
import { favouritesReducer, initialState } from "./reducer/favouritesReducer"
function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchQuery, setSearchQuery] = useState("");
  const [state, dispatch] = useReducer(favouritesReducer, initialState)

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  const filteredPhotos = photos.filter((photo) =>
    photo.author.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      {/* <pre>{JSON.stringify(photos[0], null, 2)}</pre> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourite={state.favourites.includes(photo.id)}
            onToggleFavourite={() =>
              dispatch({ type: "TOGGLE_FAVOURITE", payload: photo.id })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
