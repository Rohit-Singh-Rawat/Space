import Link from 'next/link'
import Logo from '../Icons/Logo'
import NavBar from '../Nav/Navbar'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 px-10">
      <Link href={'/'}>
        <Logo className="h-10 w-12 dark:invert" />
      </Link>
      <NavBar />
    </header>
  )
}

export default Header
