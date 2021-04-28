
import { useState } from 'react'
import Draggable from 'react-draggable'

import styles from './Panel.module.css'
const Panel = props => {

    const toggleShowHideClass = props.show ? styles.showPanel : ""

    return <Draggable handle=".panelHeaderHandle">
        <div className={`${styles.panelContainer} ${toggleShowHideClass}`}>
            <div className={`${styles.panelHeader} panelHeaderHandle`}>
                <div className={styles.panelHeaderLeft}></div>
                <div className={styles.panelHeaderText}>
                    {props.title || "Alert"}
                    {props.close &&
                        <div onClick={props.onClose} className={styles.panelHeaderTimes}></div>
                    }
                </div>
                <div className={styles.panelHeaderRight}></div>
            </div>
            <div className={styles.panelBody}>
                {props.children}
            </div>
            <div className={styles.panelLowerBody}>
                <div className={styles.panelBodyLeft}></div>
                <div className={styles.panelBodyFill}></div>
                <div className={styles.panelBodyRight}></div>
            </div>
        </div>
    </Draggable>

}
export default Panel