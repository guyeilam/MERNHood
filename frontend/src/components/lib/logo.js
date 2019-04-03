import React from 'react'
import { Box, Link, Text } from 'gestalt';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// size, sm | m | lg

export function Logo({size, type}) {
  return (
    <Link href={"#"}>
      <div className={`logo logo-${size} logo-${type}`}>
        <FontAwesomeIcon icon="feather-alt" /> mernhood
      </div>
    </Link>
  )
}
