import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ContainerPerfil = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme['base-profile']};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    height: auto;
    ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 40px;
    `}
  `}
`
export const FotoPerfil = styled.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 8px;
  }
  ${media.greaterThan('medium')`
margin-right: 32px;
  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
  `}
`

export const ContainerInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    p {
      margin-top: 8px;
      color: ${theme['base-text']};
    }
  `}
`
export const ContainerHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-size: 0.785rem;
    line-height: 160%;
    margin-top: 32px;
    ${media.greaterThan('medium')`
    margin-top: 0;
    font-size: 1rem;
    align-items: flex-start;
    flex-direction: row;
    `}
  `}
`

export const WrapperSocialMedia = styled.div`
  ${({ theme }) => css`
    margin-top: 8px;
    a {
      color: ${theme['base-label']};
    }
    width: 90px;
    display: flex;
    justify-content: space-between;
  `}
`
