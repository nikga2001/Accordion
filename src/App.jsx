import { useState } from "react";
import Question from "./components/Question";
import questions from "./components/questions.json";
import GlobalStyles from "./globalStyles";
import styled from "styled-components";
import womanillustration from "/images/illustration-woman-online-mobile.svg";
import BoxImage from "/images/illustration-box-desktop.svg";
function App() {
  const [active, setActive] = useState(0);

  return (
    <>
      <GlobalStyles />

      <Container>
        <Illustation src={womanillustration} alt="woman illustation" />
        <Box src={BoxImage} alt="image of box" />
        <Heading>FAQ</Heading>
        {questions.map((questionObj, index) => {
          return (
            <Question
              key={questionObj}
              active={active}
              setActive={setActive}
              questionObj={questionObj}
              questionNumber={index + 1}
            />
          );
        })}
      </Container>
    </>
  );
}

export default App;

const Container = styled.main`
  background-color: white;
  padding: 13.2rem 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 23px;
  background-image: url("/images/bg-pattern-mobile.svg");
  background-repeat: no-repeat;
  background-position: center 20px;
  position: relative;
  margin-top: 70px;

  @media only screen and (min-width: 90rem) {
    padding: 6.5rem 9.5rem 8.3rem 47.5rem;
    background-image: url("/images/bg-pattern-desktop.svg"),
      url("/images/illustration-woman-online-mobile.svg");
    background-position: left -8rem top 4rem, left -10.2rem top 5.7rem;
    background-size: 500.694px;
  }
`;

const Illustation = styled.img`
  transform: translateY(-50%);
  width: 23.7rem;
  top: 0px;
  position: absolute;
  @media only screen and (min-width: 90rem) {
    display: none;
  }
`;

const Heading = styled.h1`
  color: #1e1f36;
  font-family: "Kumbh Sans";
  font-size: 3.2rem;
  font-weight: 700;

  @media only screen and (min-width: 90rem) {
    margin-left: -19rem;
  }
`;

const Box = styled.img`
  display: none;
  @media only screen and (min-width: 90rem) {
    display: block;
    position: absolute;
    top: 20rem;
    left: -10rem;
  }
`;
