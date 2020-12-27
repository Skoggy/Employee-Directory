import "./style.css";
import React, { useEffect, useState } from 'react';
import API from "../utils/API"
import FilterSelector from '../FilterSelector/FilterSelector'

function Card() {

    const [users, setUsers] = useState([])
    const [order, setOrder] = useState(false)
    const [orderedUser, setOrderedUser] = useState([])

    useEffect(() => {
        API.getUsers()
            .then(res => {
                console.log(res)
                setUsers(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        console.log("Box Checked")
    })

    return (
        <div>

            {users.map(user =>
                <div className="card">
                    <div className="img-container">
                        <img alt={user.name.first} src={user.picture.large} />
                    </div>
                    <div className="card-content">
                        <h3 key={user.id}>{user.name.first} {user.name.last}</h3>
                        <p>{user.gender}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>

                    </div>

                </div>)}
        </div>
    );
}

export default Card;
