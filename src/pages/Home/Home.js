import React, { useState, useEffect } from 'react';

import dataAPI from '../../service'
import Assembly from '../../components/Assembly'

import { 
  Container, 
  Background,
} from './styles';

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const response = dataAPI
    setData(response.size)
  })

  return (
    <Container>
      <Assembly 
        responseData={data} 
        title="Escolha o tamanho da sua pizza" 
        linkNext="/past"
      />
      <Background />
    </Container>
  )
}

export default Home;