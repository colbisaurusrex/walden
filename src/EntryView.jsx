import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Entry from './Entry.jsx'
import Metadata from './Metadata.jsx'
import './App.css';

class EntryView extends Component {
  render() {
    return (
            <Grid style={{ height: '800px', justifyContent: 'center', alignItems: 'center' }}>
                <Grid.Column width={10}>
                    <Entry/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Metadata/>
                </Grid.Column>
            </Grid>
    )
  }
}

export default EntryView