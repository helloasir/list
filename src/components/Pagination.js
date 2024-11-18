// src/components/Pagination.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components for pagination styling
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled(Link)`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  
  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;

function Pagination({ currentPage, totalPages, paginate }) {
  return (
    <PaginationContainer>
      <PaginationButton 
        to={`#`} 
        onClick={() => paginate(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>

      {[...Array(totalPages)].map((_, index) => (
        <PaginationButton 
          key={index} 
          to={`#`} 
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </PaginationButton>
      ))}

      <PaginationButton 
        to={`#`} 
        onClick={() => paginate(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
}

export default Pagination;
