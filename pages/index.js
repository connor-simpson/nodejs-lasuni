import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Panel from '../components/Web/Panel'
import Bar from '../components/Web/Bar'
import Login from '../components/Web/Login'

const Home = () => {
  return <>
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={6}>
            
            <Panel title="What is this?" variant="orange">
              <p>This is an educational project I've made to see how possible it is to recreate a nostalgic game I use to play when I was younger, <a target="blank" href="https://lasuni.com">Lasuni</a>.</p>
              <p>Lasuni was a MMO built using Shockwave, which was then later replaced with a Flash client which are now both obsolete methods of displaying content on the web.</p>
              <p>This demonstration is a test to see if I can recreate Lasuni using React and Node.js.</p>
            </Panel>
             <Panel title="Disclaimer" variant="green">
              <p className="strong">This platform is <strong>not for profit</strong>. In-game currency (silver, and gold) cannot be purchased through this website, or any other website.</p>
              <p>All artwork is the property of <a target="blank" href="https://twitter.com/dasaii">David Stribling</a>; to re-iterate this website does not own any in-game imagery.</p>
              <p>This platform will be subject to frequent database purges.</p>
            </Panel>
          </Col>
          <Col sm={12} md={6}>
            <Panel logo>
              <Login />
            </Panel>
            <Panel title="Statistics" variant="blue" bodyless>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>0</strong> users online</ListGroup.Item>
                <ListGroup.Item><strong>0</strong> users registered</ListGroup.Item>
                <ListGroup.Item><strong>0</strong> messages sent</ListGroup.Item>
                <ListGroup.Item><strong>0s</strong> server up-time</ListGroup.Item>
              </ListGroup>
            </Panel>
           
          </Col>
        </Row>
      </Container>
  </>
}
export default Home