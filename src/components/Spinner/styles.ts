import styled from 'styled-components'

export const ContainerSpiner = styled.div`
  svg {
    animation: loading 2s linear infinite;
    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
