import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Stethoscope, Heart, Apple } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Cirurgia Plástica",
      description: "Procedimentos estéticos e reparadores com técnicas avançadas para realçar sua beleza natural.",
      features: ["Rinoplastia", "Mamoplastia", "Lipoaspiração", "Abdominoplastia", "Lifting Facial"],
      color: "text-amber-600",
    },
    {
      icon: Stethoscope,
      title: "Cirurgia Geral",
      description: "Tratamentos cirúrgicos completos com segurança e precisão para diversas condições.",
      features: ["Cirurgia Laparoscópica", "Hérnias", "Vesícula", "Apendicite", "Cirurgia Oncológica"],
      color: "text-slate-800",
    },
    {
      icon: Heart,
      title: "Proctologia",
      description: "Especialização no tratamento de doenças do intestino grosso, reto e ânus.",
      features: ["Hemorroidas", "Fissuras", "Fístulas", "Colonoscopia", "Pólipos Intestinais"],
      color: "text-amber-600",
    },
    {
      icon: Apple,
      title: "Nutrição",
      description: "Orientação nutricional personalizada para uma vida mais saudável e equilibrada.",
      features: [
        "Avaliação Nutricional",
        "Dietas Personalizadas",
        "Reeducação Alimentar",
        "Nutrição Esportiva",
        "Acompanhamento",
      ],
      color: "text-slate-800",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Nossos <span className="text-yellow-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços médicos especializados, sempre com foco na excelência e no
            bem-estar dos nossos pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-500 bg-gray-50 py-1 px-3 rounded-full">
                      {feature}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-blue-700 text-slate-800 hover:bg-blue-700 hover:text-white"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
