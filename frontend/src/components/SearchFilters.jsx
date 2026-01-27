function SearchFilters() {
  return (
    <div className="filters">
      <input placeholder="Destination" />
      <input type="date" />
      <input placeholder="Passengers" />
      <select>
        <option>3★</option>
        <option>4★</option>
        <option>5★</option>
      </select>

      <label><input type="checkbox" /> Lunch</label>
      <label><input type="checkbox" /> Dinner</label>

      <button className="search-btn">Search</button>
    </div>
  );
}

export default SearchFilters;
