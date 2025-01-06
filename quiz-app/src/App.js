import React from 'react';
import Quiz from './components/quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Quiz HTML, CSS e JavaScript</h1>
      </header>
      <main>
        <Quiz />
      </main>
      <footer>
        <p>&copy; 2024 - Todos os direitos reservados a Pedro Serradilha</p>
      </footer>
    </div>
  );
}

export default App;
