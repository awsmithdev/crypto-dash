import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import AppBar from './AppBar';
const cc = require('cryptocompare')
const AppLayout = styled.div`
padding:42px
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

  state = {
    page: 'settings',
    ...checkFirstVisit()
  }
    componentDidMount() { 
      this.fetchCoins();
    }
    fetchCoins = async () => {
      let coinList = (await cc.coinList()).Data;
      this.setState({coinList});
      console.log(coinList);
    {
      console.log('fetching coins...')
    }
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
    loadingContent = () => {
      if(!this.state.coinList){
        return<div> Loading Coins </div>
      }
    }
  render() {
    return (
     
      <div>
      {AppBar.call(this)}
      
      <content>
     {this.displayingSettings() && this.settingsContent()}
      </content>
      </div>
     
    );
  }
}

