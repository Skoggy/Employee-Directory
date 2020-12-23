import React from "react";
import "./style.css";

export default function FilterSelector() {
    return (
        <>
            <h1>Please select how you wold like to display your employees</h1>
            <form>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" for="exampleRadios1">
                        Name
  </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" for="exampleRadios1">
                        Gender
  </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label className="form-check-label" for="exampleRadios2">
                        Area Code
  </label>
                    <input id="submit-btn" type="submit" />
                </div>
            </form >
        </>

    );
}



