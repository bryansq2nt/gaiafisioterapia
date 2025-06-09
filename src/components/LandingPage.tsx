// LandingPage.tsx

"use client"; // Necesario para animaciones

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import {
  Phone,
  Instagram, // Importado para usar en ContactLink
  Facebook,  // Importado para usar en ContactLink
  MessageCircle, // Representa TikTok, importado para ContactLink
  MapPin,
  Stethoscope,
  Dumbbell,
  Leaf,
  Baby,
  Bone,
  Waves,
  Mail // <-- Se ha añadido este icono
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

// --- INICIO: Estilos CSS de la marca ---
const BrandStyles = () => (
  <style jsx global>{`
    :root {
      --brand-purple: #5e3a9c;
      --brand-purple-dark: #4a2e7c;
      --brand-purple-light: #f6f4fa;
      --brand-pink: #e94a81;
      --brand-pink-dark: #d93a70;
      --brand-pink-light: #fef0f4;
      --brand-cyan: #4ed3d3;
    }
    .bg-brand-purple-light { background-color: var(--brand-purple-light); }
    .text-brand-purple-dark { color: var(--brand-purple-dark); }
    .text-brand-pink { color: var(--brand-pink); }
    .bg-brand-pink { background-color: var(--brand-pink); }
    .bg-brand-pink-light { background-color: var(--brand-pink-light); }
    .shadow-brand-pink-glow { box-shadow: 0 10px 15px -3px rgba(233, 74, 129, 0.2), 0 4px 6px -4px rgba(233, 74, 129, 0.2); }
    .hover-shadow-brand-pink-glow:hover { box-shadow: 0 20px 25px -5px rgba(233, 74, 129, 0.3), 0 8px 10px -6px rgba(233, 74, 129, 0.3); }
    .hover-bg-brand-pink-dark:hover { background-color: var(--brand-pink-dark); }
    .hover-shadow-brand-purple-glow:hover { box-shadow: 0 20px 25px -5px rgba(94, 58, 156, 0.1), 0 8px 10px -6px rgba(94, 58, 156, 0.1); }
    .bg-brand-gradient { background-image: linear-gradient(to bottom right, var(--brand-purple), var(--brand-pink)); }
    .border-brand-purple-10 { border-color: rgba(94, 58, 156, 0.1); }
    .hover-bg-brand-pink-20:hover { background-color: rgba(233, 74, 129, 0.2); }
  `}</style>
);
// --- FIN: Estilos CSS de la marca ---

// INTERFAZ CORREGIDA para ESLint/TypeScript
interface ContactLinkProps {
  href: string;
  icon: React.ReactNode; // Acepta componentes de icono, no solo strings
  platform: string;
  handle: string;
  bgColorClass: string;
  textColorClass: string;
  hoverColorClass: string;
}

// COMPONENTE CORREGIDO para aplicar clases hover correctamente
const ContactLink: React.FC<ContactLinkProps> = ({ 
  href, 
  icon, 
  platform, 
  handle, 
  bgColorClass, 
  textColorClass, 
  hoverColorClass 
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center p-4 rounded-lg transition-all duration-300 ${bgColorClass} ${hoverColorClass} hover:shadow-lg hover:scale-105`}
  >
    <div className={`mr-4 ${textColorClass}`}>{icon}</div>
    <div>
      <p className={`font-bold ${textColorClass}`}>{platform}</p>
      <p className={`text-sm ${textColorClass} opacity-90`}>{handle}</p>
    </div>
  </a>
);

const LandingPage: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  const services = [
    { icon: <Stethoscope size={28} />, title: 'Terapia física a domicilio' },
    { icon: <Leaf size={28} />, title: 'Terapia ocupacional especializada' },
    { icon: <Bone size={28} />, title: 'Lesiones musculares y articulares' },
    { icon: <Dumbbell size={28} />, title: 'Pilates terapéutico e hipopresivos' },
    { icon: <Baby size={28} />, title: 'Osteopatía pediátrica y deportiva' },
    { icon: <Waves size={28} />, title: 'Sesiones relajantes y corrección postural' }
  ];

  return (
    <>
      <BrandStyles />
      <div className={`min-h-screen bg-brand-purple-light font-sans text-gray-800 ${inter.className}`}>
        
        {/* === SECCIÓN HERO CORREGIDA === */}
        <header className="relative pt-28 pb-24 px-6 text-center overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-brand-pink to-brand-cyan rounded-full opacity-10" style={{ filter: 'blur(48px)' }}></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-brand-purple to-brand-cyan rounded-full opacity-10" style={{ filter: 'blur(48px)' }}></div>
          
          <div className="relative z-1 max-w-4xl mx-auto">
            {/* LOGO MOVIDO AQUÍ, CENTRADO Y CON TAMAÑO ADECUADO */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <Image
                src="/logo-gaia.png" // Asegúrate que el logo está en /public
                alt="Logo de Gaia Fisioterapia"
                width={350} // Un tamaño más balanceado
                height={57} // Mantener la proporción
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-brand-purple-dark tracking-tight"
            >
              Fisioterapia y Terapia Ocupacional a Domicilio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-brand-purple-dark/80"
            >
              Recupera tu bienestar, movilidad y calidad de vida en la comodidad de tu hogar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 120 }}
              className="mt-10"
            >
              <a
                href="https://wa.me/50379944972"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand-pink text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-brand-pink-glow hover-shadow-brand-pink-glow hover-bg-brand-pink-dark transform hover:-translate-y-1"
              >
                <Phone className="mr-3" size={20} />
                Agendar mi Cita
              </a>
            </motion.div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          
          <motion.section 
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-purple-dark tracking-tight">Nuestros Servicios</h2>
              <p className="mt-2 text-lg text-gray-600">Un enfoque integral para tu recuperación.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover-shadow-brand-purple-glow hover:-translate-y-2 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="bg-brand-pink-light text-brand-pink rounded-full p-4 mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-purple-dark mb-2">{service.title}</h3>
                </div>
              ))}
            </div>
          </motion.section>
          
          <motion.section 
            className="text-center bg-brand-gradient text-white rounded-2xl py-20 px-6 mb-24 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <MapPin size={48} className="mx-auto mb-4"/>
            <h2 className="text-3xl font-bold tracking-tight">Llegamos hasta ti</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto text-white/90">
              Atendemos en <strong>Santa Ana, Sonsonate y alrededores.</strong>
              <br />
              Disponibilidad flexible, incluyendo fines de semana, para adaptarnos a tu vida.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-purple-dark tracking-tight">Conecta con Nosotros</h2>
              <p className="mt-2 text-lg text-gray-600">Estamos listos para ayudarte a empezar tu camino hacia el bienestar.</p>
            </div>
            {/* SECCIÓN DE CONTACTO CORREGIDA USANDO ICONOS */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactLink 
                href="https://wa.me/50379944972"
                icon={<Phone size={24} />}
                platform="WhatsApp"
                handle="+503 7994 4972"
                bgColorClass="bg-green-100"
                textColorClass="text-green-800"
                hoverColorClass="hover:bg-green-200"
              />
              <ContactLink 
                href="https://www.instagram.com/gaia.fisioterapia.sv/?hl=en"
                icon={<Instagram size={24} />}
                platform="Instagram"
                handle="@gaia.fisioterapia.sv"
                bgColorClass="bg-brand-pink-light"
                textColorClass="text-brand-pink"
                hoverColorClass="hover-bg-brand-pink-20"
              />
              <ContactLink 
                href="https://www.facebook.com/profile.php?id=100090522072409"
                icon={<Facebook size={24} />}
                platform="Facebook"
                handle="Gaia Fisioterapia"
                bgColorClass="bg-blue-100"
                textColorClass="text-blue-800"
                hoverColorClass="hover:bg-blue-200"
              />
              <ContactLink 
                href="https://www.tiktok.com/@gaia.fisioterapia"
                icon={<MessageCircle size={24} />}
                platform="TikTok"
                handle="@gaia.fisioterapia"
                bgColorClass="bg-gray-200"
                textColorClass="text-gray-800"
                hoverColorClass="hover:bg-gray-300"
              />
            </div>
          </motion.section>

        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-brand-purple-10">
          <div className="max-w-7xl mx-auto py-12 px-6 text-center">
            {/* Sección de Créditos del Desarrollador */}
            <div className="mb-8">
              <p className="text-sm text-gray-500">
                Experiencia digital creada con dedicación por
              </p>
              <p className="text-lg font-semibold text-brand-purple-dark mt-1">
                Bryan Murgas
              </p>
              <div className="mt-4 flex justify-center items-center gap-6 text-gray-600">
                <a 
                  href="mailto:bryan.murgas@hotmail.com" 
                  className="flex items-center gap-2 hover:text-brand-pink transition-colors duration-300"
                  aria-label="Enviar correo a Bryan Murgas"
                >
                  <Mail size={18} />
                  <span className="text-sm">Email</span>
                </a>
                <span className="text-gray-300">|</span>
                <a 
                  href="https://wa.me/15713761694" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-pink transition-colors duration-300"
                  aria-label="Contactar a Bryan Murgas por WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
              <p className="text-md text-brand-pink mt-4 font-semibold">
                ¿Tienes un proyecto en mente? ¡Hablemos!
              </p>
            </div>

            {/* Línea divisoria sutil */}
            <hr className="w-24 mx-auto border-gray-200" />

            {/* Copyright de Gaia */}
            <div className="mt-8">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Gaia Fisioterapia. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;