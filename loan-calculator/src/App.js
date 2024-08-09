import React, { useState } from 'react';
import './App.css';

function App() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateLoanDetails = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const t = parseFloat(time) * 12;

    const emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
    const totalPayment = emi * t;
    const interest = totalPayment - p;

    setEmi(emi.toFixed(2));
    setTotalInterest(interest.toFixed(2));
    setTotalAmount(totalPayment.toFixed(2));
  };

  return (
    <div className="app-container">
      <div className="calculator-wrapper">
        <h2 className="title">Loan Calculator</h2>
        <input
          type="number"
          placeholder="Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Time Period (years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input"
        />
        <button onClick={calculateLoanDetails} className="button">
          Calculate Loan
        </button>
        {emi && (
          <div className="result">
            <p>Principal Amount: <strong>₹{principal}</strong></p>
            <p>Monthly EMI: <strong>₹{emi}</strong></p>
            <p>Total Interest: <strong>₹{totalInterest}</strong></p>
            <p>Total Amount: <strong>₹{totalAmount}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
