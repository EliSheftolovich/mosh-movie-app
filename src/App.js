import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends React.Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <NavBar/>
        <Container>
          <Counters/>
        </Container>
    </React.Fragment>
      );
  }
}
 
export default App;


