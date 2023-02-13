import styled, { css } from 'styled-components'

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`
