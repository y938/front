import React, { useState } from 'react';
import { generateQuestions } from '../services/api';
import "../CSS/generate.css";

const GenerateQuestions = () => {
  const [questionType, setQuestionType] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showWaitingMessage, setShowWaitingMessage] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setShowWaitingMessage(true);
    const response = await generateQuestions(questionType);
    setQuestions(response.questions);
    setShowWaitingMessage(false);
    setShowAnswer(false);
  };


  const getQuestionStyle = (type) => {
    switch (type) {
      case 'choice':
        return {
          backgroundColor: '#f7f7f7',
          color: '#333',
        };
      case 'true/false':
        return {
          backgroundColor: '#ffeeba',
          color: '#856404',
        };
      case 'shortanswer':
        return {
          backgroundColor: '#d4edda',
          color: '#155724',
        };
      default:
        return {};
    }
  };

  return (
    <div className="generate-questions-container">
      <h2 className="generate-questions-title">Generate Questions</h2>
      <form className="generate-questions-form" onSubmit={handleGenerate}>
        <select 
          className="generate-questions-select"
          value={questionType} 
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="">Select Question Type</option>
          <option value="choice">Multiple Choice</option>
          <option value="true/false">True/False</option>
          <option value="shortanswer">Short Answer</option>
        </select>
        <button className="generate-questions-button" style={{ backgroundColor: '#4CAF50' }} type="submit">Generate</button>
      </form>
      {showWaitingMessage && <p className="waiting-message">Waiting for questions to be generated...</p>}
      {questions.length > 0 ? (
        <div className="generated-questions-container">
          <h3 className="generated-questions-title">Generated Questions</h3>
          <ul className="generated-questions-list">
            {questions.map((q, index) => (
              <li className="generated-question" key={index} style={getQuestionStyle(questionType)}>
                {q}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default GenerateQuestions;
