import styled from 'styled-components'

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
  background: #232129;
  padding: 20px;

  h1 {
    color:#20bf6b;
    margin-bottom: 35px;
  }

  table {
    width: 300px;

    td {
      font-size: 18px;
      color: #fff;
    }
  }

  a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #f4ede8;
      margin-top: 90px;
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

export const PGroup = styled.div`
  border: 1px solid red;
  width: 260px;
`