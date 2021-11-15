import React from 'react';

const Footer = () => {
    return (
        <div className="container bg-light rounded-3 mt-5">
            <div className="row justify-content-center py-5">
                <h1 className="fw-bold text-center">Aurna Watch</h1>
                <div className="col-md-6 d-flex justify-content-center">
                    <i class="fab fa-facebook-square text-dark fs-1"></i>
                    <i class="fab fa-twitter-square text-dark fs-1 ms-3"></i>
                    <i class="fab fa-linkedin text-dark fs-1 ms-3"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;