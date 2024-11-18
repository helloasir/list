// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "./Pagination";

// Styled components for layout and table styling
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f9fc;
`;

const Content = styled.div`
  width: 90%;
  max-width: 900px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  padding: 12px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 12px;
  background-color: #f9f9f9;
  color: #555;
`;

function HomePage({ data, currentPage, totalPages, paginate }) {
  return (
    <Container>
      <Content>
        <h1>Website Rankings</h1>
        <Table>
          <thead>
            <tr>
              <TableHeader>Rank</TableHeader>
              <TableHeader>Domain</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <TableData>{row.Rank}</TableData>
                <TableData>
                  <Link to={`/domain/${row.Domain}`}>{row.Domain}</Link>
                </TableData>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination Component */}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          paginate={paginate} 
        />
      </Content>
    </Container>
  );
}

export default HomePage;
