import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
// import { action } from '@storybook/addon-actions';

import FormStepper from "./formStepper";
import Box from "../library/box";

const stories = storiesOf("FormStepper", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <Box>
    <FormStepper />
  </Box>
));
