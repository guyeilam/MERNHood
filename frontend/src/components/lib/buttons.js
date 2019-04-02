import React from 'react'
import { Button, Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './library.css';

export function GreenButton({text, padding}) {
  return (
    <div className="greenButton">
      <Box padding={padding}>
        <Button text={text} inline />
      </Box>
    </div>
  )
}


export function DarkGreenButton({text, padding}) {
  return (
    <div className="greenButtonDark">
      <Box padding={padding}>
        <Button text={text} inline />
      </Box>
    </div>
  )
}

export function HoverButton({text, padding}) {
  return (
    <div className="hoverButton">
      <Box padding={padding}>
        <Button text={text} inline />
      </Box>
    </div>
  )
}

