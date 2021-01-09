import "./style.css";
import React, { useEffect, useState } from 'react';
import API from "../utils/API"
import styled from 'styled-components'


const FilterStyles = styled.div`
display: grid;
gap: 2rem;
text-align: center;
div{
    font-size: 20px;
}
input {
    margin-left: 50px;
    margin-right: 10px;
}
`

const EmployeeStyles = styled.div`
display: grid;
gap: 3rem;
font-size: 20px;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
img {
    height: 200px;
    width: 200px;
}
`

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

            setMaleArray(maleArray.filter((user) => user.gender === "male"))

            setUsers(maleArray)

        }
        else if (femaleOnlyChecked === true) {

            setFemaleArray(femaleArray.filter((user) => user.gender === "female"))
            setUsers(femaleArray)
        }


    }, [maleOnlyChecked, femaleOnlyChecked])


    return (
        <div>
            <FilterStyles>
                <h3>Select if you would like your employees ordered alphabetically</h3>

                <div>
                    <input checked={isCheckedAlpha} onChange={selectFilter} type="checkbox" /><label>Ascending alphabetically</label>

                    <input checked={reverseIsCheckedAlpha} onChange={selectReverseAlpha} type="checkbox" /><label>Decending alphabetically</label>

                </div>
                <h3>Select how you would like to filter your employees</h3>
                <div>
                    <input checked={maleOnlyChecked} onChange={selectMale} type="checkbox" /><label>Male Only</label>

                    <input checked={femaleOnlyChecked} onChange={selectFemale} type="checkbox" /><label>Female Only</label>
                </div>
            </FilterStyles>

            {users.map(user =>
                <EmployeeStyles key={user.id} className="card">
                    <div className="img-container">
                        <img alt={user.name.first} src={user.picture.large} />
                    </div>
                    <div className="card-content">
                        <h3 key={user.id}>{user.name.first} {user.name.last}</h3>
                        <p>{user.gender}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>

                    </div>

                </EmployeeStyles>)}
        </div>
    );
}

export default Card;
