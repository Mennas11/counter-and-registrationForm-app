
import { useState } from 'react';
import './App.css';

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <section className="card like-card">
      <p className="card-label">A little happiness</p>
      <h2>Spread some love</h2>
      <p className="card-description">
        Every little like makes the day brighter.
      </p>

      <div className="heart-circle">♡</div>

      <p className="like-count">
        <span>{count}</span> 
      </p>

      <div className="button-row">
        <button
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          ♡ Like
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedData({ name, email });
  }

  return (
    <section className="card">
      <p className="card-label">Your next little adventure</p>
      <h2>Join the club</h2>
      <p className="card-description">
        Fill in your details and make yourself at home.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Sarah Ahmed"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary register-btn" type="submit">
          Create account 
        </button>
      </form>

      {submittedData && (
        <div className="submitted-box">
          <h3>♡ You're all set!</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </section>
  );
}

function App() {
  return (
    <main className="app-container">
      <header className="hero">
        <span className="eyebrow">Made with ♡ </span>
        <h1>Little <span>Moments</span></h1>
        <p>A little love goes a long way. Make yourself at home.</p>
      </header>

      <div className="cards-container">
        <LikeButton />
        <RegistrationForm />
      </div>

      <footer className="footer">
        Built with love, one component at a time ♡
      </footer>
    </main>
  );
}

export default App;
