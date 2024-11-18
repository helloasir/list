// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetching the data from the public folder (websites.json)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/webs.json");
      const jsonData = await response.json();
      setData(jsonData);
      setTotalPages(Math.ceil(jsonData.length / 10));
    };
    fetchData();
  }, []);

  // Paginate function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Slice the data for the current page
  const indexOfLast = currentPage * 10;
  const indexOfFirst = indexOfLast - 10;
  const currentData = data.slice(indexOfFirst, indexOfLast);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage data={currentData} currentPage={currentPage} totalPages={totalPages} paginate={paginate} />} 
        />
        <Route 
          path="/domain/:domainName" 
          element={<DetailsPage data={data} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
