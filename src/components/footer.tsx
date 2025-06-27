import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const services = ["Cirurgia Plástica", "Cirurgia Geral", "Proctologia", "Nutrição", "Consultas", "Exames"]

  const quickLinks = ["Sobre Nós", "Nossos Médicos", "Convênios", "Blog", "Política de Privacidade", "Termos de Uso"]

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Clínica <span className="text-yellow-600">Excellence</span>
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Há mais de 15 anos cuidando da sua saúde com excelência, tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 p-2 rounded-lg hover:bg-amber-600 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-amber-600 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-amber-600 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-600">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-600">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-500">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-600" />
                <span className="text-blue-100">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-600" />
                <span className="text-blue-100">contato@clinicaexcellence.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-yellow-600 mt-1" />
                <span className="text-blue-100">
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP, 01310-100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">© 2024 Clínica Excellence. Todos os direitos reservados.</p>
            <p className="text-blue-100 text-sm mt-2 md:mt-0">Desenvolvido com ❤️ para cuidar da sua saúde</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
