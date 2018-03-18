import { configure } from '@storybook/react'

function loadStories() {
    require('../stories/RENAME_STORY.js')
}

configure(loadStories, module);
