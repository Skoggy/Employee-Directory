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

            {users.map(user =>
                <div className="card">
                    <div className="img-container">
                        <img alt={user.name.first} src={user.picture.large} />
                    </div>
                    <div className="card-content">
                        <h3 key={user.id}>{user.name.first} {user.name.last}</h3>

                    </div>

                </div>)}
        </div>


    )
}
export default DataFetching