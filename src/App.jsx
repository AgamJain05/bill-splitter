import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [billTotal, setBillTotal] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numPeople, setNumPeople] = useState(1)
  const [finalAmount, setFinalAmount] = useState(0)

// more efficient way to calculate the amount

  useEffect(() => {
    // new
    let tipAmount = (tipPercentage / 100) * billTotal;
    let totalAmount = billTotal + tipAmount;
    let amountPerPerson = totalAmount / numPeople;

    setFinalAmount(amountPerPerson);
  }, [billTotal, tipPercentage, numPeople]);



  return (
    <>
      <h1>Bill Splitter - Split your bills easily</h1>
      <p>Enter your Total Bill</p>
      <input 
        type="number" 
        onChange={(e) => setBillTotal(parseFloat(e.target.value) || 0)}
      />
      <p>Enter your Tip Percentage</p>
      <input onChange={(e) => {
        setTipPercentage(parseFloat(e.target.value) || 0)
      }} type="number" />

      <p>Enter the number of people</p>
      <input placeholder = "1" onChange = {(e) => {
        setNumPeople(parseFloat(e.target.value) || 1)
      }}type="number" />
      {/* <button onClick={calculateAmount}>Calculate</button>
       */}
      <h2>Amount per person: ${finalAmount.toFixed(2)}</h2>


    </>
  )
}

export default App
