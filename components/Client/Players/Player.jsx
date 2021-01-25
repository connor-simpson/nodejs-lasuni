
import styles from './Player.module.css'

const Player = props => {

    return <div className={styles.player} style={{
        top: `${props.top - 50}px`,
        left: `${props.left + 10}px`
    }}>
        {props.children}
    </div>
}
export default Player