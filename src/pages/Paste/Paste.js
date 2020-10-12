import React, { useState, useEffect } from 'react';

import dataAPI from '../../service'
import Assembly from '../../components/Assembly'

import { Container, Background } from './styles';

function Paste() {
  const [data, setData] = useState([])

  useEffect(() => {
    const response = dataAPI
    setData(response.pasta)
  })

  return (
    <Container>
      <Assembly
        responseData={data} 
        title="Escolha a massa da sua pizza" 
        linkNext="/filling"
      />
      <Background />
    </Container>
  )
}

export default Paste;