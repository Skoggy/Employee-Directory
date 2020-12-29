import "./style.css";
import React, { useEffect, useState } from 'react';
import API from "../utils/API"


function Card() {

    const [users, setUsers] = useState([]);
    const [isCheckedAlpha, setIsCheckedAlpha] = useState(false);
    const [reverseIsCheckedAlpha, setReverseIsCheckedAlpha] = useState(false);
    const [maleOnlyChecked, setMaleOnlyChecked] = useState(false);
    const [femaleOnlyChecked, setFemleOnlyChecked] = useState(false);
    const [maleArray, setMaleArray] = useState([]);
    const [femaleArray, setFemaleArray] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        API.getUsers()
            .then(res => {
                console.log(res)
                setUsers(res.data.results)
                setFemaleArray(res.data.results)
                setAllUsers(res.data.results)
                setMaleArray(res.data.results)

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
    const selectMale = () => {
        setMaleOnlyChecked(!maleOnlyChecked)
    }
    const selectFemale = () => {
        setFemleOnlyChecked(!femaleOnlyChecked)
    }

    if (isCheckedAlpha === true) {
        users.sort((a, b) => a.name.first.localeCompare(b.name.first))
    }


    if (reverseIsCheckedAlpha === true) {
        users.sort((a, b) => b.name.first.localeCompare(a.name.first))
    }
    useEffect(() => {

        if (maleOnlyChecked === false && femaleOnlyChecked === false) {
            setAllUsers(allUsers)
            setUsers(allUsers)
        }
        else if (maleOnlyChecked === true) {
            setUsers(maleArray)
            setMaleArray(maleArray.filter((user) => user.gender === "male"))

            setUsers(maleArray)
        }
        else if (femaleOnlyChecked === true) {
            setUsers(femaleArray)
            setFemaleArray(femaleArray.filter((user) => user.gender === "female"))

            setUsers(femaleArray)
        }


    }, [maleOnlyChecked, femaleOnlyChecked])


    return (
        <div>
            <h3>Select if you would like your employees ordered alphabetically</h3>
            <div>
                <input checked={isCheckedAlpha} onChange={selectFilter} type="checkbox" /><label>Ascending alphabetically</label>
            </div>
            <div>
                <input checked={reverseIsCheckedAlpha} onChange={selectReverseAlpha} type="checkbox" /><label>Decending alphabetically</label>
            </div>
            <div>
                <input checked={maleOnlyChecked} onChange={selectMale} type="checkbox" /><label>Male Only</label>
            </div>
            <div>
                <input checked={femaleOnlyChecked} onChange={selectFemale} type="checkbox" /><label>Female Only</label>
            </div>

            {users.map(user =>
                <div key={user.id} className="card">
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
