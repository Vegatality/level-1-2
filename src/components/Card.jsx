import React from "react";
import { Link, NavLink, useHref, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({ ele, deleteCardHandler, doneCardHandler }) => {
    const navigate = useNavigate();
    // const testText = "이거 되나?";
    const handleClick = () => {
        navigate(`/${ele.id}`, {
            state: ele,
        });
    };

    return (
        <StCard className="card" key={ele.id}>
            {/* <StLink to={`/${ele.id}`}>상세보기</StLink> */}
            {/* <StLink to={`/${ele.id}?content=${ele}`}>상세보기</StLink> */}
            <StLinkButton onClick={handleClick}>상세보기</StLinkButton>
            <StCardTitle id="card-title">{ele.title}</StCardTitle>
            <StCardContent className="card-content">{ele.desc}</StCardContent>
            <StButtonController className="button-controller">
                <StButton
                    className="delete-button"
                    onClick={() => deleteCardHandler(ele.id)}
                >
                    삭제하기
                </StButton>
                <StButton
                    className="rest-button"
                    onClick={() => doneCardHandler(ele.id)}
                >
                    {ele.done === false ? "완료" : "취소"}
                </StButton>
            </StButtonController>
        </StCard>
    );
};
const StCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-center;
    // align-items: center;
    margin: 20px;
    border: 5px solid #007bff;
    border-radius: 10px;
    /* text-align: start; */
    width: 240px;
    padding: 30px;
`;
const StLinkButton = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    margin: 10px;
    cursor: pointer;
`;

const StLink = styled(NavLink)`
    position: absolute;
    right: 10px;
    top: 10px;
    margin: 10px;
    text-decoration: none;
    &:visited {
        text-decoration: none;
    }
    &:hover {
        text-decoration: none;
    }
    &:focus {
        text-decoration: none;
    }
`;

const StCardDiv = styled.div`
    // margin: 5px;
    width: 100%;
    // height: 50px;
    // margin-bottom: 0px;
`;
const StCardTitle = styled(StCardDiv)`
    width: 100%;
    // height: 50px;
    // text-align: start;
    /* margin-bottom: 5px; */
    margin-top: 15px;
    font-size: larger;
    font-weight: 700;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
// const StCardContent = styled(StCardDiv)`
const StCardContent = styled.p`
    // display: flex;
    /* align-items: center; */
`;
const StButtonController = styled(StCardDiv)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;
const StButton = styled.button`
    border: 3px solid
        ${(props) =>
            props.className === "delete-button" ? "red" : "rgb(128, 200, 128)"};
    border-radius: 10px;
    padding: 10px;
    padding-inline: 30px;
    cursor: pointer;
    background-color: transparent;
    &:hover {
        background-color: ${(params) =>
            params.children === "삭제하기" ? "red" : "green"};
    }
`;

export default Card;
