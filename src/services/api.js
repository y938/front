const API_URL = 'https://nlppdfreader.onrender.com';

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await fetch(`${API_URL}/upload-file`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const askQuestion = async (question) => {
  const formData = new FormData();
  formData.append('question', question);
  try {
    const response = await fetch(`${API_URL}/ask-question`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error asking question:', error);
    throw error;
  }
};

export const generateQuestions = async (questionType) => {
  const formData = new FormData();
  formData.append('question_type', questionType);
  try {
    const response = await fetch(`${API_URL}/generate-questions`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating questions:', error);
    throw error;
  }
};
