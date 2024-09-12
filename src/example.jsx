// import { useEffect, useState } from "react"
// import Friend from "./Friend";

// export default function Friends(){
//     const [friends,  setFriends] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => setFriends(data))
//     },[])
    
//     return(
//         <div className="box">
//             <h3>Friends :{friends.length}</h3>
//             {
//                 friends.map(friend => <Friend friend={friend}></Friend>)
//             }
//         </div>
//     )
// }


// export default function Friend({friend}){
//     const {name, email} = friend;
//     return(
//         <div className="box">
//             <h3>Name : {name}</h3>
//             <p>Email : {email}</p>
//         </div>
//     )
// }