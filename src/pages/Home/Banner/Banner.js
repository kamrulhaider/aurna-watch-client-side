import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div className='container-fluid banner d-flex align-items-center justify-content-center'>
            <div className="banner-text">
                <h1 className="text-center text-light">Everyone looks at your watch and it represents who you are, your values and your personal style.</h1>
                <p className="text-center text-light">– Kobe Bryant</p>
            </div>
        </div>
    );
};

export default Banner;