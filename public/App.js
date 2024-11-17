import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// HomePage component (displays only Rank and Domain)
function HomePage({ data }) {
  return (
    <div>
      <h1>Website List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td><Link to={`/details/${row.Rank}`}>{row.Rank}</Link></td>
              <td>{row.Domain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// DetailsPage component (displays full details for a selected row)
function DetailsPage({ rank, data }) {
  const row = data.find((item) => item.Rank === rank); // Find the corresponding row

  if (!row) {
    return <h2>Website not found!</h2>;
  }

  return (
    <div>
      <h1>Website Details for Rank {row.Rank}</h1>
      <table border="1">
        <tbody>
          <tr>
            <th>Rank</th>
            <td>{row.Rank}</td>
          </tr>
          <tr>
            <th>Domain</th>
            <td>{row.Domain}</td>
          </tr>
          <tr>
            <th>Data1</th>
            <td>{row.data1}</td>
          </tr>
          <tr>
            <th>Data2</th>
            <td>{row.data2}</td>
          </tr>
          <tr>
            <th>Data3</th>
            <td>{row.data3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Fetch data from webs.json in the public folder
  useEffect(() => {
    fetch('/webs.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Calculate the indices for the current page's data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<HomePage data={currentRows} />}
          />
          <Route
            path="/details/:rank"
            element={<DetailsPageWrapper data={data} />}
          />
        </Routes>

        {/* Pagination */}
        <div>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              style={{ margin: '0 5px' }}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </Router>
  );
}

// Wrapper for DetailsPage to fetch the rank from params
function DetailsPageWrapper({ data }) {
  return (
    <Routes>
      <Route
        path=":rank"
        element={
          <DetailsPage
            rank={window.location.pathname.split('/').pop()}
            data={data}
          />
        }
      />
    </Routes>
  );
}

export default App;
