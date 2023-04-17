import React from "react";

const SetGoal = ({
    title,
    desc,
    titleHandler,
    descHandler,
    writeContentHandeler,
}) => {
    return (
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
                <button className="add-button" onClick={writeContentHandeler}>
                    추가하기
                </button>
            </div>
        </div>
    );
};

export default SetGoal;
