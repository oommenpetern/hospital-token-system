import React, { useState } from 'react';
import { connect } from 'react-redux';
import { generateToken, callNextToken } from '../redux/actions';

const TokenSystem = ({ tokens, nextToken, generateToken, callNextToken }) => {
  const [name, setName] = useState('');

  const handleGenerateToken = () => {
    generateToken(name);
    setName('');
  };

  const handleCallNextToken = () => {
    callNextToken();
  };

  return (
    <div className="container">
      <h1>Hospital Token System</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="generate-button" onClick={handleGenerateToken}>
          Generate Token
        </button>
      </div>
      <div className="button-container">
        <button
          className="call-button"
          onClick={handleCallNextToken}
          disabled={tokens.length === 0}
        >
          Call Next Token
        </button>
      </div>
      <div className="tokens-container">
        <h2>Tokens:</h2>
        <ul>
          {tokens.map((token) => (
            <li key={token.id}>
              Token {token.id} - {token.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="next-token">
        <h2 className="next-token-label">Next Token:</h2>
        <p>{nextToken}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tokens: state.tokens,
  nextToken: state.nextToken,
});

const mapDispatchToProps = {
  generateToken,
  callNextToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenSystem);
