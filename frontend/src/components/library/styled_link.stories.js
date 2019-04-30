import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import Link from "./styled_link";
import Box from "./box";

const stories = storiesOf("Link", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <Box>
    <Link to="/">home</Link>
  </Box>
));
stories.add("colored", () => (
  <Box>
    <Link color="lightBlue" to="/">
      home
    </Link>
  </Box>
));
