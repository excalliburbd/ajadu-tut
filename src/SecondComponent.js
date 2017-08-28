import React from 'react';

const SecondComponent = ({ email='none', password='none', hadelClear }) => {
    return (
        <div className="row">
            <div className="card" style={{ width: '20rem' }}>
                <img className="card-img-top" src="https://source.unsplash.com/random" alt="Card image cap" />
                <div className="card-body">
                <h4 className="card-title">Your email: { email }</h4>
                <p className="card-text">Your password: { password }</p>
                <a href="#" className="btn btn-primary" onClick={ hadelClear }>Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent;