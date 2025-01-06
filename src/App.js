import './App.css';
import { marked } from 'marked';
import { useEffect, useState } from 'react';

function MarkdownPreviewer() {

  const initialText = `  # Header 1
  ## Header 2
  ### Header 3
  #### Header 4
  ##### Header 5
  ###### Header 6
  
  *Italic* _Italic_
  **Bold** __Bold__
  ~~Strikethrough~~
  
  - Item 1
  - Item 2
    - Subitem 1
    - Subitem 2
  
  1. Item 1
  2. Item 2
     1. Subitem 1
     2. Subitem 2
  
  [GitHub](https://github.com)
  
  ![Alt text](https://via.placeholder.com/150)
  
  > This is a blockquote.`;
    
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function RenderText({ text }) {
    const parsed = marked.parse(text);
    return (
      <div id="preview" dangerouslySetInnerHTML={useState? {__html: parsed} : marked.parse(initialText)}></div>
    )
  };

  return (
    <div>
      <textarea id="editor" onChange={handleChange} />
      <RenderText text={text} />
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
