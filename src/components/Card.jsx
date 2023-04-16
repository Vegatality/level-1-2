import "../App.css";

const Card = ({ ele, deleteCardHandler, doneCardHandler }) => {
    return (
        <div className="card" key={ele.id}>
            <div id="card-title">{ele.title}</div>
            <div className="card-content">{ele.desc}</div>
            <div className="button-controller">
                <button
                    className="delete-button"
                    onClick={() => deleteCardHandler(ele.id)}
                >
                    삭제하기
                </button>
                <button
                    className="rest-button"
                    onClick={() => doneCardHandler(ele.id)}
                >
                    {ele.done === false ? "완료" : "취소"}
                </button>
            </div>
        </div>
    );
};

export default Card;
