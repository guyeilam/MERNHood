import React from 'react';
import Link from "./styledLink";
import Box from "./box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Logo({ children }) {

  return (
    <Box row>
      <Link to="/">
        <FontAwesomeIcon style={{ paddingRight: 5 }} icon="feather-alt" />
        {children}
      </Link>
    </Box>
  )
}
