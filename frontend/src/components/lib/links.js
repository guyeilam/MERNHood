import React from 'react'
import { Box, Link, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './library.css';

export function LightGreenLink({text, padding}) {
  return (
    <div className="greenLink">
      <Link href="#">
        <Box padding={padding}>
          <Text bold>{text}</Text>
        </Box>
      </Link>
    </div>
  )
}
export function ColorLink({text, padding, color}) {
  return (
    <Link href="#">
      <Box padding={padding}>
        <Text color={color} bold>{text}</Text>
      </Box>
    </Link>
  )
}