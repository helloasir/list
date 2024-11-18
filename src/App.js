// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/webs.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePaginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              data={data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)}
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={handlePaginate}
            />
          }
        />
        <Route path="/domain/:domainName" element={<DetailsPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
