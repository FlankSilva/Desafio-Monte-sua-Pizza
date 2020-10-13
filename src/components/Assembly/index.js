import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'

import logoIMG from '../../assets/logo.png'
import Select from '../Select'

import { 
  Container, 
  Content, 
  ContainerLogo, 
  AnimationContainer, 
  Background, 
  ContainerSelectPizza,
} from './styles';

function Assembly({ responseData, title, linkNext, recomendation }) {
  const [ stage, setStage ] = useState('')

  const history = useHistory()

  const handleHomePage = () => {
    history.push('/')
  }

  const handleSize = (value) => {
    setStage(value)
  }

  const handleNext = () => {
    if (!stage || stage === ' - ') {
      return alert('Selecione uma opção')
    }

    const getStorage = localStorage.getItem('pizza')

    if (getStorage) {
      localStorage.setItem('pizza', `${getStorage}, ${stage}`)
    } else {
      localStorage.setItem('pizza', stage)
    }

    history.push(linkNext)
  }

  return (
    <Container>
      <Content>
        <ContainerLogo onClick={handleHomePage}>
          <img src={logoIMG} alt=""/>
          <p>Monte sua Pizza</p>

          <div>
            <p>Recomendação do dia</p>
            <p>Tamanho: <strong>{recomendation.size}</strong></p>
            <p>Recheio: <strong>{recomendation.filling}</strong></p>
          </div>
        </ContainerLogo>

        <ContainerSelectPizza>
          <h1>{title}</h1>
        </ContainerSelectPizza>
        <AnimationContainer>
          <form action="">
            <Select 
              name="pieces" 
              id="pieces"
              value={stage} 
              onChange={e => handleSize(e.target.value)}
            >
              {responseData?.map(item => {
                return (
                  <option value={item}>{item}</option>
                )
              })}
            </Select>
          </form>
          <Link 
            onClick={handleNext} 
          >
            <FaAngleDoubleRight />
            <p>Proximo</p>
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}

export default Assembly;