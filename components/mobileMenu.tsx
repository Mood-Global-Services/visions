// components/MobileMenu.tsx
import { useEffect } from 'react'
import clsx from 'clsx'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

const MENU_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
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
            // bottom item (last in array) appears first
            const delay = (MENU_ITEMS.length - i) * 100
            return (
              <li
                key={item.href}
                style={{ transitionDelay: `${delay}ms` }}
                className={clsx(
                  'transform transition-all duration-300 ease-out',
                  {
                    'translate-y-5 opacity-0': !open,
                    'translate-y-0 opacity-100': open,
                  }
                )}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className="text-lg hover:text-blue-600 block"
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
