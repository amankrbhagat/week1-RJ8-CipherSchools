import React from "react";

const userDetails = ({user = {}}) => {
    return (
        <div>
        <h3>{user.name}</h3>
        <h5>
            Email: {user.email}
            <br/>
            Phone Number: {user.phoneNumber}
        </h5>
        </div>
        );
    };

    export default userDetails;
