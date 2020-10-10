import React from 'react';

import Select from '../../components/Select'
 

import { Container, Content, AnimationContainer, Background } from './styles';

function Home() {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form action="">
            <h1>Escolha o tamanho da sua pizza</h1>
            <Select name="pieces" id="pieces">
              <option>Pequena - 6 fatias</option>
              <option>Média - 8 fatias</option>
              <option>Grande - 10 fatias</option>
            </Select>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default Home;