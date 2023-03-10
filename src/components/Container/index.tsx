import styled from 'styled-components'

export const Container = styled.div`
  width: min(100% - 15px, ${({ theme }) => theme.container});
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
