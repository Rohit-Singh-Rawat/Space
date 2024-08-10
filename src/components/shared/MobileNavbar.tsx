import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { hamburgerMenuState } from '@/lib/atoms'
import { navItems } from '@/lib/constants'

const MobileNavBar = () => {
  const path = usePathname()
  const [isMenuOpen, setMenuOpen] = useRecoilState(hamburgerMenuState)

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full overflow-hidden py-2">
          <motion.nav
            initial={{
              y: '-100%',
              backdropFilter: 'blur(0px)',
            }}
            animate={{
              y: 0,
              backdropFilter: 'blur(10px)',
            }}
            exit={{
              y: '-100%',
              backdropFilter: 'blur(0px)',
              transition: { delay: 0.3, duration: 0.7 },
            }}
            transition={{ duration: 0.4 }}
            style={{ originY: 0 }}
            className="z-50 w-full rounded-b-2xl bg-white py-5 shadow-md dark:bg-black dark:shadow-emerald-900/20 md:hidden"
          >
            <div className="flex flex-col items-center justify-center space-y-5">
              {navItems.map(({ name, href }, index) => (
                <motion.div
                  key={name + href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.1,
                      delay: 0.2 + 0.1 * (index + 1),
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    transition: {
                      duration: 0.15,
                      delay: 0.05 + 0.1 * index,
                    },
                  }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-full px-4 py-2 opacity-50 transition-all ${
                      path === href ? 'opacity-100' : 'hover:opacity-100'
                    }`}
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  )
}

export default MobileNavBar
