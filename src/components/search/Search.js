import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
 // const [values, setValues] = useContext(HeaderContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("123");
    getDogs();
  }, [""]);

  const getDogs = async sterm => {
    const data = {
      params: {
        term: sterm
      }
    };

    await axios
      .get("/api/dogs/search", data)
      .then(response => {
        console.log(`Response Status = ${response.status}`);
        if (Array.isArray(response.data)) {
          setData(response.data);
          showProducts(response.data);
        } else {
          console.log(`Response data is not array = ${response.data}`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const showProducts = result => {
    console.log(">>>>>");
    console.log(result);
  };

const viewDog = dogId => {
// navigation?
};
 
  return (
    <div className="container">
      <div className="col-sm-8 mt-4 offset-2">
        <table className="table" style={{ textAlign: "center" }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rowData, index) => (
              <tr key={index}>
                
                <td>{rowData.id}</td>
                <td>{rowData.name}</td>
                <td>{rowData.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
