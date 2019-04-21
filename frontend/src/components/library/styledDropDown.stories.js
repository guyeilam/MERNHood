import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
// import { action } from '@storybook/addon-actions';

import DropDown from "./styledDropDown";

const stories = storiesOf("DropDown", module);
// allow react-router-dom Link access to StoryRouter
stories.addDecorator(StoryRouter());

stories.add("default", () => (
  <div style={{ margin: "45vw" }}>
    <DropDown title="Toggle">
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
    </DropDown>
  </div>
));
