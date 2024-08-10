import { hamburgerMenuState } from '@/lib/atoms'
import { useRecoilState } from 'recoil'
import Hamburger from '../Icons/Hamburger'

const HamburgerMenu = ({ className }: { className?: string }) => {
  const [isMenuOpen, setMenuOpen] = useRecoilState(hamburgerMenuState)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <button
      className={`bg-transparent outline-none md:hidden ${className}`}
      onClick={toggleMenu}
    >
      <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
        <Hamburger className="size-9 stroke-black dark:stroke-white" />
      </div>
    </button>
  )
}

export default HamburgerMenu
