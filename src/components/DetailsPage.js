// src/components/DetailsPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";

function DetailsPage({ data }) {
  const { domainName } = useParams();
  const row = data.find((item) => item.Domain === domainName);

  if (!row) {
    return (
      <div>
        <h1>Domain Not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Details for {domainName}</h1>
      <table>
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
            <th>data1</th>
            <td>{row.data1}</td>
          </tr>
          <tr>
            <th>data2</th>
            <td>{row.data2}</td>
          </tr>
          <tr>
            <th>data3</th>
            <td>{row.data3}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default DetailsPage;
