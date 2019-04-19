
// a babel macro to ensure require.context(some webpack magic) 
// runs in Jest(our test context)

import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';
import '../src/components/reset.css';
import '../src/components/main.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);