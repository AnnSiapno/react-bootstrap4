import React from 'react';

export const Alert = ({alertType="info", alertStrong="Well Done!", children}) => (
  <div className={`alert alert-${alertType}`} role="alert">
    <strong>{alertStrong}</strong> { children }
  </div>
)
