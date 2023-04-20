import React from "react";
import styled from "styled-components";

const StState = styled.div`
    padding: 16px;
    background-color: #eaeaea;
    font-weight: bold;
`;

function ClassifyState({ className }) {
    return (
        <StState className={className}>
            <span>{className === "working" ? "Working..🔥" : "Done..!👍"}</span>
        </StState>
    );
}

export default ClassifyState;
