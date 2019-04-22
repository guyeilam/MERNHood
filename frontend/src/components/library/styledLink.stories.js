import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import Link from "./styledLink";

const stories = storiesOf("Link", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <div style={{ marginTop: "50vh", marginLeft: "50vw" }}>
    <Link to="/">home</Link>
  </div>
));
stories.add("colored", () => (
  <div style={{ marginTop: "50vh", marginLeft: "50vw" }}>
    <Link color="lightBlue" to="/">
      home
    </Link>
  </div>
));
