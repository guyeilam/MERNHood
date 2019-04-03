import React from 'react'
import { Badge } from 'gestalt';

export default function StatusBadge({text, pos="middle", type=''}) {
  return (
    <span className={`status-badge-${type}`}>
      <Badge text={text} position={pos} />
    </span>
  )
}
