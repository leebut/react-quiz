import Options from "./Options";

function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <>
      <h3>{question.question}</h3>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </>
  );
}

export default Question;
