function ProgressBar({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p className="text-xl">
        Question<strong className="text-lime-300"> {index + 1}</strong> /{" "}
        <strong className="text-cyan-300">{numQuestions}</strong>
      </p>
      <p className="text-xl">
        {points} points / {maxPoints}
      </p>
    </header>
  );
}

export default ProgressBar;
