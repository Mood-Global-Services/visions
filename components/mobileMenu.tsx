// components/MobileMenu.tsx
import { useEffect } from 'react'
import clsx from 'clsx'
import Image from "next/image"
import logo from '@/assets/images/logo.webp'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activeItem: string
}

const MENU_ITEMS = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/about', label: 'About', id: 'about' },
  { href: '/artists', label: 'Artists', id: 'artists' },
  { href: '/exhibition', label: 'Exhibition', id: 'exhibition' },
  { href: '/contact', label: 'Contact', id: 'contact' },
]

export default function MobileMenu({ open, onClose, activeItem }: MobileMenuProps) {
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <>
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
        <div className="flex flex-row items-center justify-between">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-4xl font-light focus:outline-none"
          >
            ×
          </button>
        </div>

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
