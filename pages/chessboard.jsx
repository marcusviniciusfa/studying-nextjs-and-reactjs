import Table from '../components/chessboard/Table'
import styles from '../styles/Home.module.css'

export default function Chessboard() {
  return (
    <div className={styles["container-chessboard"]}>
      <Table />
    </div>
  )
}
