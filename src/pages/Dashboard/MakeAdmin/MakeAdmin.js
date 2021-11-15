import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();
    console.log(email)

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://afternoon-citadel-17218.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} className="form-control" type="email" />
                <button type="submit" className="btn btn-outline-warning my-5">Make Admin</button>
            </form>
            {success && <Alert>Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;