// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ data, paginate, totalPages, currentPage }) {
  return (
    <div className="HomePage">
      <h1>Websites List</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Domain</th>
            <th>data1</th>
            <th>data2</th>
            <th>data3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.Rank}>
              <td>{row.Rank}</td>
              <td>
                <Link to={`/domain/${row.Domain}`}>{row.Domain}</Link>
              </td>
              <td>{row.data1}</td>
              <td>{row.data2}</td>
              <td>{row.data3}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            disabled={currentPage === pageNumber}
            className="pagination-button"
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
