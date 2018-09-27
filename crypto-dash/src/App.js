import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
const CustomElement = styled.div`
color: green;
font-size:30px;
`

class App extends Component {
  render() {
    return (
      <CustomElement>
      Hello!
      </CustomElement>
    );
  }
}

export default App;
