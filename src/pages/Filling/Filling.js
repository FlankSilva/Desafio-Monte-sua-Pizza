import React, { useState, useEffect } from 'react';

import dataAPI from '../../service'
import Assembly from '../../components/Assembly'

import { 
  Container, 
  Background,
} from './styles';

function Filling() {
  const [data, setData] = useState([])
  const [recomendationOfDay, setRecomendationOfDay] = useState({})

  useEffect(() => {
    const response = dataAPI
    setData(response.Filling)
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
        title="Escolha o recheio"
        recomendation={recomendationOfDay}
        linkNext="/endpage"
      />
      <Background />
    </Container>
  )
}

export default Filling;