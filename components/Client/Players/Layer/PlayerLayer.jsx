
import styles from './PlayerLayer.module.css'

const PlayerLayer = props => {

    return <div className={styles.playerLayerContainer}>
        {props.children}
    </div>

}
export default PlayerLayer