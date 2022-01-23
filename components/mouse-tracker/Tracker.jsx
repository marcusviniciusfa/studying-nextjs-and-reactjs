import { useState } from 'react'
import styles from '../../styles/Tracker.module.css'

export default function Tracker() {
  const [currentAxisX, setAxisX] = useState(0)
  const [currentAxisY, setAxisY] = useState(0)
  function updateTracker(event) {
    setAxisX(event.clientX)
    setAxisY(event.clientY)
  }

  return (
    <div className={styles.tracker} onMouseMove={updateTracker}>
      <span>Eixo X: {currentAxisX}</span>
      <span>Eixo Y: {currentAxisY}</span>
    </div>
  )
}
