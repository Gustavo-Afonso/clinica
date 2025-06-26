"use client"

import { useState } from "react"
import { Menu, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Médicos", href: "#medicos" },
  { name: "Contato", href: "#contato" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Rio de Janeiro, Rj</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>Seg-Sex: 8h às 18h | Sáb: 8h às 12h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              Logo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium text-base"
                onClick={(e) => handleNavClick(e, item.href)}
                aria-label={`Navegar para ${item.name}`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
              aria-label="Agendar consulta"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu de navegação">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-6 transition-all duration-300">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors duration-200"
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-label={`Navegar para ${item.name}`}
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-full transition-all duration-200"
                  aria-label="Agendar consulta"
                >
                  Agendar Consulta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}