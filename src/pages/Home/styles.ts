import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ContainerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-top: 120px;
  width: min(100% - 15px, 840px);
  margin-inline: auto;
`
export const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`
export const HomeHeader = styled.header`
  ${({ theme }) => css`
    width: min(100% - 15px, 840px);
    margin-inline: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
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
    width: 50px;
    display: flex;
    justify-content: flex-end;
    gap: 32px;
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
