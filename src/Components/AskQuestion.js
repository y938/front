import React, { useState } from 'react';
import "../CSS/ask.css";
import { askQuestion } from '../services/api';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userQuestion = question;
    setChat([{ type: 'question', text: userQuestion }, ...chat]);
    setQuestion('');
    setLoading(true);
    const response = await askQuestion(userQuestion);
    setChat([{ type: 'answer', text: response.answer }, { type: 'question', text: userQuestion }, ...chat]);
    setLoading(false);
  };

  return (
    <div className="ask-container">
      <h2>Ask a Question</h2>
      <form className="ask-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          placeholder="Enter your question" 
          className="ask-input"
        />
        <button type="submit" className="ask-button">Ask</button>
      </form>
      <div className="chat-container">
        {chat.map((message, index) => (
          <div key={index} className={`chat-message ${message.type === 'question' ? 'user-question' : 'gemini-answer'}`}>
            <div className="chat-avatar">{message.type === 'question' ? 'Y' : 'ai'}</div>
            <div className="chat-bubble">{message.text}</div>
          </div>
        ))}
        {loading && (
          <div className="chat-message loading">
            <div className="chat-avatar">ai</div>
            <div className="chat-bubble">Thinking...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskQuestion;
