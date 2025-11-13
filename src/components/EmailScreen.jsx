import { useState } from "react";

const EmailScreen = ({ email, onEmailChange, onSubmit }) => {
  const [error, setError] = useState("");

  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(emailValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    onSubmit(e);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    onEmailChange(value);

    if (error) {
      setError("");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Enter your email</h1>
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="example@email.com"
            className={`email-input ${error ? "email-input-error" : ""}`}
          />
          {error && <p className="email-error">{error}</p>}
          <button type="submit" className="btn-primary">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailScreen;
