import React, { Component } from "react";
import { Link } from "react-router-dom";

class GalleryPicture extends Component {
    render() {
        const {
            name,
            description,
            image_url_small,
            image_url_large,
        } = this.props;

        return (
            <div className="col-md-6 col-lg-6 d-flex align-items-stretch">
                <Link
                    to={{
                        pathname: "/galleryDetails"
                    }}

                >
                    <div className="product">
                        <div className="product-img"
                            style={{ background: 'white' }}>
                            <img
                                src={image_url_large}
                                alt="product_name"
                                style={{
                                    width: '100%',
                                    objectFit: 'scale-down'
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
