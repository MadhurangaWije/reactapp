import React, { useState, useEffect } from 'react';
import axios  from 'axios';

export default function UsersPage({ pageNo }){

    const [users, setUsers] = useState([]);


    useEffect(()=>{
        axios.get(`https://reqres.in/api/users?page=${pageNo}`).then(results=>{
            console.log(...results.data.data);
            setUsers([...users, ...(results.data.data)])
        }).catch(e=>{
            console.log(e);
        })

        // memory leaks
        const interval = setInterval(()=>{
            console.log('hellooo')
        }, 1000)

        // write our compoent cleaning logic here
        return ()=>{
            clearInterval(interval);
        }


    }, []); // dependency array


    return (
        <div>
            <h1>Users</h1>
            
            {
                users.length>0 ? users.map(user=>{
                    return <h3>{user.first_name}</h3>
                }) : null
            }
        </div>
    );
}