// filepath: /D:/Carpeta de Trabajo/Code/Frontend Libraries/markdown/src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';
import { useState } from 'react';

function MarkdownTutorial() {
    return (
      <div className="tutorial-container" id="tutorial">
        <button
          className="btn btn-danger m-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Toggle Tutorial
        </button>
        <div className="collapse" id="collapseExample">
          <div id='tutorialCard' className="card card-body">
            <p>First Time? No worries.</p>
            <p>Here you can find a quick tutorial on how to use Markdown.</p>
            <p>Feel free to skip this section if you are already familiar with it.</p>
            <p>Markdown is a lightweight markup language with plain text formatting syntax.</p>
            <p>It is widely used in many websites, including GitHub, Reddit, and Stack Overflow.</p>
            <p>Inside the editor there are some examples on how to use common Markdown</p>
            <p className='text-warning b-200'>Happy Coding!</p>
          </div>
        </div>
      </div>
    )};

export default MarkdownTutorial;