import useFetchPhotos from "./hooks/useFetchPhotos";

function App() {
  const { photos, loading, error } = useFetchPhotos();

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-red-500 text-xl">{error}</p>
    </div>
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <pre>{JSON.stringify(photos[0], null, 2)}</pre>
    </div>
  );
}

export default App;