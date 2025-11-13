export const getCorrectAnswers = (question) => {
  const answers = question.correctAnswers;

  if (!answers) return [];
  return Array.isArray(answers) ? answers : [answers];
};

export const isAnswerCorrect = (question, answerId) => {
  if (!question) return false;

  const correctAnswers = getCorrectAnswers(question);

  return correctAnswers.includes(answerId);
};
