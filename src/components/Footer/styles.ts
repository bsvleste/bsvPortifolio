import styled, { css } from 'styled-components'
export const ContainerFooter = styled.div`
  width: 100%;
`
export const WrapperFooter = styled.footer`
  width: min(100% - 15px, 1180px);
  margin-inline: auto;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const WrapperSocialMedia = styled.div`
  ${({ theme }) => css`
    margin-top: 8px;
    gap: 30px;
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    div {
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
      color: ${theme['base-label']};
    }
    a {
      color: ${theme['base-label']};
    }
  `}
`
