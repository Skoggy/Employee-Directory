import React, { useState } from "react";
import "./style.css";

export default function FilterSelector() {
    const [selected, useSelected] = useState[false]
    return (
        <>
            <h1>Please select if you would like employees arranged alphabetically</h1>
            <form>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className="form-check-label">
                        Name
  </label>
                    <br></br>
                    <input id="submit-btn" type="submit" />
                </div>
            </form >
        </>

    );
}



