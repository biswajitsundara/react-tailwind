const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <div className="search m-4 b-4">
        <input
          type="text"
          className="border-2 border-solid border-sky-500 rounded-lg px-4 py-2"
        />
        <button className="p-2 bg-blue-200 m-4 rounded-lg">Search</button>
        <button className="p-2 bg-green-200 m-4 rounded-lg">
          Top Rated Restaurants
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
