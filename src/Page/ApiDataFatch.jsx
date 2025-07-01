
import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiDataFetch() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getApiFetchData();
  }, []);

  const getApiFetchData = () => {
    axios
      .get("https://api.rasoipro.com/api/categories")
      .then((response) => {
        setTableData(response.data);
        console.log(response.data, "response of fetch API");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h2>API Data</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Item Id</th>
            <th>Item Name</th>
            <th>Item createdAt</th>
            <th>Item description</th>
            <th>Item price</th>
            <th>Item image</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0
            ? tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.items[0].description}</td>
                  <td>{item.items[0].price}</td>
                  <td>
                    <img src={item.items[0].image} />
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </>
  );
}

export default ApiDataFetch;

