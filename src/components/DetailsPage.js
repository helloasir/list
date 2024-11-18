// src/components/DetailsPage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components for layout and table styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  margin: 5px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  
  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;

function DetailsPage({ data }) {
  const { domainName } = useParams();  // Get the domain from the URL params
  const domainData = data.find((row) => row.Domain === domainName); // Get the row for this domain
  const navigate = useNavigate();

  // Find the index of the current domain in the data array
  const currentIndex = data.findIndex((row) => row.Domain === domainName);

  // Go to the previous domain if available
  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/domain/${data[currentIndex - 1].Domain}`);  // Navigate to previous domain
    }
  };

  // Go to the next domain if available
  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      navigate(`/domain/${data[currentIndex + 1].Domain}`);  // Navigate to next domain
    }
  };

  return (
    <Container>
      <Content>
        <h1>Details for {domainData?.Domain}</h1>
        
        {/* Displaying the data in rows */}
        <Table>
          <tbody>
            <tr>
              <TableHeader>Rank</TableHeader>
              <TableData>{domainData?.Rank}</TableData>
            </tr>
            <tr>
              <TableHeader>Domain</TableHeader>
              <TableData>{domainData?.Domain}</TableData>
            </tr>
            <tr>
              <TableHeader>Data1</TableHeader>
              <TableData>{domainData?.data1}</TableData>
            </tr>
            <tr>
              <TableHeader>Data2</TableHeader>
              <TableData>{domainData?.data2}</TableData>
            </tr>
            <tr>
              <TableHeader>Data3</TableHeader>
              <TableData>{domainData?.data3}</TableData>
            </tr>
          </tbody>
        </Table>

        {/* Navigation buttons: Previous, Home, Next */}
        <ButtonContainer>
          {/* Ensure the "Previous" button is only active if it's not the first domain */}
          <StyledButton onClick={handlePrevious} disabled={currentIndex === 0}>
            Previous
          </StyledButton>

          {/* Home Button */}
          <StyledButton to="/">Home</StyledButton>

          {/* Ensure the "Next" button is only active if it's not the last domain */}
          <StyledButton onClick={handleNext} disabled={currentIndex === data.length - 1}>
            Next
          </StyledButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default DetailsPage;
