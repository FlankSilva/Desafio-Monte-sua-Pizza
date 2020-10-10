import React from 'react';

import { Container } from './styles';

function Select({ children,...rest}) {
  return (
    <Container>
      <select {...rest}>
        {children}
      </select>
    </Container>
  )
}

export default Select;