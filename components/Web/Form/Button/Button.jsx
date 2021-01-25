import styles from './Button.module.css'
const Button = props => {
    return <button className={`${styles.button} ${styles[props.variant]}`} {...props} />
}
export default Button