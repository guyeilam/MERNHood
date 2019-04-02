import React from 'react'
import { Button, Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './library.css';
// 
// A form component that should be used to make something happen on the same page(i.e.open a modal).
// You are able to specify the color, type, and width of buttons to change their colors.
// 
// disabled, boolean
// inline, boolean
// name, string
// size, "sm" | "md" | "lg"
// sm: 36px, md: 40px, lg: 48px
// type, "submit" | "button"
// hue, 'light', 'dark'. Only used on 'green' color
// hover, bool

//   onClick
//     ({ event: SyntheticMouseEvent<> }) => void


export function ColorButton({text, padding, transparent, disabled, inline,
                             name, size, type, onClick, color, hue='', hover='' }) {
  if (transparent === true) { 
    transparent = 'transparent';
  } else if (color !== 'green') {
    transparent = color;
  }

  if (hover === true){
    hover = 'hoverButton'
  }

  return (
    <div className={`${color}Button${hue} ${hover}`}>
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

