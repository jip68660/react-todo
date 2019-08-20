import React from "react";
import "./UserInput.css";

const UserInput = ({value, onChange, onKeyPress, onCreate}) => {
    return(
        <div className="input-format">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="add-button" onClick={onCreate}> + </div>
        </div>
    );
};

export default UserInput;