
function SearchBar({ searchQuery, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by author..."
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default SearchBar;