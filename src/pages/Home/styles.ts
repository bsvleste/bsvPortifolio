import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HomeHeader = styled.header`
  ${({ theme }) => css`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 148px;
      max-width: 100%;
    }
    ${media.greaterThan('medium')`
    img{
      width:300px;
      max-width: auto;
      }
    `}
  `}
`
export const HomeMenu = styled.nav`
  ${({ theme }) => css`
    width: 160px;
    display: flex;
    justify-content: space-between;
    ${media.greaterThan('medium')`
    width:200px;
    `}
    a {
      text-decoration: none;
      display: inline-block;
      color: ${theme.blue};
      transition: color 0.2s;
      &:hover {
        color: ${theme['blue-500']};
      }
    }
  `}
`
export const HomeSection = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    div {
      span {
        color: ${theme.blue};
        font-size: 1.5rem;
        font-weight: bold;
      }
      strong {
        font-size: 2rem;
        font-weight: bold;
      }
      img {
        width: 350px;
        border-radius: 8px;
      }
    }
    ${media.greaterThan('medium')`
    grid-template-columns:1fr 1fr;
    gap:16px;

    `}
  `}
`
