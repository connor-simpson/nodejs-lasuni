import styles from './Bubble.module.css'

const Bubble = props => {

    return <div className={styles.speechBubble}>
        <div className={styles.speechBubbleName}>
            {props.username}
        </div>
        <div className={styles.speechBubbleText}>
            {props.children}
        </div>
    </div>

}
export default Bubble;