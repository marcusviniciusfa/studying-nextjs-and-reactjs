import Tracker from '../components/mouse-tracker/Tracker'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles["container-mouse-tracker"]}>
      <Tracker />
    </div>
  )
}
