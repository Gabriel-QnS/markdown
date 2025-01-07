import './App.scss';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MarkdownTutorial from './markdownTutorial';
import Footer from './footer';

function MarkdownPreviewer() {

  const initialText = `  
  <!-- Here you can find examples of Markdown -->
  <!-- Use the button clear to erase all the inner contents -->

  # Header 1
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
    
  const [text, setText] = useState(initialText);

  function handleChange(event) {
    setText(event.target.value);
  }

  function RenderText({ text }) {
    const parsed = marked.parse(text);
    return (
      <div id="preview" className='text-start border border-light border-5 m-auto p-3' dangerouslySetInnerHTML={useState? {__html: parsed} : marked.parse(initialText)}></div>
    )
  };

  function ControlPanel() {
    function clearText() {
      setText('');
    };

    function fillText() {
      setText(initialText);
    }

    return (
      <div className='d-flex justify-content-center'>
        <button className='btn btn-danger m-3' onClick={clearText}>Clear</button>
        <button className='btn btn-danger m-3' onClick={fillText}>Fill with Example</button>
      </div>
    )
  }

  return (
    <div>
      <MarkdownTutorial />
      <textarea className='border rounded border-5 border-danger text-left' value={text} id="editor" onChange={handleChange} />
      <ControlPanel />
      <RenderText text={text} />
    </div>
  )};

function App() {
  return (
    <div className="App flex flex-column justify-content-center align-items-center">
      <h1 className='text-danger'>Markdown Previewer</h1>
      <MarkdownPreviewer />
      <Footer />
    </div>
  );
}

export default App;
