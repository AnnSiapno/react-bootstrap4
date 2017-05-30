import React from 'react';

export const Button = ({buttonType="button", buttonTitle="Button"}) => (
  <button type="button" className={`btn btn-${buttonType}`}>
    <strong>{buttonTitle}</strong>
  </button>
)
