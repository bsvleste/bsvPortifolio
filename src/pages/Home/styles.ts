import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin-left: 8px;
  margin-right: 8px;
`
export const HomeHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1180px;
    padding: 2rem 0;
    width: 100%;
    img {
      width: 148px;
      max-width: auto;
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
export const ContainerSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  margin-top: 8px;
  img {
    width: 100%;
  }
  ${media.greaterThan('small')`
    margin-top:40PX;
   img {
    width: 500px;
  }
  `}
`
export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 1180px;
  justify-content: space-between;
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: flex-end;

  `}
  `}
`
export const SectionInfo = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme['viva-magenta']};
      font-size: 2rem;
      ${media.greaterThan('medium')`
    font-size: 1.5rem;
    `}
      font-weight: bold;
    }
    strong {
      font-size: 2rem;
      font-weight: bold;
    }
    ${media.greaterThan('medium')`
      width: 40%;
  `}
  `}
`
export const ButtonBlog = styled.div`
  ${({ theme }) => css`
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
    ${media.greaterThan('medium')`
      margin-top:60px;
      margin-bottom:38px;
      ;
    `}
  `}
`
