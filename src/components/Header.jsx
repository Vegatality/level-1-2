import React from "react";
import styled from "styled-components";

// const Header = () => {
//     return (
//         <div className="header">
//             <div className="header-left">
//                 <span>My Todo List</span>
//             </div>
//             <div className="header-right">
//                 <span>React</span>
//             </div>
//         </div>
//     );
// };

const Header = () => {
    return (
        <StHeader>
            {areaList.map((ele) => {
                return (
                    <StHeaderInnerArea key={ele} area={ele}>
                        <span>{getAreaText(ele)}</span>
                    </StHeaderInnerArea>
                );
            })}
        </StHeader>
    );
};

const areaList = ["left", "right"];

const getAreaText = (text) => {
    switch (text) {
        case "left":
            return "My Todo List";
        case "right":
            return "React";
        default:
            return "My Best";
    }
};

const StHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #eaeaea;
`;

const StHeaderInnerArea = styled.div`
    float: ${(props) =>
        props.area === "left" ? "inline-start" : "inline-end"};
    font-weight: 700;
`;

export default Header;
