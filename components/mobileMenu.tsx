// components/MobileMenu.tsx
import { useEffect } from 'react'
import clsx from 'clsx'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activeItem: string
}

const MENU_ITEMS = [
  { href: '/',         label: 'Home',       id: 'home' },
  { href: '/about',    label: 'About',      id: 'about' },
  { href: '/artists',  label: 'Artists',    id: 'artists' },
  { href: '/exhibition', label: 'Exhibition', id: 'exhibition' },
  { href: '/contact',  label: 'Contact',    id: 'contact' },
]

export default function MobileMenu({ open, onClose, activeItem }: MobileMenuProps) {
  // lock body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40',
          {
            'opacity-0 pointer-events-none': !open,
            'opacity-100': open,
          }
        )}
        onClick={onClose}
      />

      {/* Full-width slide-in panel */}
      <nav
        className={clsx(
          'fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 p-6',
          {
            'translate-x-full': !open,
            'translate-x-0': open,
          }
        )}
        aria-hidden={!open}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-2xl focus:outline-none"
        >
          ×
        </button>

        <ul className="mt-10 space-y-6">
          {MENU_ITEMS.map((item, i) => {
            const delay = (MENU_ITEMS.length - i) * 100
            return (
              <li
                key={item.id}
                style={{ transitionDelay: `${delay}ms` }}
                className={clsx(
                  'transform transition-all duration-300 ease-out flex flex-row items-center gap-2',
                  {
                    'translate-y-5 opacity-0': !open,
                    'translate-y-0 opacity-100': open,
                  }
                )}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className={clsx(
                    'text-lg block transition-colors duration-200',
                    {
                      'text-black': activeItem === item.id,
                      'text-gray-500 hover:text-gray-700': activeItem !== item.id,
                    }
                  )}
                >
                  {item.label}
                </a>
                {
                  activeItem === item.id && (
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  )
                }
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
