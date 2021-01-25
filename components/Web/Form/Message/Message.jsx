import styles from './Message.module.css'
const Message = props => {

    return <div className={`${styles.message} ${styles[props.variant]}`} {...props} />

}
export default Message