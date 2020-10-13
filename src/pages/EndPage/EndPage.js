import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight, FaHome } from 'react-icons/fa'

import dataAPI from '../../service'

import { Container, Content } from './styles';

function EndPage() {
  const [data, setData] = useState({})

  useEffect(() => {
    const response = localStorage.getItem('pizza')

    if (response) {
      const responseData = response.split(', ')

      const newData = {
        size: responseData[0],
        pasta: responseData[1],
        filling: responseData[2],
      }

      setData(newData)

    }
  }, [])

  useEffect(() => {
    const newDates = new Date().getDay() - 1

    const recomendation = dataAPI.recommendationOfDay[newDates]

    const confirm = confirmRecomendationOfDay()

    if (recomendation.size === confirm.size) {
      if (recomendation.filling === confirm.filling) {
        alert('Você selecionou a pizza do dia! Parabens, você acaba de ganhar pontos')
      }
    }

  }, [data])

  const confirmRecomendationOfDay = () => {
    return data
  }

  return (
    <Container>
      <Content>
        <h1>Pizza selecionada</h1>
        <table>
          <tr>
            <td>Tamanho</td>
            <td><FaAngleDoubleRight />  {data.size}</td>
          </tr>
          <tr>
            <td>Tipo de massa</td>
            <td><FaAngleDoubleRight />  {data.pasta}</td>
          </tr>
          <tr>
            <td>Recheio</td>
            <td><FaAngleDoubleRight />  {data.filling}</td>
          </tr>
        </table>

        
        <Link to={'/'}>
          <FaHome />
          Voltar ao inicio
        </Link>
      </Content>
    </Container>
  )
}

export default EndPage;