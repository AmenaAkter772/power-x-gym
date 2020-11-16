import React from 'react';
import { Form } from 'react-bootstrap';

const PersonalDetails = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('object');
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className='col-md-12 row mt-5' style={{display:'flex'}}>
                    <div className="col-md-6">
                        <Form.Group>
                            <label>First name</label><br/>
                            <Form.Control type="text"  defaultValue='' id="firstName" />
                        </Form.Group>
                        <Form.Group>
                        <label>Email</label><br/>
                            <Form.Control type="text" defaultValue='' id="email" />
                        </Form.Group>
                        <Form.Group>
                        <label>date of birth</label><br/>
                            <Form.Control type="date" defaultValue='' id="birthDate" />
                        </Form.Group>
                        <Form.Group>
                        <label>address line 1:</label><br/>
                            <Form.Control type="text" defaultValue='' id="address" />
                        </Form.Group>
                        <Form.Group>
                        <label>city</label><br/>
                            <Form.Control type="text" defaultValue='' id="city" />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group>
                        <label>Last Name</label><br/>
                            <Form.Control type="text" defaultValue='' id="lastName" />
                        </Form.Group>
                        <Form.Group>
                        <label>Mobile Number</label><br/>
                            <Form.Control type="text" defaultValue='' id="mobile" />
                        </Form.Group>
                        <Form.Group>
                        <label>Gender</label><br/>
                            <Form.Control type="text" defaultValue='' id="gender" />
                        </Form.Group>
                        <Form.Group>
                        <label>Country/Region</label><br/>
                            <Form.Control type="text" defaultValue='' id="country" />
                        </Form.Group>
                        <Form.Group>
                        <label>Postcode</label><br/>
                            <Form.Control type="text" defaultValue='' id="birthDate" />
                        </Form.Group>
                    </div>
                </div>
                <button type="submit" style={{backgroundColor:'#FCD842', height:'50px', width:'150px', marginLeft:'17px'}}><strong>Next</strong></button>
            </form>
        </div>
    );
};

export default PersonalDetails;