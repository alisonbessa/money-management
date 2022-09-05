import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NewTransitionButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import { NewTransitionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logoImg} alt="" />
          <span>Money Mng</span>
        </Logo>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransitionButton>Nova Transação</NewTransitionButton>
          </Dialog.Trigger>

          <NewTransitionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
