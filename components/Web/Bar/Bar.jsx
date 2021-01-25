import styles from './Bar.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Bar = () => {
    
    return <div className={styles.bar}>
        <Container>
            <Row>
                <Col sm={6}>
                    <strong>Welcome, Connor</strong>
                </Col>
                <Col sm={6}>

                </Col>
            </Row>
        </Container>
    </div>

}
export default Bar