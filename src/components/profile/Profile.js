import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
    render() {
    const {
        id,
        name,
        breed_name,
        birth_date,
        image_url_small,
        image_url_large,
        dialog_id,
    } = this.props;

    console.log("==>",this.props);

    return (
      <div className="col-md-4 col-lg-3 d-flex align-items-stretch">
        <Link
          to={{
            pathname: "/detail",
            state: {
              id: id,
              name,
              breed_name,
              birth_date,
              image_url_small,
              image_url_large,
              dialog_id
            }}}  
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
                  width:'100%',
                  objectFit:'scale-down'
                }}
              />
            </div>
            <div className="product-body">
              <p className="product-category">{breed_name}</p>
              <h3 className="product-name">{name}</h3>
              <h4 className="product-price">{birth_date} </h4>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Profile;
