import styled from "styled-components";
import Arrow from "/images/icon-arrow-down.svg";
import css from "styled-components";
export default function Question({
  active,
  questionNumber,
  questionObj,
  setActive,
}) {
  return (
    <QuestionAnswerDiv
      onClick={() => {
        if (active === questionNumber) {
          setActive(0);
        } else {
          setActive(questionNumber);
        }
      }}
    >
      <QuestionDiv>
        <QuestionParagraph
          className="question"
          active={active}
          questionNumber={questionNumber}
        >
          {" "}
          {questionObj.question}
        </QuestionParagraph>
        <img src={Arrow} alt="arrow" />
      </QuestionDiv>
      {active === questionNumber ? <Answer>{questionObj.answer}</Answer> : null}
    </QuestionAnswerDiv>
  );
}

const QuestionAnswerDiv = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-bottom: 1px solid #e8e8e8;
  padding: 1.9rem;
  cursor: pointer;
`;

const QuestionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionParagraph = styled.p`
  color: #4b4c5f;
  font-size: 13px;
  font-weight: ${(props) =>
    props.active === props.questionNumber ? "700" : "400"};
  transition: 0.3s;

  @media only screen and (min-width: 90rem) {
    &:hover {
      color: #ff9500;
    }
  }
`;

const Answer = styled.p`
  color: #787887;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`;
