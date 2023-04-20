import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "redux/modules/todo";
import styled from "styled-components";

const SetGoal = () => {
    // 추가했을 때 global state를 카드로 넘겨야 함. 자동으로 되나? 되네 ㅋㅋ
    const dispatch = useDispatch();

    // event.target.name, value 속성 이용. 입력 컨텐트 하나로 관리
    const [inputContent, setInputContent] = useState({ title: "", desc: "" });
    const contentHandler = (e) => {
        setInputContent({ ...inputContent, [e.target.name]: e.target.value });
    };

    // 생성한 콘텐트 dispatch로 버튼 누르면 추가한 내용 reducer로 전달 -> input에 입력되어 있는 값은 초기화
    const writeContentHandeler = () => {
        // dispatch는 심부름꾼
        console.log(inputContent);
        dispatch(addContent(inputContent));
        setInputContent({ title: "", desc: "" });
    };

    return (
        <StContentBox>
            <StContentLeft>
                <StContentText>제목</StContentText>
                <StContentInput
                    type="text"
                    name="title"
                    value={inputContent.title}
                    placeholder="제목 입력영역"
                    onChange={contentHandler}
                />
                <StContentText>내용</StContentText>
                <StContentInput
                    type="text"
                    name="desc"
                    value={inputContent.desc}
                    placeholder="내용 입력영역"
                    onChange={contentHandler}
                />
            </StContentLeft>
            <StContentRight>
                <StAddButton onClick={writeContentHandeler}>
                    추가하기
                </StAddButton>
            </StContentRight>
        </StContentBox>
    );
};

const StContentBox = styled.div`
    display: inline-block;
    width: 100%;
    max-width: 1200px;
    min-width: 800px;
    padding: 16px;
    margin: auto;
`;

const StContentLeft = styled.div`
    width: auto;
    display: inline-block;
    align-items: center;
    margin-right: 16px;
`;
const StContentText = styled.div`
    font-size: 16px;
    display: inline-block;
    margin: 0px 10px;
`;

const StContentInput = styled.input`
    width: 300px;

    padding: 15px 8px;
    margin-bottom: 16px;
    border-radius: 7px;
`;

const StContentRight = styled.div`
    float: right;
    margin-right: 40px;
    justify-content: flex-end;
    align-items: flex-start;
`;

const StAddButton = styled.button`
    right: 0px;
    padding: 13px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: larger;
    &:hover {
        background-color: #839ebb;
    }
`;
export default SetGoal;
