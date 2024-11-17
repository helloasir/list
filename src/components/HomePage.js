// src/components/HomePage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function HomePage({ data, paginate, totalPages, currentPage }) {
  const [visiblePageLinks, setVisiblePageLinks] = useState([]);

  useEffect(() => {
    const links = [];
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    // Ensure the links are within the valid page range
    if (startPage < 1) {
      startPage = 1;
      endPage = 5;
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - 4;
    }

    for (let i = startPage; i <= endPage; i++) {
      links.push(i);
    }

    setVisiblePageLinks(links);
  }, [currentPage, totalPages]);

  return (
    <div className="HomePage">
      <h1>Websites List</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Domain</th>
            {/* <th>data1</th>
            <th>data2</th>
            <th>data3</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.Rank}>
              <td>{row.Rank}</td>
              <td>
                <Link to={`/domain/${row.Domain}`}>{row.Domain}</Link>
              </td>
              {/* <td>{row.data1}</td>
              <td>{row.data2}</td>
              <td>{row.data3}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        {visiblePageLinks.map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </Button>
        ))}

        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
