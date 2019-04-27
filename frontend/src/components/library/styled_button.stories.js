import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import Button from "./styled_button";
import Box from "./box";

const stories = storiesOf("Button", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <Box>
    <div style={{ textAlign: "left" }}>
      <p style={{ fontWeight: "bold" }}>Available props:</p>
      <p> children, color, square, large, bold, submit, disabled</p>
      <br />
    </div>
    <Button>Default</Button>
  </Box>
));
stories.add("colored", () => (
  <Box>
    <Button color="lightBlue">Colored</Button>
  </Box>
));

stories.add("square", () => (
  <Box>
    <Button square>Square</Button>
  </Box>
));

stories.add("large", () => (
  <Box>
    <Button large>Large</Button>
  </Box>
));

stories.add("disabled", () => (
  <Box>
    <Button disabled>Disabled</Button>
  </Box>
));
