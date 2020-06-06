import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Profile from "../profile/Profile";

/**
 *the grid view for available products (paginated)
 *listens to SEARCHBUTTONCLICKED event to request the results
 *from server by search term and search type
 *includes product component for showing each product
 */
const DogList = props => {
  const [data, setData] = useState([]);
useEffect(() => {
  console.log("123");
  getDogs();
}, [""]);

const getDogs = async sterm => {
  const data = {
    params: {
      id: 1,
      currentId: 1
    }
  };

  await axios
    .get("/api/dogs/search", data)
    .then(response => {
      console.log(`Response Status = ${response.status}`);
      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        console.log(`Response data is not array = ${response.data}`);
      }
    })
    .catch(err => {
      console.log(err);
    });
};
 
  const currentPosts = data;
  if (currentPosts.length === 0) {
    return (
      <div className="noresults">
        <h2>{"No results"}</h2>
      </div>
    );
  } else {
    return (
      <div className="col-md-12">
        <div className="row">
         {currentPosts.map((row, index) => (
        <Profile
          id={row.id}
          name={row.name}
          breed_name={row.breed_name}
          image_url_small={row.image_url_small}
          image_url_large={row.image_url_large}
          key={index}
        />
        ))}
        </div>
      </div>
    );
  }
};
 
export default DogList;
