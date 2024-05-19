import React, { useState } from 'react';
import { uploadFile } from '../services/api';
import { MdAddCircle, MdInsertDriveFile } from 'react-icons/md'; 
import { Link } from 'react-router-dom';
import ai from "../image/ai.svg";
import "../CSS/upload.css";

const FileUpload = ({ setUploaded }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const response = await uploadFile(selectedFile);
      setUploaded(true);
      alert(response.message);
    }
  };

  const handleDivClick = () => {
    document.querySelector(".input-field").click();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={ai} width={100} height={60} alt="AI Logo" /></Link>
      </div>
      
      <div className="upload-container">
        {file && (
          <div className="file-info">
            <MdInsertDriveFile size={24} className="file-icon" color='#4CAF50'/>
            <p className="file-name">{file.name}</p>
          </div>
        )}
        <div className="upload" onClick={handleDivClick}>
          <input type="file" className="input-field" hidden onChange={handleFileChange} />
          <MdAddCircle size={24} />
          <p className='upload-text'>Upload PDF</p>
        </div>
      </div>
    </nav>
  );
};

export default FileUpload;
