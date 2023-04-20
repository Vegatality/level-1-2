import React, { useState } from "react";
import "./App.css";
import Card from "components/Card";
import Header from "components/Header";
import SetGoal from "components/SetGoal";
import styled from "styled-components";
import ClassifyState from "components/ClassifyState";
import { useDispatch, useSelector } from "react-redux";
import { addContent, deleteContent, switchContent } from "redux/modules/todo";

const App = () => {
    // const [card, setCard] = useState([
    //     // {
    //     //     title: "리액트 공부하기",
    //     //     desc: "리액트 기초를 공부해봅시다.",
    //     //     id: 0,
    //     //     done: false,
    //     // },
    //     // {
    //     //     title: "리액트 공부하기2",
    //     //     desc: "리액트 기초를 공부해봅시다2.",
    //     //     id: 1,
    //     //     done: false,
    //     // },
    // ]);

    // store에서 컨텐트리스트 가져옴
    const contentList = useSelector((state) => {
        return state.todo;
    });
    const dispatch = useDispatch();

    // event.target.name, value 속성 이용. 입력 컨텐트 하나로 관리
    const [inputContent, setInputContent] = useState({ title: "", desc: "" });
    const contentHandler = (e) => {
        setInputContent({ ...inputContent, [e.target.name]: e.target.value });
    };

    // store에서 가져온 global state 참조해서 id 생성 -> 생성한 콘텐트 dispatch로 버튼 누르면 추가한 내용 reducer로 전달 -> input에 입력되어 있는 값은 초기화
    const writeContentHandeler = () => {
        // const id = card.length ? card[card.length - 1].id + 1 : 0;
        // const id = contentList.length ? contentList[contentList.length - 1].id + 1 : 0;
        // const title = inputContent.title,
        //     desc = inputContent.desc;
        // if (title === "" || desc === "") {
        //     alert("제목 또는 내용이 비어있는지 확인해주세요!");
        // } else {
        //     const newCard = {
        //         title,
        //         desc,
        //         id,
        //         done: false,
        //     };
        // dispatch(addContent(newCard))
        dispatch(addContent(inputContent));
        // setCard([...card, newCard]);
        setInputContent({ title: "", desc: "" });
        // }
    };

    const deleteCardHandler = (id) => {
        // const updatedCard = card.filter((ele) => ele.id !== id);
        // const updatedCard = contentList.filter((ele) => ele.id !== id);
        // setCard(updatedCard);
        // const updatedCard = contentList.filter((ele) => ele.id !== id);
        // setCard(updatedCard);
        dispatch(deleteContent(id));
    };
    const doneCardHandler = (id) => {
        // const completeCard = card.map((ele) => {

        // const completeCard = contentList.map((ele) => {
        //     if (ele.id === id) {
        //         ele.done = !ele.done;
        //     }
        //     return ele;
        // });
        // setCard(completeCard);

        dispatch(switchContent(id));
    };

    // const workingList = card.filter((v) => v.done === false);
    // const doneList = card.filter((v) => v.done === true);

    // 컨텐트 리스트 받아서 상태 분류
    const workingList = contentList.filter((v) => v.done === false);
    const doneList = contentList.filter((v) => v.done === true);

    return (
        <StContainer className="todo-list-container">
            <Header />
            <SetGoal
                title={inputContent.title}
                desc={inputContent.desc}
                writeContentHandeler={writeContentHandeler}
                contentHandler={contentHandler}
            />
            <ClassifyState className="working" />
            <StCardContainer>
                {workingList.map((ele) => {
                    return (
                        <Card
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
                            ele={ele}
                            deleteCardHandler={deleteCardHandler}
                            doneCardHandler={doneCardHandler}
                        />
                    );
                })}
            </StCardContainer>
        </StContainer>
    );
    // return (
    //     <div className="todo-list-container">
    //         <Header />
    //         <SetGoal
    //             title={inputContent.title}
    //             desc={inputContent.desc}
    //             writeContentHandeler={writeContentHandeler}
    //             contentHandler={contentHandler}
    //         />
    //         <ClassifyState className="working"/>
    //         {/* <div className="working">
    //             <span>Working..🔥</span>
    //         </div> */}
    //         <div className="card-container">
    //             {workingList.map((ele) => {
    //                 return (
    //                     <Card
    //                         ele={ele}
    //                         deleteCardHandler={deleteCardHandler}
    //                         doneCardHandler={doneCardHandler}
    //                     />
    //                 );
    //             })}
    //         </div>
    //         <ClassifyState className="done"/>
    //         {/* <div className="done">
    //             <span>Done..!👍</span>
    //         </div> */}
    //         <div className="completed-card-container">
    //             {doneList.map((ele) => {
    //                 return (
    //                     <Card
    //                         ele={ele}
    //                         deleteCardHandler={deleteCardHandler}
    //                         doneCardHandler={doneCardHandler}
    //                     />
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );
};

const StContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto; /* 가운데 정렬을 위해 margin auto 설정 */
    border-color: black;
`;

const StCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: inherit;
    min-width: inherit;
    width: 100%;
`;
export default App;
