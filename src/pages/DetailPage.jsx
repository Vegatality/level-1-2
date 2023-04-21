import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getContentId } from "redux/modules/todo";
import styled, { css } from "styled-components";

function DetailPage() {
    const testLocation = useLocation();
    console.log(testLocation);
    console.log(testLocation.state); // {title: '리액트 공부하기', desc: '리액트 기초를 공부해봅시다.', id: 0, done: false}
    const todo = testLocation.state;

    const navigate = useNavigate();
    const something = useParams();
    console.log(something);
    const { id } = useParams();
    console.log("id 뽑은거: ", id); // 0
    console.log("id 타입: ", typeof id); // string
    // const params = useParams();

    // const todo = useSelector((state) => {
    //     return state.todo.detail;
    // });
    // console.log(todo);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getContentId(+id));
    //     console.log("컴포넌트 렌더링 발생");
    // }, [dispatch, id]);

    return (
        <StBody>
            <StCard>
                <StInfo>
                    <h2>ID : {todo.id}</h2>
                    <StButton
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        이전으로
                    </StButton>
                </StInfo>
                <StContent>
                    <h1>{todo.title}</h1>
                    <p>{todo.desc}</p>
                </StContent>
            </StCard>
        </StBody>
    );
}

const StBody = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StCard = styled.div`
    width: 800px;
    min-height: 400px;
    border: 1px solid gray;
    border-radius: 20px;
`;
const StInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
`;

const StButton = styled.button`
    /* border: 2px solid black; */
    border: none;
    background-color: #007bff;
    border-radius: 15px;
    width: 130px;
    height: 55px;
    color: white;
    font-weight: 700;
    font-size: larger;
    cursor: pointer;
    &:hover {
        background-color: powderblue;
    }
`;

const StContent = styled.div`
    padding: 20px;
`;

export default DetailPage;
