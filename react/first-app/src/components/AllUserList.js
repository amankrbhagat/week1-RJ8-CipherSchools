import React from "react";

const AllUserList = () => {
    let allUsers = [
        {name: "Aman", email: "aman@email.com", phoneNumber: "1223445323"},
        {name: "Ankit", email: "ankit@email.com", phoneNumber: "1223565323"},
        {name: "Ajay", email: "ajay@email.com", phoneNumber: "1583445323"},

 

    ];
    return (
        <div>
        <userDetails user={allUsers[0]} />
        <userDetails user={allUsers[1]} />
        <userDetails user={allUsers[2]} />
        </div>
    )
};

export default AllUserList;