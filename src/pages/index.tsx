import SwapHeader from 'sections/SwapHeader'
import styles from 'styles/pages/Index.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <SwapHeader />
      </div>
    </>
  )
}
