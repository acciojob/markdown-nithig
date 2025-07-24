import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/App.css';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your Markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </>
  );
}

export default App;
