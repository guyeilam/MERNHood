import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
// import { action } from '@storybook/addon-actions';

import Logo from "./styledLogo";

const stories = storiesOf("Logo", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <div style={{ marginTop: "50vh" }}>
    <Logo>
      <p>mernhood</p>
    </Logo>
  </div>
));
