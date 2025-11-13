import QuestionCard from "./QuestionCard";

export default function QuestionScreen({
  questions,
  currentQuestionIndex,
  answers,
  showFeedback,
  onAnswerSelect,
  onNextQuestion,
}) {
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="app">
      <div className="container">
        <h1>Quiz</h1>
        <p className="progress-text">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id]}
          showFeedback={showFeedback[currentQuestion.id]}
          onAnswerSelect={onAnswerSelect}
        />

        {showFeedback[currentQuestion.id] && (
          <button className="btn-primary" onClick={onNextQuestion}>
            {currentQuestionIndex < questions.length - 1
              ? "Next Question"
              : "Continue"}
          </button>
        )}
      </div>
    </div>
  );
}
