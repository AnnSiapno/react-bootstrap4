import React, { Component } from 'react';
import './App.css';
import { Alert } from './components/Alert'
import { Button } from './components/Button'
import { Navbar } from './components/Navbar'
import { ButtonGroup } from './components/ButtonGroup'
import { Card } from './components/Card'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar navbarType="justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </Navbar>
        <Alert alertType="danger" alertStrong="Success!">
          Successfully changed message
        </Alert>
        <Button buttonType="primary" buttonTitle="Different name"/>
        <ButtonGroup buttonGroupType="toolbar">
          <Button buttonTitle="Button A"/>
          <Button buttonTitle="Button B"/>
          <Button buttonTitle="Button C"/>
        </ButtonGroup>
        <Card title="Title" message="Message" style={{width: 100}}>
        </Card>
        <Card title="Title 2" message="Message 2">
              <Button buttonTitle="Card Button"/>
        </Card>
        <Card title="Title 3" message="Message 3">
              <img src="https://video-react.js.org/assets/logo.png" alt="Card image cap"/>
        </Card>
      </div>
    );
  }
}

export default App;
