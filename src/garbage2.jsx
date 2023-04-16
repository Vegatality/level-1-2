import React from "react";
import "./App.css";

function App() {
    return (
        <div className="flexcontainer">
            <div className="container">
                <header className="header">
                    <text className="header-text1">My Todo List</text>
                    <text className="header-text2">React</text>
                </header>
                <div className="input-area">
                    <div className="headerbelow">제목 :</div>
                    <input
                        className="title"
                        type="text"
                        placeholder="제목을 입력해주세요."
                    />
                    <div className="headerbelow">내용 :</div>
                    <input
                        className="content"
                        type="text"
                        placeholder="내용을 입력해주세요."
                    />
                    <input
                        className="add-button"
                        type="button"
                        value="추가하기"
                    />
                </div>
                <div>
                    <div>Working..🔥</div>
                    <div>여기에 카드 공간</div>
                    <div>Done..!👍</div>
                    <div>여기에 카드 공간</div>
                </div>
            </div>
        </div>
    );
}

export default App;
