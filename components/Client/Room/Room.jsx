import styles from './Room.module.css' 
import { useEffect } from 'react'
import IsometricMap, { IsometricTile } from "react-isometric-tilemap";

const useMountEffect = func => useEffect(func, [func])

const Room = props => {
    

    const isometricMap = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1]
    ]


    return <div className={styles.roomContainer}>
            
        <IsometricMap mapWidth={1} mapHeight={1} tileSize={50}>
            <IsometricTile 
                x={0} 
                y={0} 
                z={15}
                
                 />
        </IsometricMap>

    </div>

  
}


export default Room