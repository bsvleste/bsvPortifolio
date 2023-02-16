import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ContinerPostHeader = styled.div`
  ${({ theme }) => css`
    background-color: ${theme['base-profile']};
    width: 100%;
    height: 168px;
    border-radius: 8px;
    padding: 32px;
  `}
`
export const ContainerLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    color: ${theme.blue};
    a {
      display: flex;
      align-items: center;
      text-align: center;
      text-decoration: none;
      color: ${theme.blue};
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
    }
  `}
`
export const ContainerTitle = styled.div`
  ${({ theme }) => css`
    margin-top: 20px;
  `}
`
export const ContainerMediaSocial = styled.div`
  ${({ theme }) => css`
    margin-top: 8px;
    display: flex;
    color: ${theme['base-span']};
    width: 100%;
    justify-content: space-between;
    ${media.greaterThan('medium')`
    width:45%;    

    `}
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        margin-left: 8px;
      }
    }
  `}
`
export const ContainerPost = styled.div`
  padding: 32px;
`
