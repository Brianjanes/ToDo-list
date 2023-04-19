import React from "react";
import GolbalStyles from "./GolbalStyles";
import styled from "styled-components";

const App = () => {
  return (
    <BackgroundColor>
      <Container>
        <GolbalStyles />
        <Main>Test</Main>
      </Container>
    </BackgroundColor>
  );
};

const BackgroundColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
`;
const Container = styled.div`
  width: min(100% - 2rem, 800px);
  margin-inline: auto;
  height: 80vh;
  border-radius: 2rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  background-color: whitesmoke;
`;

const Main = styled.div`
  padding: 2rem;
`;

export default App;
