export default function ResultsScreen({
  questions,
  answers,
  email,
  onRestart,
}) {
  return (
    <div className="app">
      <div className="container">
        <h1>Quiz Results</h1>
        <div className="results-card">
          <div className="results-details">
            <p className="user-email">Email: {email}</p>

            <div className="questions-review">
              <h3>Your answers:</h3>
              {questions.map((question, index) => {
                const userAnswerId = answers[question.id];
                const answerText =
                  question.options.find((opt) => opt.id === userAnswerId)
                    ?.text || "No answer selected";

                return (
                  <div key={question.id} className="review-item">
                    <p className="review-answer">
                      Answer {index + 1}: {answerText}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="btn-primary" onClick={onRestart}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
