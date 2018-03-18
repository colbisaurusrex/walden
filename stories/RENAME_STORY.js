import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'

storiesOf('STORY_NAME', module)
  .addDecorator(withKnobs)
  .add('COMPONENT', () => {
    return (
        <div>TESTING</div>
    )
  })