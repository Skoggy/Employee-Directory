import "./style.css";
import React, { useEffect, useState } from 'react';
import API from "../utils/API"
//import FilterSelector from '../FilterSelector/FilterSelector'

function Card() {

    const [users, setUsers] = useState([])
    const [isCheckedAlpha, setIsCheckedAlpha] = useState(false);
    const [reverseIsCheckedAlpha, setReverseIsCheckedAlpha] = useState(false)

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

    const selectFilter = () => {
        setIsCheckedAlpha(!isCheckedAlpha)

    }
    const selectReverseAlpha = () => {
        setReverseIsCheckedAlpha(!reverseIsCheckedAlpha)

    }

    if (isCheckedAlpha === true) {
        users.sort((a, b) => a.name.first.localeCompare(b.name.first))
    }


    if (reverseIsCheckedAlpha === true) {
        users.sort((a, b) => b.name.first.localeCompare(a.name.first))
    }


    return (
        <div>
            <h3>Select if you would like your employees ordered alphabetically</h3>
            <div>
                <input checked={isCheckedAlpha} onChange={selectFilter} type="checkbox" /><label>Ascending alphabetically</label>
            </div>
            <div>
                <input checked={reverseIsCheckedAlpha} onChange={selectReverseAlpha} type="checkbox" /><label>Decending alphabetically</label>
            </div>

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
