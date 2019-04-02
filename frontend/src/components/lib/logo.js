import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// size, sm | m | lg

export function Logo({size, type}) {
  return (
    <div className={`logo logo-${size} logo-${type}`}>
      <FontAwesomeIcon icon="feather-alt" /> mernhood
    </div>
  )
}
