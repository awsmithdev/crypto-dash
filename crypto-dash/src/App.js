import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';

const Logo = styled.div`
font-size: 1.5em;
`
const ControlButton = styled.div`
cursor: pointer;
${props => props.active && css`
text-shadow: 10px 10px 60px #03ff03
`}
`

const Bar = styled.div`
padding: 40px;
margin-bottom: 40px;
display: grid;
grid-template-columns: 180px auto 100px 100px;
`
const checkFirstVisit = () => {
  let cryptoDashData = localStorage.getItem('cryptoDash');
  if(!cryptoDashData){
    return{
    firstVisit: true,
    page: 'dashboard'
}
  }
  return {}
}
   
export default class App extends Component {

  state={
    page: 'dashboard',
    ...checkFirstVisit()
  }
  displayingDashboard = () => this.state.page === 'dashboard'
  displayingSettings = () => this.state.page === 'settings'
  firstVisitMessage = () => {
    if(this.state.firstVisit){
      return <div>Welcome to CryptoDash, please select your favorite coins to begin. </div>
    }
    }
    confirmFavorites = () => {
      localStorage.setItem('cryptoDash', 'test');
      this.setState({
        firstVisit: false
      })
    }
    settingsContent = () => {
      return <div>
      {this.firstVisitMessage()}
      <div onClick={this.confirmFavorites}>
      Confirm Favorites
      </div>
      </div>
    }
  render() {
    return (
     
      <div>
      <Bar>
      <Logo>
      CryptoDash 
      </Logo>
      <div>
      </div>
      {!this.state.firstVisit && (
      <ControlButton onClick={()=>{this.setState({page: 'dashboard'})}} active={this.displayingDashboard()}>
      DashBoard
      </ControlButton>)}
      <ControlButton onClick={()=>{this.setState({page: 'settings'})}}active={this.displayingSettings()}>
      Settings
      </ControlButton>
      </Bar>
      <content>
     {this.displayingSettings() && this.settingsContent()}
      </content>
      </div>
     
    );
  }
}

