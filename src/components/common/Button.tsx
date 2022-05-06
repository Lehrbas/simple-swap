import styles from 'styles/components/common/Button.module.scss'

interface Props {
  children?: JSX.Element,
  size?: 'sm' | 'md' | 'lg' | 'xlg',
  action?: (e: React.MouseEvent) => void
}


const Button = ({ size = 'md', children, action }: Props): JSX.Element => {
  return (
    <>
      <a onClick={action} className={`${styles.btn} ${styles[size]}`}>
        {children}
      </a>
    </>
  )
}

export default Button