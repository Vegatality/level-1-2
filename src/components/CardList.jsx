import React, { useState } from "react";
import ClassifyState from "./ClassifyState";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addContent, deleteContent, switchContent } from "redux/modules/todo";
import Card from "./Card";

function CardList() {
    const contentList = useSelector((state) => {
        return state.todo.total;
    });
    console.log(contentList);

    const dispatch = useDispatch();

    const doneCardHandler = (id) => {
        dispatch(switchContent(id));
    };
    const deleteCardHandler = (id) => {
        dispatch(deleteContent(id));
    };

    // 컨텐트 리스트 받아서 상태 분류
    const workingList = contentList.filter((v) => v.done === false);
    const doneList = contentList.filter((v) => v.done === true);
    return (
        <div>
            <ClassifyState className="working" />
            <StCardContainer>
                {workingList.map((ele) => {
                    return (
                        <Card
                            key={ele.id}
                            ele={ele}
                            deleteCardHandler={deleteCardHandler}
                            doneCardHandler={doneCardHandler}
                        />
                    );
                })}
            </StCardContainer>
            <ClassifyState className="done" />
            <StCardContainer>
                {doneList.map((ele) => {
                    return (
                        <Card
                            key={ele.id}
                            ele={ele}
                            deleteCardHandler={deleteCardHandler}
                            doneCardHandler={doneCardHandler}
                        />
                    );
                })}
            </StCardContainer>
        </div>
    );
}

const StCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: inherit;
    min-width: inherit;
    width: 100%;
`;

export default CardList;
