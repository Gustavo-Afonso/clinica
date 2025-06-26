import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const achievements = [
    { icon: Award, number: "15+", text: "Anos de Experiência" },
    { icon: Users, number: "5000+", text: "Pacientes Atendidos" },
    { icon: CheckCircle, number: "98%", text: "Taxa de Sucesso" },
    { icon: Clock, number: "24/7", text: "Suporte Disponível" },
  ]

  const features = [
    "Equipe médica altamente qualificada",
    "Tecnologia de ponta em todos os procedimentos",
    "Ambiente seguro e acolhedor",
    "Atendimento personalizado e humanizado",
    "Certificações e acreditações nacionais",
    "Compromisso com a excelência médica",
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-blue-700">
                Sobre a <span className="text-amber-600">Clínica Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Há mais de 15 anos, a Clínica Excellence tem sido referência em cuidados médicos especializados,
                oferecendo tratamentos de alta qualidade em Cirurgia Plástica, Cirurgia Geral, Proctologia e Nutrição.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é proporcionar cuidados médicos excepcionais, combinando experiência profissional,
                tecnologia avançada e um atendimento humanizado que coloca o paciente no centro de tudo o que fazemos.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
              Conheça Nossa História
            </Button>
          </div>

          <div className="space-y-8">
            <div className="relative">
            <Image
  src="/foto.png"
  alt="Foto da clínica"
  width={300}
  height={300}
  className="rounded-xl object-cover  h-auto"
/>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Anos de Excelência</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <achievement.icon className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-700 mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
