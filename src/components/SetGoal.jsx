import React from "react";

const SetGoal = ({ title, desc, writeContentHandeler, contentHandler }) => {
    return (
        <div className="content">
            <div className="content-left">
                <div className="title">제목</div>
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="제목 입력영역"
                    onChange={contentHandler}
                />
                <div className="description">내용</div>
                <input
                    type="text"
                    name="desc"
                    value={desc}
                    placeholder="내용 입력영역"
                    onChange={contentHandler}
                />
            </div>
            <div className="content-right">
                <button className="add-button" onClick={writeContentHandeler}>
                    추가하기
                </button>
            </div>
        </div>
    );
};

export default SetGoal;
