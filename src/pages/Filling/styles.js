import styled from 'styled-components'

import backgraundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgraundImg}) no-repeat center;
  background-size: cover;
`;