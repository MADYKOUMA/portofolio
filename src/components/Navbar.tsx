import { Briefcase, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export const Navbar = () => {
  const items = useMemo(
    () => [
      { label: 'Accueil', href: '#Hero' },
      { label: 'À propos', href: '#About' },
      { label: 'Compétences', href: '#Skills' },
      { label: 'Projets', href: '#Projects' },
      { label: 'Contact', href: '#Contact' },
    ],
    [],
  )

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white backdrop-blur">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          <a href="#accueil" className="flex items-center gap-2 font-semibold">
            <span className="grid ml-8 h-12 w-12 place-items-center rounded-xl bg-slate-900 text-white">
              < Briefcase className="h-10 w-10" ml-6 aria-hidden="true" />
            </span>
            {/* <span className="text-3xl text-sky-700 ml-2 font-bold">
              MADY <span className="text-sky-700">KOUMA</span>
            </span> */}
          </a>

          <nav className="hidden md:block mr-6" aria-label="Navigation principale">
            <ul className="flex items-center gap-6 text-lg text-slate-700">
              {items.map((item) => (
                <li key={item.href}>
                  <a className="hover:text-slate-900 font-bold" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="btn-ghost md:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="container-page pb-4">
            <div className="card p-2">
              <ul className="flex flex-col">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      className="block rounded-xl px-4 py-3 text-lg font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
