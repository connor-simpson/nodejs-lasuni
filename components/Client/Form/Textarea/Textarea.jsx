import styles from './Textarea.module.css'
const Textarea = props => {

    return <textarea className={styles.clientTextarea} {...props} />

}
export default Textarea