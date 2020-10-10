import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 5px;
  height: 40px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  select {
    flex: 1;
    background: transparent;
    border: 0;
    color: #666360;
    height: 100%;

    /* &::placeholder {
      color: #666360;
    } */

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #232129 inset;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: #666360 !important;
    }
  }
`