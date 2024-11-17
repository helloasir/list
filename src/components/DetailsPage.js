// src/components/DetailsPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailsPage({ data }) {
  const { domainName } = useParams();
  const row = data.find((item) => item.Domain === domainName);

  if (!row) {
    return <h2>Website not found!</h2>;
  }

  const currentIndex = data.findIndex((item) => item.Domain === domainName);
  const previousRow = currentIndex > 0 ? data[currentIndex - 1] : null;
  const nextRow = currentIndex < data.length - 1 ? data[currentIndex + 1] : null;

  return (
    <div>
      <h1>Website Details for Domain: {row.Domain}</h1>
      <table className="details-table">
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
            <th>Data1</th>
            <td>{row.data1}</td>
          </tr>
          <tr>
            <th>Data2</th>
            <td>{row.data2}</td>
          </tr>
          <tr>
            <th>Data3</th>
            <td>{row.data3}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <Link to="/">Back to Home</Link>
      </div>

      {previousRow && (
        <div>
          <Link to={`/domain/${previousRow.Domain}`}>Previous Page</Link>
        </div>
      )}

      {nextRow && (
        <div>
          <Link to={`/domain/${nextRow.Domain}`}>Next Page</Link>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
