import React, { useState } from 'react';
import NumberFacts from './components/NumberFacts';
import './App.css';

const App: React.FC = () => {
  const [type, setType] = useState<string>('math');
  const [number, setNumber] = useState<string>('');
  const [random, setRandom] = useState<boolean>(false);
  const [showFacts, setShowFacts] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!random && isNaN(Number(number))) {
      setError('Число должно быть в виде цифры');
      return;
    }
    setError(null);
    setShowFacts(true);
  };

  return (
      <div className="app">
        <h1>Number Facts</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                  type="radio"
                  value="math"
                  checked={type === 'math'}
                  onChange={(e) => setType(e.target.value)}
              />
              Math
            </label>
            <label>
              <input
                  type="radio"
                  value="trivia"
                  checked={type === 'trivia'}
                  onChange={(e) => setType(e.target.value)}
              />
              Trivia
            </label>
            <label>
              <input
                  type="radio"
                  value="date"
                  checked={type === 'date'}
                  onChange={(e) => setType(e.target.value)}
              />
              Date
            </label>
          </div>
          <div>
            <label>
              Number:
              <input
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  disabled={random}
              />
            </label>
            <label>
              <input
                  type="checkbox"
                  checked={random}
                  onChange={() => setRandom(!random)}
              />
              Random Number
            </label>
          </div>
          <button type="submit">Get Facts</button>
          {error && <p className="error">{error}</p>}
        </form>

        {showFacts && <NumberFacts type={type} number={number} random={random} />}
      </div>
  );
};

export default App;
