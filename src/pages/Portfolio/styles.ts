import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import media from 'styled-media-query'

export const WrapperPublications = styled.div`
  ${({ theme }) => css`
    margin-top: 72px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      color: ${theme['base-subtitle']};
    }
    span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${theme['base-span']};
    }
  `}
`
export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    margin-top: 24px;
    display: flex;
    gap: 1rem;
    width: 100%;
    input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background-color: ${theme['base-input']};
      color: ${theme['base-label']};
      padding: 1rem;

      &::placeholder {
        color: ${theme['base-label']};
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
      }
    }
    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border: 0;
      padding: 1rem;
      background-color: transparent;
      border: 1px solid ${theme.blue};
      color: ${theme['base-title']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
      &:not(:disabled):hover {
        background-color: ${theme.blue};
        border: 1px solid ${theme.blue};
      }
    }
  `}
`
export const ContainerPosts = styled.div`
  ${({ theme }) => css`
    margin-top: 48px;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 16px;
    row-gap: 10px;
    ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    gap:32px;
    `}
  `}
`
export const PostCards = styled(Link)`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    ${media.greaterThan('medium')`
    padding: 0.5rem;
    `}
    border-radius: 8px;
    background-color: ${theme['base-post']};
    text-decoration: none;
    transition: opacity 0.5s;
    p {
      max-width: 300px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: ${theme['base-text']};
      margin-top: 20px;
    }
    &:hover {
      opacity: 0.7;
    }
    ${media.greaterThan('small')`
      p{
        max-width:83%;
      }
    `}
  `}
`
export const PostTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    h1 {
      width: 83%;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: ${theme['base-title']};
    }
    span {
      font-weight: 400;
      font-size: 10px;
      ${media.greaterThan('medium')`
      font-size: 12px;

      `}
      line-height: 160%;
      color: ${theme['base-span']};
    }
  `}
`
