import React, { useState, useEffect, useContext } from 'react';
import dataAPI from '../../service'
import Assembly from '../../components/Assembly'

import { 
  Container, 
  Background,
} from './styles';

function Home() {
  const [data, setData] = useState([])
  const [recomendationOfDay, setRecomendationOfDay] = useState({})

  useEffect(() => {
    const response = dataAPI
    setData(response.size)

    localStorage.removeItem('pizza')
  })

  useEffect(() => {
    const date = new Date().getDay() - 1

    const recomendation = dataAPI.recommendationOfDay[date]

    setRecomendationOfDay(recomendation)

  })

  return (
    <Container>
      <Assembly 
        responseData={data} 
        title="Escolha o tamanho da sua pizza" 
        linkNext="/past"
        recomendation={recomendationOfDay}
      />
      <Background />
    </Container>
  )
}

export default Home;