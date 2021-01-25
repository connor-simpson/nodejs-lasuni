
import styles from './Panel.module.css'
import Card from 'react-bootstrap/Card'


const Panel = props => {
    return <>
        {props.logo &&
            <div className={styles.logo}></div>
        }
        <Card className={styles.card}>

            {props.title &&
            <Card.Header className={`${styles[props.variant]} ${styles.cardHeader}`}>
                {props.title}
            </Card.Header>
            }
            
            {!props.bodyless &&
            <Card.Body className={styles.cardBody}>
                {props.children}
            </Card.Body>
            }
            {props.bodyless &&
                props.children
            }
            
        </Card>
    </>
}

export default Panel