// src/App.js
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    const fetchData = async () => {
      const response = await fetch('/webs.json');
      const jsonData = await response.json();
      setData(jsonData);

      const rowsPerPage = 10; // Customize the number of rows per page
      setTotalPages(Math.ceil(jsonData.length / rowsPerPage));
    };

    fetchData();
  }, []);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="App">
      <HomePage
        data={data.slice((currentPage - 1) * 10, currentPage * 10)} // Get data for the current page
        paginate={paginate}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
