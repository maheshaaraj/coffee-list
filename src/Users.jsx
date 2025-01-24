import React, { useState,useEffect} from "react";
import axios from "axios";



const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get(`/api/users`);
           
            // const firstNames = res.data.map(user => user.first_name);
            setUsers(res.data);
            // console.log(res.data);
            
        } catch (error) {
            console.log(error); 
            
        }
        
    }

    useEffect(() =>{
        fetchUsers();
    }, []);

    return (
        <div>
            <p>from users</p>
            {/* <p>{users}</p> */}
            <ul>
            {users.map(user => (
                        <li key={user.id}>
                            <strong>{user.first_name}</strong>
                        </li>
            ))}
            </ul>
        </div>
    )
};

export default Users;

// It looks like you already have a proxy configuration in your vite.config.js, but there might be an issue with how it's set up. Specifically, the rewrite rule you're using might be affecting how the path is being sent to the backend. Let's break it down and try to fix the issue.

// Key things to note:
// The /api part: Your proxy is rewriting /api to an empty string (path.replace(/^\/api/, '')), which means requests to /api/users would actually be forwarded to http://localhost:8000/users instead of http://localhost:8000/api/users.