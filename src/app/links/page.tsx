"use client";

import { useState } from "react";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  Sparkles,
  Heart,
  Send,
  Link as LinkIcon,
  MapPin, // Added for location
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";

export default function LinktreePage() {
  const [email, setEmail] = useState("");

  // Clinic data
  const clinic = {
    name: "Nuvance Estética",
    bio: "Realce sua beleza natural com cuidado e tecnologia avançada ✨",
    profileImage: "/logo.jpg",
    location: "Rua das Flores, 123 - Centro, São Paulo - SP", // Added location
    links: [
      {
        title: "Agende sua Avaliação Gratuita",
        url: "https://wa.me/5511999999999",
        icon: <Phone className="w-5 h-5" />,
      },
      {
        title: "Nosso Site",
        url: "https://bellavittaestetica.com.br",
        icon: <LinkIcon className="w-5 h-5" />,
      },
      {
        title: "Instagram",
        url: "https://instagram.com/bellavittaestetica",
        icon: <Instagram className="w-5 h-5" />,
      },
      {
        title: "E-book: Segredos da Pele Perfeita",
        url: "https://bellavittaestetica.com.br/ebook",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        title: "Fale Conosco",
        url: "mailto:contato@bellavittaestetica.com.br",
        icon: <Mail className="w-5 h-5" />,
      },
    ],
    socials: [
      {
        name: "Instagram",
        url: "https://instagram.com/bellavittaestetica",
        icon: <Instagram className="w-6 h-6" />,
      },
      {
        name: "Facebook",
        url: "https://facebook.com/bellavittaestetica",
        icon: <Facebook className="w-6 h-6" />,
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/5511999999999",
        icon: <Phone className="w-6 h-6" />,
      },
    ],
  };

  // Color palette (customizable)
  const colors = {
    primary: "bg-purple-600",
    primaryHover: "hover:bg-purple-700",
    text: "text-gray-800",
    background: "bg-white",
    accent: "text-purple-600",
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <>
      <Head>
        <title>BellaVitta Estética | Links</title>
        <meta
          name="description"
          content="Acesse todos os links da BellaVitta Estética Avançada: agendamentos, redes sociais, e-books e mais!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${colors.background} min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 font-poppins`}
      >
        {/* Profile Section */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4">
            <Image
              src={clinic.profileImage}
              alt="BellaVitta Profile"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-purple-100"
            />
          </div>
          <h1
            className={`text-2xl sm:text-3xl font-bold ${colors.text} bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent`}
          >
            {clinic.name}
          </h1>
          <p className={`mt-2 text-sm sm:text-base ${colors.text} max-w-xs mx-auto`}>{clinic.bio}</p>
        </div>

        {/* Links Section */}
        <div className="w-full max-w-md mt-8 space-y-4">
          {clinic.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.primary} ${colors.primaryHover} text-white font-medium py-3 px-6 rounded-xl flex items-center justify-between shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center space-x-3">
                {link.icon}
                <span>{link.title}</span>
              </div>
              <Heart className="w-5 h-5 text-pink-300" />
            </a>
          ))}
        </div>

        {/* Email Collection Form */}
        <div className="w-full max-w-md mt-8">
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row gap-2 bg-gray-100 p-4 rounded-xl shadow-md"
          >
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className={`${colors.primary} ${colors.primaryHover} text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <Send className="w-5 h-5" />
              <span>Assinar</span>
            </button>
          </form>
          <p className={`mt-2 text-xs text-gray-500 text-center`}>
            Receba dicas exclusivas de beleza e promoções!
          </p>
        </div>

        {/* Location Section */}
        <div className="w-full max-w-md mt-8">
          <div
            className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <MapPin className={`w-6 h-6 ${colors.accent}`} />
            <div className="text-center">
              <p className={`text-sm font-semibold ${colors.text}`}>Nosso Endereço</p>
              <p className="text-sm text-gray-600">{clinic.location}</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 flex space-x-6">
          {clinic.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.accent} hover:text-purple-800 p-2 rounded-full bg-purple-50 hover:bg-purple-100 shadow-sm transform hover:scale-110 transition-all duration-300`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 BellaVitta Estética Avançada.</p>
        </footer>
      </div>
    </>
  );
}