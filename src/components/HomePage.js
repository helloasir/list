// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

function HomePage({ data, currentPage, totalPages, paginate }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="HomePage">
      <h1>Websites List</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.Rank}>
              <td>{row.Rank}</td>
              <td>
                <Link to={`/domain/${row.Domain}`}>{row.Domain}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            disabled={number === currentPage}
          >
            {number}
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
  );
}

export default HomePage;
