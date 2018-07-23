import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import EntryView from './EntryView.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <EntryView />
      </MuiThemeProvider>
    )
  }
}

export default App
