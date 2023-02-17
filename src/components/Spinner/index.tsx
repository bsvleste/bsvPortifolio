import { SpinnerGap } from 'phosphor-react'
import { ContainerSpiner } from './styles'

export function Spinner() {
  return (
    <ContainerSpiner>
      <SpinnerGap size={40} />
    </ContainerSpiner>
  )
}
