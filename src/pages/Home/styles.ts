import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ContainerHome = styled.div`
  width: min(100% - 15px, 840px);
  margin-inline: auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

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
      color: ${theme['viva-magenta']};
      transition: color 0.2s;
      &:hover {
        color: ${theme['viva-magenta-400']};
      }
    }
  `}
`
export const HomeSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 350px;
      border-radius: 8px;
    }
    span {
      color: ${theme['viva-magenta']};
      font-size: 1.5rem;
      font-weight: bold;
    }
    strong {
      font-size: 2rem;
      font-weight: bold;
    }
    ${media.greaterThan('medium')`
      flex-direction: row;
      width:100%;
      justify-content: space-between;
    `}
  `}
`
export const ButtonBlog = styled.div`
  ${({ theme }) => css`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 56px;
    border-radius: 8px;
    border: 2px solid ${theme['viva-magenta']};
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: ${theme['viva-magenta']};
    }
  `}
`
