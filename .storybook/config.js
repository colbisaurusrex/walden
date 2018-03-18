import { configure } from '@storybook/react'

function loadStories() {
    require('../stories/Navigation.js')
}

configure(loadStories, module);
