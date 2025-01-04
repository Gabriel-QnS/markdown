import './App.css';
import { marked } from 'marked';
import { useState } from 'react';

function MarkdownPreviewer() {

  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
    renderText(event.target.value);
  }

  function renderText(text) {
    const parsed = marked.parse(text);
    return parsed
  };

  return (
    <div>
      <textarea id="editor" onChange={handleChange} />
      <div id="preview">{renderText}</div>
    </div>
  )};

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
