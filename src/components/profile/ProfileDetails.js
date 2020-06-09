import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import data from "../../mock"
import Profile from "./Profile";
import GalleryPicture from "../gallery/Picture";

class ProfileDetails extends Component {
    render() {
    const {
        id,
        name,
        breed_name,
        birth_date,
        image_url_small,
        image_url_large,
    } = this.props.location.state;

    const currentPosts = [1,1,1,1,11,1];
    return (
    <div className="container" id="mainProfile">
      <div className="row">
      <div className="col-sm-4 col-lg-3 d-flex align-items-stretch">
          <div className="product">
            <div className="product-img"
            style={{background:'white'}}>
              <img
                src={image_url_large}
                alt="product_name"
                style={{
                  maxHeight:'300px',
                  minHeight:'300px',
                  width:'auto',
                  objectFit:'scale-down'
                }}
               
              />
            </div>
            <div className="product-body">
              <p className="product-category">{breed_name}</p>
              <h3 className="product-name">{name}</h3>
              <h4 className="product-price">{birth_date}</h4>
            </div>
            
          </div>
        </div>
        <div className="col-sm-8">
            <div className="row">
                {currentPosts.map((_, index) => (
                <GalleryPicture
                    key={index}
                    image_url_small={image_url_small}
                    image_url_large={image_url_large}
                />
                ))}
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ProfileDetails;
