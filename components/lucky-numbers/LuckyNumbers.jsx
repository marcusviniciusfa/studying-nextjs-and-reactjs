import { useState } from "react"
import NumberDisplay from "./NumberDisplay"

function generateLuckyNumbers(amountNumbers = 6, numbers = []) {
  amountNumbers = +amountNumbers
  const outOfBounds = amountNumbers < 6 && amountNumbers > 60
  if (outOfBounds) throw "Quantidade inválida!"
  if (numbers.length === amountNumbers) return numbers.sort((currentNumber, nextNumber) => currentNumber - nextNumber)
  const randomNumber = parseInt(Math.random() * 60) + 1
  if (!numbers.includes(randomNumber)) return generateLuckyNumbers(amountNumbers, [...numbers, randomNumber])
  return generateLuckyNumbers(amountNumbers, numbers)
}

function renderNumbers(numbers = []) {
  return numbers.map((currentNumber, index) => {
    return <li key={index}><NumberDisplay number={currentNumber}/></li>
  })
}

export default function LuckyNumbers() {
  const [amountNumbers, setAmountNumbers] = useState(6)
  const [numbers, setNumbers] = useState(generateLuckyNumbers(amountNumbers))
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1 style={{
        color: "#fff"
      }}>Números da Sorte</h1>
      <ul style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        listStyle: "none"
      }}>{renderNumbers(numbers)}</ul>
      <div style={{display: "flex"}}>
        <input type="number" min={6} max={20} value={amountNumbers} onChange={(event) => setAmountNumbers(event.target.value)}/>
        <button onClick={() => setNumbers(generateLuckyNumbers(amountNumbers))}>Gerar Números</button>
      </div>
    </div>
  )
}
