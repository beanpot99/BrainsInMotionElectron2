import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
export default function Register() {
    const[therapistType, setTherapistType] = useState("");
    let typeOptions = [
        {
            value: "Occupational",
            label: "Occupational",
            ...({ disabled: false }),
          },
          {
            value: "Speech",
            label: "Speech",
            ...({ disabled: false }),
          },
          {
            value: "Physical",
            label: "Physical",
            ...( { disabled: false }),
          },
      ];
  return (
    <div className="centered-view">
      <div className="centered-container">
        <form onSubmit={() => {}} className="centered-container-form">
        <div className="header">Create an account</div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              id="phoneNumber"
              aria-describedby="emailHelp" />
          </div>
          {/* <div className='form-group'>
          <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      therapistType
                        ? typeOptions.filter((obj) =>
                            therapistType.includes(obj.value)
                          )
                        : ""
                    }
                    options={typeOptions}
                    onChange={(e)=>setTherapistType(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
          </div> */}
          <div className="form-group">
            <label htmlFor="accessID">Access ID</label>
            <input
              type="text"
              name="accessID"
              className="form-control"
              id="accessID"
              aria-describedby="emailHelp" />
          </div>
          { false && <div className="alert alert-danger small">Some Error</div>}
          <button type="submit" className="btn btn-outline-primary">Register</button>
        </div>
      </form>
      <small className="form-text text-muted mt-2">Already registered?
      {/* <Link to="/Login">
          <span
            className="btn-link ml-2">Login</span>
            </Link> */}
            </small>
      </div>
    </div>
  )
}