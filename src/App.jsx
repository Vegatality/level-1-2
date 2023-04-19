import React, { useState } from "react";
import "./App.css";
import Card from "components/Card";
import Header from "components/Header";
import SetGoal from "components/SetGoal";

const App = () => {
    const [card, setCard] = useState([
        // {
        //     title: "리액트 공부하기",
        //     desc: "리액트 기초를 공부해봅시다.",
        //     id: 0,
        //     done: false,
        // },
        // {
        //     title: "리액트 공부하기2",
        //     desc: "리액트 기초를 공부해봅시다2.",
        //     id: 1,
        //     done: false,
        // },
    ]);
    // 헷갈리지 말자. 맨 처음에 추가했을 때를 done false로 했다!!!
    const [inputContent, setInputContent] = useState({ title: "", desc: "" });

    // event.target.name, value 속성 이용. 입력 컨텐트 하나로 관리
    const contentHandler = (e) => {
        setInputContent({ ...inputContent, [e.target.name]: e.target.value });
    };

    const writeContentHandeler = () => {
        const id = card.length ? card[card.length - 1].id + 1 : 0;
        const title = inputContent.title,
            desc = inputContent.desc;
        if (title === "" || desc === "") {
            alert("제목 또는 내용이 비어있는지 확인해주세요!");
        } else {
            const newCard = {
                title,
                desc,
                id,
                done: false,
            };
            setCard([...card, newCard]);
            setInputContent({ title: "", desc: "" });
        }
    };

    const deleteCardHandler = (test) => {
        const updatedCard = card.filter((ele) => ele.id !== test);
        setCard(updatedCard);
    };
    const doneCardHandler = (test) => {
        const completeCard = card.map((ele) => {
            if (ele.id === test) {
                ele.done = !ele.done;
            }
            return ele;
        });
        setCard(completeCard);
    };

    const workingList = card.filter((v) => v.done === false);
    const doneList = card.filter((v) => v.done === true);

    return (
        <div className="todo-list-container">
            <Header />
            <SetGoal
                title={inputContent.title}
                desc={inputContent.desc}
                writeContentHandeler={writeContentHandeler}
                contentHandler={contentHandler}
            />
            <div className="working">
                <span>Working..🔥</span>
            </div>
            <div className="card-container">
                {workingList.map((ele) => {
                    return (
                        <Card
                            ele={ele}
                            deleteCardHandler={deleteCardHandler}
                            doneCardHandler={doneCardHandler}
                        />
                    );
                })}
            </div>
            <div className="done">
                <span>Done..!👍</span>
            </div>
            <div className="completed-card-container">
                {doneList.map((ele) => {
                    return (
                        <Card
                            ele={ele}
                            deleteCardHandler={deleteCardHandler}
                            doneCardHandler={doneCardHandler}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default App;
