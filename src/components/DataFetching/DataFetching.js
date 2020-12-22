import React, { useEffect, useState } from 'react';
import axios from 'axios'

function DataFetching() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://randomuser.me/api/?inc=gender,name,email,phone,picture&results=10&nat=US")
            .then(res => {
                console.log(res)
                setUsers(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name.first} {user.name.last}</li>)
                }
            </ul>
        </div>
    )
}
export default DataFetching