import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Carlos Silva",
      specialty: "Cirurgia Plástica",
      credentials: "CRM 12345-SP",
      experience: "15 anos de experiência",
      specializations: ["Rinoplastia", "Mamoplastia", "Lipoaspiração"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dra. Ana Santos",
      specialty: "Cirurgia Geral",
      credentials: "CRM 67890-SP",
      experience: "12 anos de experiência",
      specializations: ["Laparoscopia", "Hérnias", "Vesícula"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Roberto Lima",
      specialty: "Proctologia",
      credentials: "CRM 11111-SP",
      experience: "18 anos de experiência",
      specializations: ["Hemorroidas", "Colonoscopia", "Fístulas"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dra. Maria Oliveira",
      specialty: "Nutrição",
      credentials: "CRN 2222-SP",
      experience: "10 anos de experiência",
      specializations: ["Nutrição Clínica", "Esportiva", "Emagrecimento"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="medicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Nossa <span className="text-amber-600">Equipe Médica</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais altamente qualificados e experientes, dedicados a oferecer o melhor cuidado médico com
            excelência e humanização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative">
              <Image
            src="/foto.png" // essa imagem precisa estar na pasta /public
            alt="Imagem 1"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-600 text-white">{doctor.specialty}</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-700">{doctor.name}</h3>
                  <p className="text-sm text-gray-500">{doctor.credentials}</p>
                  <p className="text-sm text-amber-600 font-medium">{doctor.experience}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Especializações:</h4>
                  <div className="flex flex-wrap gap-1">
                    {doctor.specializations.map((spec, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-blue-700 text-blue-700">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
