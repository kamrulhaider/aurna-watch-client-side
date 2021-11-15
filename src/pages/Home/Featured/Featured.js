import React from 'react';

const Featured = () => {
    return (
        <div className="container">
            <h3 className="text-center my-4 fw-bold">Our Featured Product</h3>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="text-center">Rolex Band 2022</h1>
                    <p className="text-center">heart rate monitor and pedometer: fitness tracker watch built in high performance motion sensor automatically monitors and detects your heart rate in real time, help you better grasp changes for your health and record accurately calorie consumption, distance, steps. you can view historical data in the app “Hero Band III”.</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid w-100 rounded-3" src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Featured;