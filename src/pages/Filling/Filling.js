import React, { useState, useEffect } from 'react';

import dataAPI from '../../service'
import Assembly from '../../components/Assembly'

import { 
  Container, 
  Background,
} from './styles';

function Filling() {
  const [data, setData] = useState([])

  useEffect(() => {
    const response = dataAPI
    setData(response.Filling)
  })

  return (
    <Container>
      <Assembly
        responseData={data}
        title="Escolha o recheio"
      />
      <Background />
    </Container>
  )
}

export default Filling;