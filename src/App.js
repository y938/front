import React, { useState } from 'react';
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom';
import FileUpload from './Components/FileUpload';
import AskQuestion from './Components/AskQuestion';
import GenerateQuestions from './Components/GenerateQuestions';


const App = () => {
  const [uploaded, setUploaded] = useState(false);

  return (
    <Router>
      <div>
      <FileUpload setUploaded={setUploaded} />
        {uploaded && (
          <div className="actions">
            <Link to="/ask">Ask a Question</Link>
            <Link to="/generate">Generate Questions</Link>
          </div>
        )}
        <Routes>
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/generate" element={<GenerateQuestions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
