import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../../mock"

class GalleryPicture extends Component {
    render() {
    const {
        name,
        description,
        image_url_small,
        image_url_large,
    } = this.props;

    return (
      <div className="col-md-4 col-lg-3 d-flex align-items-stretch">
        <Link
          to={{
            pathname: "/galleryDetails"
          }}

        >
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
              <h3 className="product-name">{name}</h3>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default GalleryPicture;
