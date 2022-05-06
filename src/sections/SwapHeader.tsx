import Button from 'components/common/Button'
import styles from 'styles/sections/SwapHeader.module.scss'

export default function SwapHeader(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className="logo-wrapper">
          <a>Logo</a>
        </div>
        <div className={styles.controlsWrapper}>
          <Button size='md' />
          <Button size='md' />
          <Button size='sm' />
        </div>
      </div>
    </>
  )
}