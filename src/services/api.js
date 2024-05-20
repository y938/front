import axios from 'axios';

const API_URL = 'https://nlppdfreader.onrender.com';

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`${API_URL}/upload-file`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const askQuestion = async (question) => {
  const formData = new FormData();
  formData.append('question', question);
  const response = await axios.post(`${API_URL}/ask-question`, formData);
  return response.data;
};

export const generateQuestions = async (questionType) => {
  const formData = new FormData();
  formData.append('question_type', questionType);
  const response = await axios.post(`${API_URL}/generate-questions`, formData);
  return response.data;
};
