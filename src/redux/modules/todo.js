const { createSlice } = require("@reduxjs/toolkit");

// action value = action type
// const ADD_CONTENT = "todo/ADD_CONTENT";
// const SWITCH_CONTENT = "todo/SWITCH_CONTENT";
// const DELETE_CONTENT = "todo/DELETE_CONTENT";
// const GET_CONTENTID = "todo/GET_CONTENTID";

// action creator(짐을 담아오는 통)
// export const addContent = (payload) => {
//     return {
//         type: ADD_CONTENT,
//         payload,
//     };
// };
// export const switchContent = (payload) => {
//     return {
//         type: SWITCH_CONTENT,
//         payload,
//     };
// };

// export const deleteContent = (payload) => {
//     return {
//         type: DELETE_CONTENT,
//         payload,
//     };
// };

// export const getContentId = (payload) => {
//     return {
//         type: GET_CONTENTID,
//         payload,
//     };
// };

const initialState = {
    total: [
        {
            title: "리액트 공부하기",
            desc: "리액트 기초를 공부해봅시다.",
            id: 0,
            done: false,
        },
        {
            title: "리액트 공부하기",
            desc: "리액트 기초를 공부해봅시다.",
            id: 1,
            done: false,
        },
    ],
    // detail 프로퍼티 필요 없어졌음. 주석처리 해도 됨.
    detail: {
        title: "",
        desc: "",
        id: 0,
        done: false,
    },
};

// const todo = (state = initialState, action) => {
//     console.log(action.payload);
//     switch (action.type) {
//         case ADD_CONTENT:
//             const id = state.total.length
//                 ? state.total[state.total.length - 1].id + 1
//                 : 0;
//             const title = action.payload.title,
//                 desc = action.payload.desc;
//             let newCard;
//             if (title === "" || desc === "") {
//                 alert("제목 또는 내용이 비어있는지 확인해주세요!");
//                 return state;
//             } else {
//                 newCard = {
//                     title,
//                     desc,
//                     id,
//                     done: false,
//                 };
//                 return { ...state, total: [...state.total, newCard] }; // 중요!⭐ 객체는 먼저 한 번 뿌리고 뒤에서 프로퍼티 찾아서 바꾸는 식으로 생각.
//             }
//         // return { total: [...state.total, newCard], ...state };
//         case SWITCH_CONTENT:
//             const completeCard = state.total.map((ele) => {
//                 if (ele.id === action.payload) {
//                     ele.done = !ele.done;
//                 }
//                 return ele;
//             });
//             // return { total: completeCard, ...state };
//             return { ...state, total: completeCard };
//         case DELETE_CONTENT:
//             const afterDeleteCard = state.total.filter(
//                 (ele) => ele.id !== action.payload
//             );
//             return { ...state, total: afterDeleteCard };
//         // return { total: afterDeleteCard, ...state };
//         case GET_CONTENTID:
//             // 어떻게 해야 기존 카드들을 살릴 수 있을까? 여기서 깨달았다. detail용 프로퍼티를 따로 만들어야 한다는 것을!
//             let check = {
//                 ...state,
//                 detail: state.total.find((ele) => {
//                     return ele.id === action.payload;
//                 }),
//             };
//             // console.log(check);
//             return check;
//         default:
//             return state;
//     }
// };

// export default todo;

// [slice]
// 1. export action creator
// 2. export reducer
// 3. action value
// export const addContent = (payload) => {
//     return {
//         type: ADD_CONTENT,
//         payload,
//     };
// };
// export const switchContent = (payload) => {
//     return {
//         type: SWITCH_CONTENT,
//         payload,
//     };
// };

// export const deleteContent = (payload) => {
//     return {
//         type: DELETE_CONTENT,
//         payload,
//     };
// };

// export const getContentId = (payload) => {
//     return {
//         type: GET_CONTENTID,
//         payload,
//     };
// };
const todosSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addContent: (state, action) => {
            const id = state.total.length
                ? state.total[state.total.length - 1].id + 1
                : 0;
            const { title, desc } = action.payload;
            const newCard = {
                title,
                desc,
                id,
                done: false,
            };
            // immer 가 불변성 관리 알아서 해줌.
            state.total.push(newCard);
            // return { ...state, total: [...state.total, newCard] } // 중요!⭐ 객체는 먼저 한 번 뿌리고 뒤에서 프로퍼티 찾아서 바꾸는 식으로 생각.
        },
        switchContent: (state, action) => {
            const completeCard = state.total.map((ele) => {
                if (ele.id === action.payload) {
                    ele.done = !ele.done;
                }
                return ele;
            });
            // immer 가 불변성 관리 알아서 해줌
            state.total = completeCard;
            // return { ...state, total: completeCard };
        },
        deleteContent: (state, action) => {
            const afterDeleteCard = state.total.filter(
                (ele) => ele.id !== action.payload
            );
            // immer가 불변성 관리 알아서 해줌
            state.total = afterDeleteCard;
            // return { ...state, total: afterDeleteCard };
        },
        // 이거 getContentId 안쓰도록 수정했음. 주석처리 해도 됨.
        getContentId: (state, action) => {
            // 어떻게 해야 기존 카드들을 살릴 수 있을까? 여기서 깨달았다. detail용 프로퍼티를 따로 만들어야 한다는 것을!

            // immer 가 불변성 관리 알아서 해줌
            // let check = {
            //     ...state,
            //     detail: state.total.find((ele) => {
            //         return ele.id === action.payload;
            //     }),
            // };

            // immer 가 불변성 관리 알아서 해줌
            state.detail = state.total.find((ele) => {
                return ele.id === action.payload;
            });

            // return check;
        },
    },
});

export const { addContent, switchContent, deleteContent, getContentId } =
    todosSlice.actions;
export default todosSlice.reducer;
