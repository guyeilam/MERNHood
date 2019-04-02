import React from 'react'
import { Button, Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './library.css';
// 
// A form component that should be used to make something happen on the same page(i.e.open a modal).
// You are able to specify the color, type, and width of buttons to change their transparency.
// 
// disabled, boolean
// inline, boolean
// name, string
// size, "sm" | "md" | "lg"
// sm: 36px, md: 40px, lg: 48px
// type, "submit" | "button"

//   onClick
//     ({ event: SyntheticMouseEvent<> }) => void


export function GreenButton({text, padding, transparent, disabled, inline, name, size, type, onClick }) {
  if (transparent === true) { 
    transparent = 'transparent';
  } else {
    transparent = 'gray';
  }

  return (
    <div className="greenButton">
      <Box padding={padding}>
        <Button 
        text={text} color={transparent} disabled={disabled === true}
        inline={inline === true} name={name} size={size} type={type}
        onClick={onClick}
        />
      </Box>
    </div>
  )
}


export function DarkGreenButton({ text, padding, transparent, disabled, inline, name, size, type, onClick }) {
  if (transparent === true) {
    transparent = 'transparent';
  } else {
    transparent = 'gray';
  }
  return (
    <div className="greenButtonDark">
      <Box padding={padding}>
        <Button
          text={text} color={transparent} disabled={disabled === true}
          inline={inline === true} name={name} size={size} type={type} 
          onClick={onClick}
          />
      </Box>
    </div>
  )
}

export function HoverButton({ text, padding, transparent, disabled, inline, name, size, type, onClick }) {
  if (transparent === true) {
    transparent = 'transparent';
  } else {
    transparent = 'gray';
  }
  return (
    <div className="hoverButton">
      <Box padding={padding}>
        <Button
          text={text} color={transparent} disabled={disabled === true}
          inline={inline === true} name={name} size={size} type={type} 
          onClick={onClick}
          />
      </Box>
    </div>
  )
}

