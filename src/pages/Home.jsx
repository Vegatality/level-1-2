import React from "react";
// import "./Home.css";
import Header from "components/Header";
import SetGoal from "components/SetGoal";
import styled, { ThemeProvider } from "styled-components";
import CardList from "components/CardList";
import GlobalStyle from "style/GlobalStyle";

const Home = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <SetGoal />
            <CardList />
        </>
        // <StContainer>
        // </StContainer>
    );
};
// const StContainer = styled.div`
//     max-width: 1200px;
//     min-width: 800px;
//     margin: 0 auto;
//     border-color: black;
// `;

export default Home;
