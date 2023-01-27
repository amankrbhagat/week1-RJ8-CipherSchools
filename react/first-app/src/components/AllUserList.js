import React,{ useState } from "react";
import Test from  "./Test";
import UserDetails from "./UserDetails";


const AllUserList = () => {
    const [state, setState] = useState({
        name: "Akb",
    });
    // state = {
    //     name: "Priyanshu Saxena",
    // };
    //allUsers: [
        let allUsers =[
        {name: "Aman", email: "aman@email.com", phoneNumber: "1223445323"},
        
        {name: "Ankit", email: "ankit@email.com", phoneNumber: "1223565323"},
        {name: "Ajay", email: "ajay@email.com", phoneNumber: "1583445323"},
    ];


    // let array = [
    //     <UserDetails key={0} user={allUsers[0]} />,
    //     <UserDetails key={1} user={allUsers[1]} />,
    //     <UserDetails key={2} user={allUsers[2]} />,

    // ];
    // return (
    //     <div>
    //     <userDetails user={allUsers[0]} />
    //     <userDetails user={allUsers[1]} />
    //     <userDetails user={allUsers[2]} />
    //     </div>
    // )

    // render() {
    //     setTimeout(() => {
            
    //      (() => {
    //         this.setState({name: "Abhay Raj Gupta" });
    //     }, 15000);

    return (
        <div>
            <Test name = {state.name} />
            {allUsers.map((user, index) => (
                {/* {this.allusers.map((user, index) => ( */}
                <UserDetails key={index} user={user} />
            ))}
        </div>
    );
 };
       
//         return (
//             <div>
//                 <h1>The name is {this.state.name}</h1>
//                 {this.allUsers.map((user, index) => (
//                     <UserDetails key={index} user={user} />
//                 ))}
//             </div>
//         );
//     }
// }

// const AllUserList = () => {
//     let [state, setState] = useState( {name: "Priyanshu Saxena"});
// };

export default AllUserList;