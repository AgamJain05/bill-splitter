import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [billTotal, setBillTotal] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numPeople, setNumPeople] = useState(1)
  const [finalAmount, setFinalAmount] = useState(0)
  // New state variables
  const [tipAmount, setTipAmount] = useState(0)
  const [totalWithTip, setTotalWithTip] = useState(0)

  useEffect(() => {
    const tipAmt = (tipPercentage / 100) * billTotal;
    const totalAmt = billTotal + tipAmt;
    // Prevent division by zero by ensuring numPeople is at least 1
    const amountPerPerson = numPeople > 0 ? totalAmt / numPeople : 0;

    setTipAmount(tipAmt);
    setTotalWithTip(totalAmt);
    setFinalAmount(amountPerPerson);
  }, [billTotal, tipPercentage, numPeople]);

  // Reset handler function
  const resetFields = () => {
    setBillTotal(0);
    setTipPercentage(0);
    setNumPeople(1);
    setFinalAmount(0);
    setTipAmount(0);
    setTotalWithTip(0);
  }

  return (
    <>
      <h1>Bill Splitter - Split your bills easily</h1>
      <p>Enter your Total Bill</p>
      <input 
        type="number" 
        onChange={(e) => setBillTotal(parseFloat(e.target.value) || 0)}
        value={billTotal || ''}
      />
      <p>Enter your Tip Percentage</p>
      <input 
        type="number" 
        onChange={(e) => setTipPercentage(parseFloat(e.target.value) || 0)}
        value={tipPercentage || ''}
      />
      <p>Enter the number of people</p>
      <input 
        type="number"
        placeholder="1" 
        onChange={(e) => setNumPeople(parseFloat(e.target.value) || 1)}
        value={numPeople}
      />
      <h2>Tip amount: ${tipAmount.toFixed(2)}</h2>
      <h2>Total with tip: ${totalWithTip.toFixed(2)}</h2>
      <h2>Amount per person: ${finalAmount.toFixed(2)}</h2>
      <button onClick={resetFields}>Reset</button>
    </>
  )
}

export default App
