import React from 'react';
import { Link } from 'react-router-dom'
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

function Assembly({ responseData, title, linkNext }) {

  return (
    <Container>
      <Content>
        <ContainerLogo>
          <img src={logoIMG} alt=""/>
          <p>Monte sua Pizza</p>
        </ContainerLogo>
        <ContainerSelectPizza>
          <h1>{title}</h1> 
        </ContainerSelectPizza>
        <AnimationContainer>
          <form action="">
            <Select name="pieces" id="pieces">
              {responseData?.map(item => {
                return (
                  <option>{item}</option>
                )
              })}
            </Select>
          </form>
          <Link to={linkNext}>
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