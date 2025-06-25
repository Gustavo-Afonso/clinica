/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Star,
  Sparkles,
  Heart,
  Zap,
  Droplets,
  Snowflake,
  SyringeIcon as Needle,
  Wind,
  X,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function BellaVittaClinic() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-rose-400" />,
      title: "Limpeza de Pele",
      description: "Tratamento profundo para renovação e purificação da pele",
    },
    {
      icon: <Needle className="w-8 h-8 text-rose-400" />,
      title: "Botox",
      description: "Aplicação de toxina botulínica para suavizar rugas e linhas de expressão",
    },
    {
      icon: <Droplets className="w-8 h-8 text-rose-400" />,
      title: "Drenagem Linfática",
      description: "Massagem terapêutica para redução de inchaço e melhora da circulação",
    },
    {
      icon: <Snowflake className="w-8 h-8 text-rose-400" />,
      title: "Criolipólise",
      description: "Tecnologia de congelamento para eliminação de gordura localizada",
    },
    {
      icon: <Zap className="w-8 h-8 text-rose-400" />,
      title: "Microagulhamento",
      description: "Estimulação do colágeno para rejuvenescimento e melhora da textura",
    },
    {
      icon: <Wind className="w-8 h-8 text-rose-400" />,
      title: "Radiofrequência",
      description: "Tratamento para firmeza da pele e combate ao envelhecimento",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente atendimento! A equipe é muito profissional e os resultados superaram minhas expectativas. Recomendo!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Ambiente acolhedor e tratamentos de qualidade. Me sinto mais confiante após os procedimentos na BellaVitta.",
      rating: 5,
    },
    {
      name: "Carla Santos",
      text: "Profissionais capacitados e equipamentos modernos. Sempre saio satisfeita com os resultados!",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Heart className="w-8 h-8 text-rose-400 animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 text-rose-400 animate-ping opacity-20">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                BellaVitta
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {["inicio", "sobre", "servicos", "depoimentos", "contato"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-700 hover:text-rose-400 transition-all duration-300 font-medium capitalize relative ${
                    activeSection === section ? "text-rose-400" : ""
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <Button className="hidden lg:flex bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 hover:from-rose-500 hover:via-pink-600 hover:to-purple-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="w-4 h-4 mr-2" />
              Agendar Avaliação
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {["inicio", "sobre", "servicos", "depoimentos", "contato"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left text-gray-700 hover:text-rose-400 transition-colors font-medium capitalize py-2"
                  >
                    {section}
                  </button>
                ))}
                <Button className="mt-4 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Agendar Avaliação
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-rose-100 to-pink-100 p-8 md:p-16">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 max-w-3xl">
              <Badge className="mb-6 bg-white/80 text-rose-600 hover:bg-white/90">✨ Estética Avançada</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Realce sua beleza natural com{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  tecnologia
                </span>{" "}
                e cuidado humano
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Na BellaVitta, combinamos os mais modernos tratamentos estéticos com o carinho e atenção que você
                merece. Descubra sua melhor versão conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-8 py-4 text-lg"
                >
                  Agende sua Avaliação Gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg"
                >
                  Conheça nossos serviços
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-200">Nossa História</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Cuidando da sua beleza com <span className="text-rose-400">excelência</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A BellaVitta Estética Avançada nasceu do sonho de proporcionar tratamentos estéticos de alta qualidade
                em um ambiente acolhedor e sofisticado. Com mais de 10 anos de experiência, nossa equipe especializada
                está comprometida em realçar sua beleza natural.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-rose-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Missão</h3>
                    <p className="text-gray-600">
                      Proporcionar bem-estar e autoestima através de tratamentos estéticos seguros e eficazes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-6 h-6 text-rose-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Visão</h3>
                    <p className="text-gray-600">
                      Ser referência em estética avançada, sempre inovando e superando expectativas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-rose-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Valores</h3>
                    <p className="text-gray-600">
                      Ética, qualidade, inovação e respeito à individualidade de cada cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-rose-100 to-pink-100 p-8">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Ambiente da clínica BellaVitta"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-200">Nossos Serviços</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tratamentos que <span className="text-rose-400">transformam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de tratamentos estéticos com tecnologia de ponta e profissionais especializados
              para cuidar da sua beleza.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-rose-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-rose-100 group-hover:bg-rose-200 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <Button variant="outline" className="mt-6 border-rose-300 text-rose-600 hover:bg-rose-50">
                    Saiba mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-200">Depoimentos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que nossas clientes <span className="text-rose-400">dizem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A satisfação das nossas clientes é nossa maior conquista. Veja alguns depoimentos de quem já viveu a
              experiência BellaVitta.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                    {testimonials[currentTestimonial].text}
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-600">Cliente BellaVitta</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-rose-300 text-rose-600 hover:bg-rose-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-rose-300 text-rose-600 hover:bg-rose-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-600 hover:bg-rose-200">Entre em Contato</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Agende sua <span className="text-rose-400">consulta</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos prontas para cuidar de você. Entre em contato e agende sua avaliação gratuita.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envie uma mensagem</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Seu nome" className="border-rose-200 focus:border-rose-400" />
                      <Input type="email" placeholder="Seu e-mail" className="border-rose-200 focus:border-rose-400" />
                    </div>
                    <Input placeholder="Seu telefone" className="border-rose-200 focus:border-rose-400" />
                    <Textarea placeholder="Sua mensagem" rows={4} className="border-rose-200 focus:border-rose-400" />
                    <Button className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informações de contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-rose-100 rounded-full">
                      <MapPin className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Endereço</p>
                      <p className="text-gray-600">Rua das Flores, 123 - Centro, São Paulo - SP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-rose-100 rounded-full">
                      <Phone className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Telefone</p>
                      <p className="text-gray-600">(11) 9999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-rose-100 rounded-full">
                      <Mail className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">E-mail</p>
                      <p className="text-gray-600">contato@bellavittaestetica.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <p className="text-gray-600">Mapa do Google Maps aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-rose-400" />
                <span className="text-2xl font-bold">BellaVitta</span>
              </div>
              <p className="text-gray-400 mb-4">
                Estética Avançada para realçar sua beleza natural com tecnologia e cuidado humano.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white hover:border-rose-400"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white hover:border-rose-400"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#inicio" className="hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-white transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Limpeza de Pele</li>
                <li>Botox</li>
                <li>Drenagem Linfática</li>
                <li>Criolipólise</li>
                <li>Microagulhamento</li>
                <li>Radiofrequência</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rua das Flores, 123</li>
                <li>Centro, São Paulo - SP</li>
                <li>(11) 9999-9999</li>
                <li>contato@bellavittaestetica.com.br</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 BellaVitta Estética Avançada. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
