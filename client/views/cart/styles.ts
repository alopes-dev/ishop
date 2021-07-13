import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  /* margin-top: 30px; */
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #fac23c;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 12px 20px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#fac23c')};
      }
    }
  }
`

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
    border-radius: 4px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    display: block;
    font-weight: bold;
  }

  div {
    display: flex;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 6px;
      width: 60px;
      text-align: center;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`
