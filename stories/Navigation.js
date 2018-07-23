import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import { Stepper } from '../src/components/navigation/Stepper.jsx'

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .add('Stepper', () => {

    const container = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '400px',
      fontFamily  : 'Roboto Mono',
    }

    const options = [
      {
        title: 'Address',
        description: 'Enter Your Address',
        icon: 'map pin'
      },
      {
        title: 'Representatives',
        description: 'Choose your rep',
        icon: 'user circle'
      },
      {
        title: 'Write',
        description: 'Compose a letter',
        icon: 'edit'
      },
      {
        title: 'Download',
        description: 'Download your letter',
        icon: 'download'
      }
    ]

    return (
      <div style={container}>
        <Stepper options={options} />
      </div>
    )
  })