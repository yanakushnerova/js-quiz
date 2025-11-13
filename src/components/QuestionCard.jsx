import OptionButton from "./OptionButton";

export default function QuestionCard({
  question,
  selectedAnswer,
  showFeedback,
  onAnswerSelect,
}) {
  const userAnswer = selectedAnswer;
  const showResult = showFeedback;

  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            question={question}
            isSelected={userAnswer === option.id}
            showResult={showResult}
            onSelect={onAnswerSelect}
          />
        ))}
      </div>
    </div>
  );
}
