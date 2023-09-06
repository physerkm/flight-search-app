import React, { useState } from 'react';

const FlightList = ({ flights }) => {
  const [sortKey, setSortKey] = useState('departureTime');
  const [sortOrder, setSortOrder] = useState('asc');

  const sortFlights = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedFlights = flights.slice().sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
  });

  return (
    <div className="flight-list-container">
      <h2>Flight List</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortFlights('departureTime')}>
              Departure Time {sortKey === 'departureTime' && sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th onClick={() => sortFlights('returnTime')}>
              Return Time {sortKey === 'returnTime' && sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th onClick={() => sortFlights('flightLength')}>
              Flight Length {sortKey === 'flightLength' && sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th onClick={() => sortFlights('price')}>
              Price {sortKey === 'price' && sortOrder === 'asc' ? '▲' : '▼'}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedFlights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.departureTime}</td>
              <td>{flight.returnTime}</td>
              <td>{flight.flightLength}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
