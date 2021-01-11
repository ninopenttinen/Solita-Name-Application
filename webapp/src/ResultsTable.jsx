import React from "react";

const ResultsTable = (props) => {
  return (
    <div id="table-container">
      <div id="borders">
        <table id="results-table">
          <thead id="results-header">
            <tr>
              {props.headers.map((header, i) => (
                <th key={"col-" + i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody id="results-body">
            {props.data.map((row, i) =>
              props.headers.length > 1 ? (
                <tr key={"row-" + i}>
                  <td>{row.name}</td>
                  <td>{row.amount}</td>
                </tr>
              ) : (
                <tr key={"row-" + i}>
                  <td>{row.total}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;
