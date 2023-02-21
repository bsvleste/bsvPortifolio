import styled, { css } from 'styled-components'
export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;
    img {
      cursor: pointer;
    }
  `}
`
