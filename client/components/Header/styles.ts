import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  div {
    img {
      height: 120px;
      width: 120px;
      position: absolute;
      top: 0;
    }
  }
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fac23c;
    }

    span {
      font-size: 12px;
      color: #fac23c;
    }
  }
`
