import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const url = "http://localhost:1337";
// static let chat = "chat/%d"

const Chats = props => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(url);
    socket.on(`chat/${props.dialog_id}`, data => {
      setResponse(data);
    });
  }, []);

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
             <div></div>
        ))}
        </div>
      </div>
    );
  }
};
 
export default Chats;
