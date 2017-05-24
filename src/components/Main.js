'use strict';
const React = require('react');
import { Row,Col,CardPanel,Input,Button } from 'react-materialize';
import Weatherform from './Weatherform';

class Main extends React.Component {
  

  render(){
    return (
      <div>
        <Row>
          <Col s={6} m={6}>
            <Weatherform />
          </Col>
          <Col>
            <CardPanel>

            </CardPanel>
          </Col>

        </Row>
      </div>
    )
  }
}

export default Main;
