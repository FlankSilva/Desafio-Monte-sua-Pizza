import styled, { keyframes } from 'styled-components'

import backgraundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch
`

export const ContainerLogo = styled.div`
  text-align: center;
  margin-bottom: 90px;

  img {
    width: 150px;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  background: #232129;
  padding: 20px;
`

export const ContainerSelectPizza = styled.div`
  width: 450px;
  text-align: center;
  height: 90px;

  h1 {
    margin-bottom: 24px;
    color: #20bf6b;
  }

  animation: ${appearFromLeft} 1s;
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 30px 0;
    width: 100%;
    text-align: center;
  }

  a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #f4ede8;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: red;
      }

      svg {
      margin-right: 5px;
      font-size: 20px;
    }
    }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgraundImg}) no-repeat center;
  background-size: cover;
`;