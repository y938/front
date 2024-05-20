import axios from 'axios';

const API_URL = 'https://nlppdfreader.onrender.com';

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await axios.post(`${API_URL}/upload-file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const askQuestion = async (question) => {
  const formData = new FormData();
  formData.append('question', question);
  try {
    const response = await axios.post(`${API_URL}/ask-question`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error asking question:', error);
    throw error;
  }
};

export const generateQuestions = async (questionType) => {
  const formData = new FormData();
  formData.append('question_type', questionType);
  try {
    const response = await axios.post(`${API_URL}/generate-questions`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error generating questions:', error);
    throw error;
  }
};
