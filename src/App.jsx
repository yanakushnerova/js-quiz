import "./styles/theme.css";
import "./styles/App.css";
import questionsData from "./questions.json";
import { useQuizState } from "./hooks/useQuizState";
import QuestionScreen from "./components/QuestionScreen";
import EmailScreen from "./components/EmailScreen";
import ResultsScreen from "./components/ResultsScreen";

function App() {
  const questions = questionsData;
  const {
    currentScreen,
    currentQuestionIndex,
    answers,
    email,
    showFeedback,
    setEmail,
    handleAnswerSelect,
    handleNextQuestion,
    handleEmailSubmit,
    handleRestart,
  } = useQuizState();

  if (currentScreen === "questions") {
    return (
      <QuestionScreen
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        answers={answers}
        showFeedback={showFeedback}
        onAnswerSelect={handleAnswerSelect}
        onNextQuestion={() => handleNextQuestion(questions)}
      />
    );
  }

  if (currentScreen === "email") {
    return (
      <EmailScreen
        email={email}
        onEmailChange={setEmail}
        onSubmit={handleEmailSubmit}
      />
    );
  }

  if (currentScreen === "results") {
    return (
      <ResultsScreen
        questions={questions}
        answers={answers}
        email={email}
        onRestart={handleRestart}
      />
    );
  }

  return null;
}

export default App;
