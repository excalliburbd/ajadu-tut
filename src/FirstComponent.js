import React from 'react';

const FirstComponent = ({
    email,
    password,
    handelUpdateEmail,
    handelUpdatePassword,
    handelSubmit,
}) => {
    return (
        <div className="row">
        <form>
            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
                   className="form-control"
                   id="exampleInputEmail1"
                   aria-describedby="emailHelp"
                   placeholder="Enter email"
                   value={ email }
                   onChange={ event => handelUpdateEmail(event.target.value) } />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password"
                   className="form-control"
                   id="exampleInputPassword1"
                   placeholder="Password"
                   value={ password }
                   onChange={ event => handelUpdatePassword(event.target.value) } />
            </div>
            <button type="submit" className="btn btn-primary" onClick={ handelSubmit }>Submit</button>
        </form>
        </div>
    )
}

export default FirstComponent;