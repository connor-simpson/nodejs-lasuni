
import styles from './BubbleLayer.module.css'

const BubbleLayer = props => {

    return <div className={styles.bubbleLayer}>
        {props.children}
    </div>

}
export default BubbleLayer