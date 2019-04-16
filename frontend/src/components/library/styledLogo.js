import React from 'react';
import Link from "./styledLink";
import Box from "./box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Logo({ children }) {

  return (
    <Box fontSize="large" padding="8px" row>
      <Link to="/">
        <FontAwesomeIcon style={{ paddingRight: 5, paddingTop: 14 }} icon="feather-alt" />
        {children}
      </Link>
    </Box>
  )
}
