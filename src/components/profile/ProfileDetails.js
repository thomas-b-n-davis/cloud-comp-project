import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GalleryPicture from "../gallery/Picture";

const ProfileDetails = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPhotos();
  }, [""]);


  const uploadPhoto = async imgFile => {
    var formData = new FormData();
    formData.append("files", imgFile);
    formData.append("id", window.sessionStorage.getItem("userid"));
    await axios
      .post("/api/blob", formData)
      .then(result => {
        if (result.status == 200) {
          console.log("Profile image upload=>" + result.data.image);
          // setUserData({ ...userData, photo_link: result.data.image });
          window.location.reload(false);
        } else {
          console.log(result);
        }
      })
      .catch(err => {
        console.log(err);
        // window.location.replace("/error500");
      });
  };

  const getPhotos = async sterm => {
    const data = {
      params: {
        id: 2,
      }
    };

    await axios
      .get("/api/photos", data)
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

  const {
    id,
    name,
    breed_name,
    birth_date,
    image_url_small,
    image_url_large,
    dialog_id
  } = props.location.state;

  const currentPosts = data;
  return (
    <div className="container" id="mainProfile">
      <div className="row">
        <div className="col-sm-4 col-lg-3 d-flex align-items-stretch">
          <div className="product">
            <div className="product-img"
              style={{ background: 'white' }}>
              <img
                src={image_url_large}
                alt="product_name"
                style={{
                  maxHeight: '300px',
                  minHeight: '300px',
                  width: 'auto',
                  objectFit: 'scale-down'
                }}

              />
            </div>
            <div className="product-body">
              <p className="product-category">{breed_name}</p>
              <h3 className="product-name">{name}</h3>
              <h4 className="product-price">{birth_date}</h4>
            </div>
            <Link to={{
              pathname: "/chats",
              state: {
                dialog_id
              }
            }}>
              <input type="submit" className="btn btn-primary btn-block" value="Chat" name="chat" />
            </Link>
            <input
                type="file"
                className="text-center mx-auto file-upload"
                onChange={e => uploadPhoto(e.target.files[0])}
              />
          </div>
        </div>
        <div className="col-sm-8">
          <div className="row">
            {currentPosts.map((picture, index) => (
              <GalleryPicture
                key={index}
                image_url_small={picture.image_url_small}
                image_url_large={picture.image_url_large}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
