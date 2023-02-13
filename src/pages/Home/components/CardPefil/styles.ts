import styled, { css } from 'styled-components'

export const ContainerPerfil = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 212px;
    background-color: ${theme['base-profile']};
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding: 40px;
  `}
`
export const FotoPerfil = styled.div`
  margin-right: 32px;
  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ContainerHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `}
`
export const WrapperLink = styled.div`
  ${({ theme }) => css`
    a {
      font-size: 14px;
      color: ${theme.blue};
      text-decoration: none;
      svg {
        margin-left: 8px;
      }
    }
  `}
`
