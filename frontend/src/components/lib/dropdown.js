import React from 'react';
import { Box, Link, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

export const DropDown = ({ links, text }) => {
  return (
    <div className="dropdown">
      <span className="dropDownTitle">Mouse over me</span>
      <div className="dropdown-content">
        <Link href={links[0]}>
          <Box padding={2}>
            <Text color='green' bold>{text[0]}</Text>
          </Box>
        </Link>
        <Link href={links[1]}>
          <Box padding={2}>
            <Text color='green' bold>{text[1]}</Text>
          </Box>
        </Link>
        <Link href={links[2]}>
          <Box padding={2}>
            <Text color='green' bold>{text[2]}</Text>
          </Box>
        </Link>
      </div>
    </div>
  )
}
