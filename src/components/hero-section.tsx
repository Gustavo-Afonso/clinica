import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Award } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-slate-800 to-blue-950 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Cuidando da sua <span className="text-amber-500">saúde</span> com excelência
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Especialistas em Cirurgia Plástica, Cirurgia Geral, Proctologia e Nutrição. Oferecemos tratamentos
                personalizados com tecnologia de ponta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-950 hover:bg-white hover:text-blue-700"
              >
                Nossos Serviços
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-blue-100">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-blue-100">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-100">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Image
  src="/foto.png"
  alt="Foto da clínica"
  width={800}
  height={500}
  className="rounded-xl object-cover w-full h-auto"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
