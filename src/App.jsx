import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Code, Briefcase, GraduationCap, Award, ExternalLink, ChevronDown, FileText, Upload } from 'lucide-react';

const Portafolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);

/*Efecto del scroll al subir y bajar en la página
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
*/

  const personalInfo = {
    name: "JOSUÉ RAMOS VELÁSQUEZ",
    title: "Egresado en Ingeniería de Sistemas",
    email: "jarvelasquez03@gmail.com",
    telefono: "968-722-730",
    linkedin: "https://www.linkedin.com/in/jarvelasquez/",
    address: "San Martín de Porres, Lima",
    summary: "Egresado de Ingeniería de Sistemas con sólida base en análisis de datos, desarrollo de software y gestión de bases de datos. Experiencia en operaciones mineras y soporte técnico. Orientado a la optimización de procesos mediante herramientas como Power BI y SQL; además, manejo los lenguajes de programación Python y JavaScript."
  };

  const education = [
    {
      logo: "/public/UTP_logo.webp",
      institucion: "Universidad Tecnológica del Perú",
      estudios: "Ingeniería de Sistemas",
      period: "2018 - 2024",
      type: "superior"
    },
    {
      logo: "/public/Systematic_logo.webp",
      institucion: "SYSTEMATIC",
      estudios: "Diseño gráfico con CorelDraw",
      period: "Enero 2021 - Marzo 2021",
      type: "tecnica"
    },
    {
      logo: "/public/ITEC_logo.webp",
      institucion: "ITEC",
      estudios: "Modelamiento y diseño de Base de datos",
      period: "Diciembre 2023 - Marzo 2024",
      type: "tecnica"
    },
    {
      logo: "/public/IPN_logo.webp",
      institucion: "Instituto Peruano de Negocios",
      estudios: "Microsoft Power BI",
      period: "Enero 2026 - Febrero 2026",
      type: "tecnica"
    }
  ];

  const certifications = [
    { name: "Scrum Fundamentals", institucion: "SCRUMSTUDY", status: "Certificado", link: "/public/CERTIFICADO-SCRUM.pdf" },
    { name: "Microsoft Power BI", institucion: "IPN", status: "Certificado", link: "/public/certificacionIPN.pdf" },
    { name: "Corel Draw", institucion: "Systematic", status: "Certificado", link: "/public/CERTIFICADO-COREL-DRAW.pdf" },
    { name: "Ciberseguridad: Ethical Hacking", institucion: "OTI - UNI", status: "En curso" },
    { name: "Odoo Funcional y Técnico", institucion: "OTI - UNI", status: "En curso" },
    { name: "Machine Learning con Python + IA", institucion: "OTI - UNI", status: "En curso" },
    { name: "Programación en Python Intermedio + IA", institucion: "OTI - UNI", status: "Completado" }
  ];

  const experience = [
    {
      company: "AM CODE E.I.R.L.",
      role: "Desarrollador Web / Community Manager / Marketing",
      period: "Mayo 2025 - Actualidad",
      responsibilities: [
        "Desarrollo de interfaces de usuario utilizando React y Figma",
        "Gestión de redes sociales y contenido digital",
        "Desarrollo de campañas publicitarias"
      ],
      hasCertificate: true,
      pdfCertificado: "public/AM-CODE.pdf"
    },
    {
      company: "POP CAPITAL GROUP E.I.R.L.",
      role: "Practicante de Ingeniería de Sistemas",
      period: "Mayo 2025 - Agosto 2025",
      responsibilities: [
        "Diseño y desarrollo de módulos de software",
        "Colaboración en proyectos de programación",
        "Soporte técnico y documentación de sistemas"
      ],
      hasCertificate: true,
      pdfCertificado: "public/POP-Capital.pdf"
    },
    {
      company: "I.E. SAN JUAN",
      role: "Docente Particular",
      period: "Agosto 2025 - Octubre 2025",
      responsibilities: [
        "Clases de reforzamiento en matemáticas para secundaria"
      ],
      hasCertificate: false
    },
    {
      company: "COSFESA",
      role: "Ayudante Mecánico",
      period: "Marzo 2025 - Abril 2025",
      responsibilities: [
        "Mantenimiento preventivo en Minera Shouxin",
        "Mantenimiento de estructuras metálicas",
        "Trabajo en campo, almacén y taller"
      ],
      hasCertificate: false
    }
  ];

  const skills = [
    "Python", "JavaScript", "React", "SQL", "Power BI",
    "Java", "Git", "Figma", "Excel", "CorelDraw",
    "Adobe Premiere Pro", "Cisco Packet Tracer", "Bizagi",
    "Machine Learning", "Odoo", "Ethical Hacking"
  ];

  const projects = [
    {
      name: "MRI - Máquinas y Repuestos Industriales",
      description: "Sitio web para cotización y ventas de bombas y artefactos industriales. Desarrollado en WordPress con Elementor.",
      tech: ["WordPress", "Elementor", "PHP"],
      link: "https://mri-pe.com/",
      image: "public/MRI-PE.webp"
    },
    {
      name: "Madelly.pe",
      description: "Sitio web para venta de ropa femenina. Desarrollado en WordPress con Elementor y WooCommerce.",
      tech: ["WordPress", "Elementor", "PHP", "WooCommerce"],
      link: "https://madelly.pe",
      image: "public/Madelly.webp"
    },
    {
      name: "Bodapass.com",
      description: "Página web destinada a la creación de invitaciones digitales para bodas. Desarrollado con plantillas de WordPress y editado con Elementor.",
      tech: ["WordPress", "Elementor", "PHP"],
      link: "https://bodapass.com",
      image: "public/Bodapass.webp"
    },
    {
      name: "Worki360.com",
      description: "Creación de artículos para la ERP Worki360, enfocadas en el mejoramiento SEO. Desarrollado con JavaScript y Git.",
      tech: ["Git", "JavaScript", "SEO"],
      link: "https://www.worki360.com/",
      image: "public/Worki360.webp"
    }
  ];

  const ScrollReveal = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [delay]);

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Fondo espacial animado */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '4s', transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ background: '#66F5EC', animationDuration: '6s', transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '5s', transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <ScrollReveal>
              {/* Contenedor principal centrado */}
              <div className="flex flex-col items-center justify-center gap-8 mb-8 text-center">
                
                {/* Foto / Avatar */}
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl text-cyan-300">JR</div>
                  </div>
                </div>
                
                {/* Nombre y título siempre centrados */}
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-cyan-200">{personalInfo.title}</h2>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
                {personalInfo.summary}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="flex gap-6 items-center justify-center flex-wrap">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors">
                  <Mail size={20} />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.telefono}`} className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors">
                  <Phone size={20} />
                  <span>{personalInfo.telefono}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </ScrollReveal>
            
            <div className="mt-16 animate-bounce flex justify-center">
              <ChevronDown size={32} className="text-cyan-300" />
            </div>
          </div>
        </section>


        {/* Educación */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-12 flex items-center gap-3 text-cyan-300">
                <GraduationCap size={40} />
                Educación
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500 border-opacity-20 hover:border-opacity-50 transition-all hover:scale-105 shadow-lg 
                      flex items-center justify-between gap-4">
                    <div className='flex-1'>
                      <h3 className="text-2xl font-bold text-cyan-200 mb-2">{edu.institucion}</h3>
                      <p className="text-xl text-white mb-2">{edu.estudios}</p>
                      <p className="text-gray-400">{edu.period}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <img src={edu.logo} alt={edu.institucion} className="h-20 w-auto object-contain self-start rounded-xl"/>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-12 flex items-center gap-3 text-cyan-300">
                <Award size={40} />
                Certificaciones
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-5 border border-cyan-400/30 hover:border-opacity-60 transition-all shadow-xl">
                    
                    {/* Fila Superior: Icono + (Título y Estado) */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="text-white" size={24} />
                      </div>
                      
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-white leading-tight">{cert.name}</h3>
                        <span className={`inline-block mt-1 text-[10px] uppercase tracking-wider font-bold w-fit px-2 py-0.5 rounded-md ${
                          cert.status === 'Certificado' || cert.status === 'Completado' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>

                    {/* Cuadro de Previsualización */}
                    <div 
                      onClick={() => setSelectedCert(cert.link)} // Aquí va la ruta a tu PDF
                      className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 aspect-video bg-slate-800 flex items-center justify-center"
                    >
                      {/* thumb */}
                      <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/20 transition-colors z-10"></div>
                      <FileText size={32} className="text-cyan-300/50 group-hover:scale-110 transition-transform" />
                      <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={16} className="text-cyan-300" />
                      </div>
                      
                      {/* Texto de ayuda al hover */}
                      <p className="absolute z-20 text-[10px] text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity">
                        Clic para ver PDF
                      </p>
                    </div>
                    
                    <p className="text-cyan-200/70 text-sm mt-3">{cert.institution}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-12 flex items-center gap-3 text-cyan-300">
                <Briefcase size={40} />
                Experiencia Profesional
              </h2>
            </ScrollReveal>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500 border-opacity-20 hover:border-opacity-50 transition-all hover:translate-x-2 shadow-lg">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-xl text-cyan-300">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 bg-purple-500 bg-opacity-20 px-4 py-2 rounded-lg">{exp.period}</span>
                    </div>
                    
                    <div className={`${exp.hasCertificate ? 'grid md:grid-cols-2 gap-6' : ''}`}>
                      <div>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, ridx) => (
                            <li key={ridx} className="text-gray-300 flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {exp.hasCertificate && (
                        <div className="flex flex-col gap-3">
                          {/* Cuadro de previsualización simplificado (Estilo Certificaciones) */}
                          <div 
                            onClick={() => setSelectedCert(exp.pdfCertificado)}
                            className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 aspect-video bg-slate-800 flex items-center justify-center min-h-[180px]"
                          >
                            {/* Overlay y efectos */}
                            <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/20 transition-colors z-10"></div>
                            
                            <div className="flex flex-col items-center gap-2">
                              <FileText size={48} className="text-cyan-300/50 group-hover:scale-110 group-hover:text-cyan-300 transition-all" />
                              <p className="text-xs text-gray-400 group-hover:text-cyan-200 transition-colors">Ver Constancia Laboral</p>
                            </div>

                            <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                              <ExternalLink size={18} className="text-cyan-300" />
                            </div>
                            
                            {/* Texto flotante al pasar el mouse */}
                            <p className="absolute top-2 text-[10px] text-cyan-200/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                              Click para abrir PDF
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-12 flex items-center gap-3 text-cyan-300">
                <Code size={40} />
                Habilidades Técnicas
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 bg-opacity-20 backdrop-blur-sm rounded-full text-white border border-cyan-400 border-opacity-30 hover:border-opacity-60 transition-all hover:scale-110 shadow-lg"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Proyectos */}
        <section className="py-20 px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-12 flex items-center gap-3 text-cyan-300">
                <Code size={40} />
                Proyectos en los que participé
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg rounded-2xl border border-cyan-400/30 hover:border-opacity-60 transition-all hover:scale-[1.02] shadow-xl group flex flex-col h-full overflow-hidden">
                  
                  {/* Miniatura */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative h-48 w-full overflow-hidden block"
                  >
                    {/* Overlay de hover */}
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-colors z-10 flex items-center justify-center">
                      <ExternalLink size={32} className="text-white opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100" />
                    </div>
                    
                    {/* Imagen del proyecto */}
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </a>

                  {/* Contenido de la Tarjeta */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tecnologías y Link (Empujados al final) */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, tidx) => (
                          <span key={tidx} className="text-[10px] px-2 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-cyan-500 border-opacity-20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">© 2026 Josué Ramos Velásquez. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div> {/* Cierre de relative z-10 */}

      {/* MODAL */}
      <Modal 
        isOpen={!!selectedCert} 
        onClose={() => setSelectedCert(null)} 
        url={selectedCert} 
      />
    </div>
  );
};




const Modal = ({ isOpen, onClose, url }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-md">
      <div className="bg-slate-900 border border-cyan-500 rounded-2xl w-full max-w-5xl h-[90vh] relative overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-slate-800">
          <h3 className="text-cyan-300 font-bold">Vista previa del Certificado</h3>
          <button 
            onClick={onClose}
            className="bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-full transition-all"
          >
            <ChevronDown size={24} className="rotate-180" /> {/* O usa una X simple */}
          </button>
        </div>
        <div className="flex-1 bg-white">
          <iframe 
            src={`${url}#toolbar=0`} 
            className="w-full h-full" 
            title="Certificado"
          ></iframe>
        </div>
      </div>
    </div>
  );
};



export default Portafolio;