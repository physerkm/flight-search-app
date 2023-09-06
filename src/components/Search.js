import React, { useState } from 'react';

function Search() {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneWay, setOneWay] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const apiUrl = ``;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not OK.');
      }

      const data = await response.json();

      setSearchResults(data);

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Departure Airport"
        value={departureAirport}
        onChange={(e) => setDepartureAirport(e.target.value)} />
      <input
        type="text"
        placeholder="Arrival Airport"
        value={arrivalAirport}
        onChange={(e) => setArrivalAirport(e.target.value)} />
      <label>
        Departure Date:
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)} />
      </label>
      {!oneWay && (
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)} />
        </label>
      )}
      <label>
        One-way flight:
        <input
          type="checkbox"
          checked={oneWay}
          onChange={() => setOneWay(!oneWay)} />
      </label>

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((flight) => (
              <li key={flight.id}>
                {flight.airline}, {flight.city}, ...
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;