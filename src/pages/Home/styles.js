import styled from 'styled-components'

import backgraundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch
`

export const ContainerLogo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  img {
    width: 150px;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`

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
  width: 450px;;
  text-align: center;

  h1 {
    margin-bottom: 24px;
    color: #20bf6b;
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 450px;

  form {
    margin: 80px 0;
    width: 100%;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #20bf6b;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgraundImg}) no-repeat center;
  background-size: cover;
`;