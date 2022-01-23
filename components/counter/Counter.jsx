import { useState } from 'react'
import styles from '../../styles/Counter.module.css'

export default function Count() {
  const [currentValue, setValue] = useState(0)
  function increment() {
    setValue(++currentValue)
  }
  function decrement() {
    if (currentValue === 0) return
    setValue(--currentValue)
  }
  return (
    <div className={styles.counter}>
      <h2>Counter</h2>
      <span>Value: {currentValue}</span>
      <div>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
      </div>
    </div>
  )
}
