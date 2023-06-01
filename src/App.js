import React, { useState } from 'react';
import ResumeForm from "./Components/ResumeForm";
import ResumePreview from "./Components/ResumePreview";
function App() {
  const [resumeDataVal, setResumeData] = useState({});
  const handleFormChange = (data) => {
    setResumeData(data)
  };
  return (
    <div className="app">
      <ResumeForm onFormChange={handleFormChange} />
      <ResumePreview resumeDataVal={resumeDataVal} />
    </div>
  );
}

export default App;
