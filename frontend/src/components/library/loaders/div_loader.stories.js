import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
// import { action } from '@storybook/addon-actions';

import Loader from "./div_loader";
import Box from "../box";

const stories = storiesOf("Loader", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <Box width="400px">
    <Loader />
  </Box>
));
