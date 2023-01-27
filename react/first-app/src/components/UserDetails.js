import React, { Component } from "react";
import React,{components}
const userDetails = ({user = {}}) => {
    const userDetails = (props) => {
        let user = props.user;
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

    // class UserDetails extends Component {
    //     render() {
    //         this.props.users ={
    //             name: "Alex",
    //             email: "alex@email.com",
    //             phoneNumber: 123456,
    //         };
    //         return (
        
    //             <div>
    //             <h3>{user.name}</h3>
    //                   <h5>
    //                       Email: {this.user.email}
    //                       <br/>
    //                       Phone Number: {this.user.phoneNumber}
    //                   </h5>
    //             </div>
    //         );
    //     }
    // }

    export default userDetails;
