import React, { useEffect, useState } from "react";

const Gallery = props => {
  const currentPosts = [2,2,3,4,5,10];
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
         {currentPosts.map((_, index) => (
        <Profile
            key={index}
        />
        ))}
        </div>
      </div>
    );
  }
};
 
export default Gallery;
