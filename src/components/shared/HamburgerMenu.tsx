import { hamburgerMenuState } from '@/lib/atoms'
import { useRecoilState } from 'recoil'
import { Hamburger } from '../Icons/Hamburger'
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
      <div className={`hamburger-icon pl-5 ${isMenuOpen ? 'open' : ''}`}>
        <Hamburger
          className="size-5 stroke-black dark:stroke-white"
          isOpen={isMenuOpen}
        />
      </div>
    </button>
  )
}

export default HamburgerMenu
