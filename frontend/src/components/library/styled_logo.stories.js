import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
// import { action } from '@storybook/addon-actions';

import Logo from "./styled_logo";
import Box from "./box";

const stories = storiesOf("Logo", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <Box>
    <Logo>
      <p>mernhood</p>
    </Logo>
  </Box>
));
