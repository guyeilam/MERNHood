import React from 'react'
import { Box, Link, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './library.css';

// The Link component allows you to show links on the page, open them in a new window, and change the color.

// text, string
// padding, bool
// onClick, optional callback to override default href behavior

export function LightGreenLink({text, padding, onClick}) {
  return (
    <div className="greenLink">
      <Link href="#" onClick={onClick}>
        <Box padding={padding}>
          <Text bold>{text}</Text>
        </Box>
      </Link>
    </div>
  )
}
export function ColorLink({text, padding, color, onClick}) {
  return (
    <Link href="#" onClick={onClick}>
      <Box padding={padding}>
        <Text color={color} bold>{text}</Text>
      </Box>
    </Link>
  )
}
