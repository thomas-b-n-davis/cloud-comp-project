import React, { useEffect, useState } from "react";
import axios from "axios";
import dog from '../images/dog2.jpg';
import '../style.css';

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
  return (
      <div className="noresults">
        <div className="about">
          <div>
            <h2>About Us</h2>
            <p>
              We provide the platform for dog lovers to hangout and socialize, organise date and interact with other dog lovers.
              This is a community of like minded people who share the same view and love for the K9 family.
            </p>
          </div>
          <img src={dog} alt="this is car image"  width={"50%"}/>
        </div>
      </div>
    );
};
 
export default DogList;
