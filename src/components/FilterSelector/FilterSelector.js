import React, { useState } from "react";
import "./style.css";

function FilterSelector() {

    const [isChecked, setIsChecked] = useState(false);

    const selectFilter = () => {
        setIsChecked(!isChecked);
        //console.log(is_checked);
    }
    console.log(isChecked);
    return (
        <>
            <h3>Select if you would like your employees ordered alphabetically</h3>
            <div>
                <input checked={isChecked} onChange={selectFilter} type="checkbox" /><label>Name</label>
            </div>
        </>

    );
}
export default FilterSelector



