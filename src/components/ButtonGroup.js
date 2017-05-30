import React from 'react'

export const ButtonGroup = ({buttonGroupType="group", children}) => (
  <div className={`btn-${buttonGroupType}`} role="group" aria-label="Basic example">
    { children }
  </div>
)
