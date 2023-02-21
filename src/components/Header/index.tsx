import { HeaderContainer } from './styles'
import logo from '../../assets/bsvcode.png'
import { useNavigate } from 'react-router-dom'
export function Header() {
  const navigate = useNavigate()
  function handleNavigate() {
    navigate('/')
  }
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" className="logo" onClick={handleNavigate} />
    </HeaderContainer>
  )
}
