import React from 'react';
import './review.css';

const Review = () => {
    return(
        <div className="page-info">
            <h4>Review Details</h4>
            <p className="required">Automatically generate password or create password manually</p>
            <div className="login">
            <h6 className="h6">Login Details</h6>
            <p><span className="required">Email:</span> ebuebe@jpsage.com</p>
            <p><span className="required">Password:</span> 7vHgdhj</p>
            </div>
            <div className="job">
            <h6 className="h6">Job Details</h6>
            <p><span className="required">Role:</span> Project Manager</p>
            <p><span className="required">Company:</span> JP sage</p>
            <p><span className="required">Password:</span> Electrical & Electronics Department</p>
            </div>
        </div>
    )
}

export default Review;