import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const PersonalDetails = () => {
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        const birthDate = document.getElementById('birthDate').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const lastName = document.getElementById('lastName').value;
        const mobile = document.getElementById('mobile').value;
        const gender = document.getElementById('gender').value;
        const country = document.getElementById('country').value;
        const postcode = document.getElementById('postcode').value;
        const total = {firstName, email, birthDate, address, city, lastName, mobile, gender, country, postcode};
        fetch('http://localhost:3000/' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(total)
        })
        .then(data => {
            if (data){
                history.push('/success')
            }
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className='col-md-12 row mt-5' style={{display:'flex'}}>
                    <div className="col-md-6">
                        <Form.Group>
                            <label>First name</label><br/>
                            <Form.Control type="text"  defaultValue='' id="firstName" required />
                        </Form.Group>
                        <Form.Group>
                        <label>Email</label><br/>
                            <Form.Control type="text" defaultValue='' id="email" required />
                        </Form.Group>
                        <Form.Group>
                        <label>date of birth</label><br/>
                            <Form.Control type="date" defaultValue='' id="birthDate" required />
                        </Form.Group>
                        <Form.Group>
                        <label>address line 1:</label><br/>
                            <Form.Control type="text" defaultValue='' id="address" required />
                        </Form.Group>
                        <Form.Group>
                        <label>city</label><br/>
                            <Form.Control type="text" defaultValue='' id="city" required />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group>
                        <label>Last Name</label><br/>
                            <Form.Control type="text" defaultValue='' id="lastName" required />
                        </Form.Group>
                        <Form.Group>
                        <label>Mobile Number</label><br/>
                            <Form.Control type="text" defaultValue='' id="mobile" required />
                        </Form.Group>
                        <Form.Group>
                        <label>Gender</label><br/>
                            <Form.Control type="text" defaultValue='' id="gender" required />
                        </Form.Group>
                        <Form.Group>
                        <label>Country/Region</label><br/>
                            <Form.Control type="text" defaultValue='' id="country" required />
                        </Form.Group>
                        <Form.Group>
                        <label>Postcode</label><br/>
                            <Form.Control type="text" defaultValue='' id="postcode" required />
                        </Form.Group>
                    </div>
                </div>
                <button type="submit" style={{backgroundColor:'#FCD842', height:'50px', width:'150px', marginLeft:'17px'}}><strong>Next</strong></button>
            </form>
        </div>
    );
};

export default PersonalDetails;