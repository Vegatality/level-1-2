import React, { useState } from "react";
import "./App.css"; // TodoList 컴포넌트의 스타일을 정의한 CSS 파일

// const Button = () => {};

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
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const titleHandler = (e) => {
        let value = e.target.value;
        setTitle(value);
    };
    const descHandler = (e) => {
        let value = e.target.value;
        setDesc(value);
    };
    const writeContentHandeler = () => {
        let id = card.length ? card[card.length - 1].id + 1 : 0;
        if (title === "" || desc === "") {
            alert("제목 또는 내용이 비어있는지 확인해주세요!");
        } else {
            let newContent = {
                title,
                desc,
                id,
                done: false,
            };
            setCard([...card, newContent]);
            setTitle("");
            setDesc("");
        }
    };

    const deleteCardHandler = (test) => {
        console.log(typeof test); // 0 number
        let updatedCard = card.filter((ele) => ele.id !== test);
        setCard(updatedCard);
        // console.log(updatedCard);
    };
    const doneCardHandler = (test) => {
        let completeCard = card.map((ele) => {
            if (ele.id === test) {
                ele.done = !ele.done;
            }
            return ele;
        });
        setCard(completeCard);
        console.log(completeCard);
    };

    return (
        <div className="todo-list-container">
            <div className="header">
                <div className="header-left">
                    <span>My Todo List</span>
                </div>
                <div className="header-right">
                    <span>React</span>
                </div>
            </div>
            <div className="content">
                <div className="content-left">
                    <div className="title">제목</div>
                    <input
                        type="text"
                        value={title}
                        placeholder="제목 입력영역"
                        onChange={titleHandler}
                    />
                    <div className="description">내용</div>
                    <input
                        type="text"
                        value={desc}
                        placeholder="내용 입력영역"
                        onChange={descHandler}
                    />
                </div>
                <div className="content-right">
                    <button
                        className="add-button"
                        onClick={writeContentHandeler}
                    >
                        추가하기
                    </button>
                </div>
            </div>
            <div className="working">
                <span>Working..🔥</span>
            </div>
            <div className="card-container">
                {card
                    .filter((v) => v.done === false)
                    .map((ele) => {
                        // let doneState = ele.done === false ? "완료" : "취소";
                        return (
                            <div className="card" key={ele.id}>
                                <div id="card-title">{ele.title}</div>
                                <div className="card-content">{ele.desc}</div>
                                <div className="button-controller">
                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            deleteCardHandler(ele.id)
                                        }
                                    >
                                        삭제하기
                                    </button>
                                    <button
                                        className="rest-button"
                                        onClick={() => doneCardHandler(ele.id)}
                                    >
                                        완료
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                {/* <div className="card">
                    <div id="card-title">리액트 공부하기</div>
                    <div className="card-content">
                        리액트 기초를 공부해봅시다.
                    </div>
                    <div className="button-controller">
                        <button>삭제하기</button>
                        <button>완료</button>
                    </div>
                </div> */}
            </div>
            <div className="done">
                <span>Done..!👍</span>
            </div>
            <div className="completed-card-container">
                {card
                    .filter((v) => v.done === true)
                    .map((ele) => {
                        // let doneState = ele.done === false ? "완료" : "취소";
                        return (
                            <div className="card" key={ele.id}>
                                <div id="card-title">{ele.title}</div>
                                <div className="card-content">{ele.desc}</div>
                                <div className="button-controller">
                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            deleteCardHandler(ele.id)
                                        }
                                    >
                                        삭제하기
                                    </button>
                                    <button
                                        className="rest-button"
                                        onClick={() => doneCardHandler(ele.id)}
                                    >
                                        취소
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                {/* <div className="card">
                    <div id="card-title">리액트 공부하기</div>
                    <div className="card-content">
                        리액트 기초를 공부해봅시다.
                    </div>
                    <div className="button-controller">
                        <button>삭제하기</button>
                        <button>취소</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default App;
