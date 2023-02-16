import { HeaderContainer } from './styles'
import logo from '../../assets/bsvcode.png'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" className="logo" />
    </HeaderContainer>
  )
}
