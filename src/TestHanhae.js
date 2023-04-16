import React, { useState } from "react";

function Test() {
    const [id, setId] = useState("");
    const [password, setPassWord] = useState("");

    const changeId = (e) => {
        setId(e.target.value);
    };

    const changePS = (e) => {
        setPassWord(e.target.value);
    };

    const clickAlert = () => {
        alert("로그인 완료!");
        setId("");
        setPassWord("");
    };
    return (
        <div>
            아이디:{" "}
            <input
                type="text"
                value={id}
                placeholder="아이디를 입력해주세요."
                onChange={changeId}
            />
            <br />
            비밀번호:{" "}
            <input
                type="password"
                value={password}
                placeholder="비밀번호를 입력해주세요."
                onChange={changePS}
            />
            <br />
            <input type="submit" value="로그인" onClick={clickAlert} />
        </div>
    );
}

// const addVegitable = (e) => {
//     let name = e.target.value
//     let num = vegitables[vegitables.length-1].num + 1
//     setVegitables([...vegitables, {name, num}])
// }

// return <div>
// {vegitables.map((ele)=>{
//     return (
//         <div className={styles.name_box} key={ele.num}>{ele.name}</div>
//     )
// })}
// </div>;
export default Test;
