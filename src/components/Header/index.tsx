import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NewTransitionButton,
} from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logoImg} alt="" />
          <span>Money Mng</span>
        </Logo>
        <NewTransitionButton>Nova Transação</NewTransitionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
