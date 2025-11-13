import { isAnswerCorrect } from "../utils/quizUtils";

export default function OptionButton({
  option,
  question,
  isSelected,
  showResult,
  onSelect,
}) {
  const isCorrect = isAnswerCorrect(question, option.id);

  let optionClass = "option";

  if (showResult) {
    if (isCorrect) {
      optionClass += " correct";
    } else if (isSelected && !isCorrect) {
      optionClass += " incorrect";
    }
  } else if (isSelected) {
    optionClass += " selected";
  }

  return (
    <button
      className={optionClass}
      onClick={() => onSelect(question.id, option.id)}
      disabled={showResult}
    >
      <span className="option-label">{option.id.toUpperCase()}.</span>
      <span className="option-text">{option.text}</span>
    </button>
  );
}
