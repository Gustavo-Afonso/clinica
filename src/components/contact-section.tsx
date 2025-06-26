import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      subInfo: "(11) 3333-3333",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@clinicaexcellence.com.br",
      subInfo: "agendamento@clinicaexcellence.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000 - Bela Vista",
      subInfo: "São Paulo - SP, 01310-100",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h às 18h",
      subInfo: "Sábado: 8h às 12h",
    },
  ]

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Entre em <span className="text-amber-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco para agendar sua consulta ou esclarecer suas
            dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <item.icon className="h-5 w-5 text-slate-800" />
                      </div>
                      <CardTitle className="text-lg text-slate-800">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="font-medium text-gray-800">{item.info}</p>
                    <p className="text-sm text-gray-600">{item.subInfo}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Mapa da localização</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  <Input placeholder="(11) 99999-9999" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">E-mail</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Especialidade</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent">
                  <option>Selecione uma especialidade</option>
                  <option>Cirurgia Plástica</option>
                  <option>Cirurgia Geral</option>
                  <option>Proctologia</option>
                  <option>Nutrição</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                <Textarea placeholder="Descreva como podemos ajudá-lo..." className="min-h-[120px]" />
              </div>

              <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
