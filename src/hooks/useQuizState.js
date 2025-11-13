import { useState, useEffect } from "react";
import { QUIZ_STORAGE_KEY } from "../constants";

const loadInitialState = () => {
  const savedState = localStorage.getItem(QUIZ_STORAGE_KEY);
  if (savedState) {
    try {
      return JSON.parse(savedState);
    } catch (error) {
      console.error("Error loading state:", error);
    }
  }
  return null;
};

export function useQuizState() {
  const initialState = loadInitialState();

  const [currentScreen, setCurrentScreen] = useState(
    () => initialState?.currentScreen || "questions"
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    () => initialState?.currentQuestionIndex || 0
  );
  const [answers, setAnswers] = useState(() => initialState?.answers || {});
  const [email, setEmail] = useState(() => initialState?.email || "");
  const [showFeedback, setShowFeedback] = useState(
    () => initialState?.showFeedback || {}
  );

  useEffect(() => {
    const stateToSave = {
      currentScreen,
      currentQuestionIndex,
      answers,
      email,
      showFeedback,
    };

    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(stateToSave));
  }, [currentScreen, currentQuestionIndex, answers, email, showFeedback]);

  const handleAnswerSelect = (questionId, answerId) => {
    if (showFeedback[questionId]) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));

    setShowFeedback((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  const handleNextQuestion = (questions) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentScreen("email");
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setCurrentScreen("results");
    }
  };

  const handleRestart = () => {
    setCurrentScreen("questions");
    setCurrentQuestionIndex(0);
    setAnswers({});
    setEmail("");
    setShowFeedback({});
    localStorage.removeItem(QUIZ_STORAGE_KEY);
  };

  return {
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
  };
}
