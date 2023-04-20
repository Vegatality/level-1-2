import React from "react";
import styled, { css } from "styled-components";

function Test() {
    return (
        <StCircle color="red" huge>
            Test
            <StInnerCircle>테스트입니다.</StInnerCircle>
        </StCircle>
    );
}

const StInnerCircle = styled.p`
    display: inline;
`;
const StCircle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${(props) => props.color || "black"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) =>
        props.huge &&
        css`
            width: 10rem;
            height: 10rem;
        `}
    ${StInnerCircle} {
        color: white;
    }
`;

export default Test;
