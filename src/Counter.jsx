import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const plusNumber = () => {
        setNumber(number + 1);
    };
    const minusNumber = () => {
        setNumber(number - 1);
    };
    return (
        <div
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <p style={{ marginLeft: "25px" }}>{number}</p>
            <input type="button" value="+1" onClick={plusNumber} />
            <input type="button" value="-1" onClick={minusNumber} />
        </div>
    );
}

export default Counter;
