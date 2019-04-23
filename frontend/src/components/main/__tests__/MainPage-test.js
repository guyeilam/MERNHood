import React from 'react';
import { shallow, mount, render } from 'enzyme';

import MainPage from '../main_page';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<MainPage />).contains(<h1>my MERN stack app</h1>)).toBe(true);
  });
});
