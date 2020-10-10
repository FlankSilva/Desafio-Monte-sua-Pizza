import styled from 'styled-components'

import backgraundImg from '../../assets/backgrondPizza.jpg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgraundImg}) no-repeat center;
  background-size: cover;
`;