import React from 'react';

import Select from '../../components/Select'

import logoIMG from '../../assets/logo.png'

import { 
  Container, 
  Content, 
  AnimationContainer, 
  Background,
  ContainerLogo,
  ContainerSelectPizza
} from './styles';

function Home() {
  return (
    <Container>
      <Content>
        <ContainerLogo>
          <img src={logoIMG} alt=""/>
          <p>Monte sua Pizza</p>
        </ContainerLogo>
        <ContainerSelectPizza>
          <h1>Escolha o tamanho da sua pizza</h1> 
        </ContainerSelectPizza>
        <AnimationContainer>
          <form action="">
            <Select name="pieces" id="pieces">
              <option>Pequena - 6 fatias</option>
              <option>Média - 8 fatias</option>
              <option>Grande - 10 fatias</option>
            </Select>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}

export default Home;