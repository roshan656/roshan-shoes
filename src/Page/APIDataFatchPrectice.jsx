// import React, { useEffect, useState } from "react";

// function APIDataFatchPrectice() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.rasoipro.com/api/categories")
  
//       .then((res) => res.json())
//       .then((response) => setData(response))
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
  
//   console.log(data, "Responce of fatchData prective");
//   return (
//     <>
//       <h1>WelCome to my Prectice Component</h1>
//     </>
//   );
// }

// export default APIDataFatchPrectice;
import React, { useEffect, useState } from "react";

function APIDataFatchPrectice() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.rasoipro.com/api/categories");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
console.log(data,"dta")
  return (
    <>
      <div>hlo</div>
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
          {data.length > 0
            ? data.map((item, index) => (
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
  );}

export default APIDataFatchPrectice;
