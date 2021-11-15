import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth'

const ProductDetails = () => {
    const { productId } = useParams();
    const { user } = useAuth()
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${productId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [user])

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed');
                    reset();
                }
            })
    };


    return (
        <div>
            <Container>
                <Row className="flex-column align-items-center">
                    <div className="col-md-6">
                        <h3 className="text-center my-3">Product Details</h3>
                        <img className="w-100 rounded-3" src={details.img} alt="" />
                        <h4 className="text-center mt-3">{details.name}</h4>
                        <p className="text-center">{details.details}</p>
                        <h5 className="text-center text-danger">Price: {details.price}</h5>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center my-3">Place Your Order</h3>
                        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("name", { required: true })} defaultValue={user.displayName} />
                            <input className="form-control mb-3" type="email" {...register("email", { required: true })} defaultValue={user.email} />
                            <textarea className="form-control mb-3" {...register("address", { required: true })} placeholder="Address" />
                            <input className="form-control mb-3" {...register("serviceName", { required: true })} defaultValue={details.name} />
                            <input className="form-control mb-3" {...register("phone", { required: true })} placeholder="your phone no" />
                            <input className="form-control mb-3" {...register("price", { required: true })} defaultValue={details.price} />
                            <input className="btn btn-danger" type="submit" />
                        </form>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;