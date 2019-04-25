import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
// import { action } from '@storybook/addon-actions';

import Search from "./react_select_search";
import Box from "../../library/box";

const stories = storiesOf("Search", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <Box width="400px">
    <Search />
  </Box>
));
