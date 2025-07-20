// Datos personales del portafolio
// Modifica esta información con tus propios datos

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  profileImage: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ProgrammingLanguage {
  name: string;
  icon: string;
  description: string;
}

// PERSONALIZA ESTA INFORMACIÓN CON TUS PROPIOS DATOS
export const personalInfo: PersonalInfo = {
  name: "Juan Pérez Developer",
  title: "Desarrollador Full Stack",
  description: "Apasionado desarrollador con experiencia en tecnologías web modernas, especializado en React, TypeScript y Material Design. Me enfoco en crear aplicaciones web escalables y centradas en el usuario.",
  email: "juan.perez@ejemplo.com",
  phone: "+1 (555) 123-4567",
  location: "Madrid, España",
  github: "https://github.com/juanperez",
  linkedin: "https://linkedin.com/in/juanperez",
  profileImage: "/profile-photo.svg"
};

export const technicalSkills: Skill[] = [
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "TypeScript", level: 85, color: "#3178c6" },
  { name: "React", level: 90, color: "#61dafb" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "Python", level: 75, color: "#3776ab" },
  { name: "HTML5", level: 95, color: "#e34f26" },
  { name: "CSS3", level: 90, color: "#1572b6" },
  { name: "Material-UI", level: 85, color: "#0081cb" },
  { name: "MongoDB", level: 75, color: "#4DB33D" },
  { name: "Git", level: 85, color: "#F05032" },
  { name: "Docker", level: 70, color: "#2496ED" },
  { name: "AWS", level: 65, color: "#FF9900" },
];

export const softSkills: string[] = [
  "Trabajo en Equipo",
  "Comunicación Efectiva", 
  "Resolución de Problemas",
  "Adaptabilidad",
  "Liderazgo",
  "Pensamiento Crítico",
  "Gestión del Tiempo",
  "Aprendizaje Continuo",
  "Creatividad",
  "Responsabilidad"
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel administrativo. Implementada con arquitectura moderna y mejores prácticas.",
    technologies: ["React", "Node.js", "MongoDB", "Material-UI", "Stripe", "JWT"],
    image: "https://via.placeholder.com/400x250?text=E-commerce+Platform",
    github: "https://github.com/tuusuario/ecommerce-platform",
    demo: "https://tu-ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas colaborativa con funciones en tiempo real, notificaciones push y sincronización multi-dispositivo.",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI", "PWA"],
    image: "https://via.placeholder.com/400x250?text=Task+Manager",
    github: "https://github.com/tuusuario/task-manager",
    demo: "https://tu-task-manager.com",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard meteorológico interactivo con visualización de datos, mapas, gráficos históricos y predicciones climáticas avanzadas.",
    technologies: ["React", "D3.js", "Chart.js", "OpenWeather API", "Mapbox"],
    image: "https://via.placeholder.com/400x250?text=Weather+Dashboard",
    github: "https://github.com/tuusuario/weather-dashboard",
    demo: "https://tu-weather-app.com",
  },
  {
    title: "Portfolio Personal",
    description: "Sitio web personal responsive desarrollado con React y Material Design, optimizado para SEO y performance.",
    technologies: ["React", "TypeScript", "Material-UI", "Framer Motion"],
    image: "https://via.placeholder.com/400x250?text=Portfolio+Web",
    github: "https://github.com/tuusuario/portfolio",
    demo: "https://tu-portfolio.com",
  },
];

export const experiences: Experience[] = [
  {
    title: "Desarrollador Frontend Senior",
    company: "Tech Innovations Corp",
    period: "Enero 2022 - Presente",
    description: "Liderazgo técnico de un equipo de 4 desarrolladores en el desarrollo de aplicaciones web complejas. Implementación de arquitecturas escalables con React y TypeScript. Mejora del rendimiento de aplicaciones en un 40%."
  },
  {
    title: "Desarrollador Full Stack",
    company: "Digital Solutions StartUp",
    period: "Marzo 2020 - Diciembre 2021",
    description: "Desarrollo end-to-end de aplicaciones web usando stack MERN. Colaboración directa con el equipo de diseño UX/UI. Implementación de APIs RESTful y integración con servicios de terceros."
  },
  {
    title: "Desarrollador Frontend Junior",
    company: "Creative Web Agency",
    period: "Junio 2019 - Febrero 2020",
    description: "Desarrollo de sitios web responsive y aplicaciones web interactivas. Conversión de diseños PSD/Figma a código HTML/CSS/JavaScript. Optimización para múltiples navegadores y dispositivos."
  },
  {
    title: "Practicante de Desarrollo Web",
    company: "Local Tech Company",
    period: "Enero 2019 - Mayo 2019",
    description: "Aprendizaje de fundamentos de desarrollo web. Participación en proyectos menores de mantenimiento y actualización de sitios web. Introducción a frameworks modernos y metodologías ágiles."
  }
];

export const programmingLanguages: ProgrammingLanguage[] = [
  { 
    name: "JavaScript", 
    icon: "🟨", 
    description: "Lenguaje principal para desarrollo web frontend y backend"
  },
  { 
    name: "TypeScript", 
    icon: "🔷", 
    description: "JavaScript con tipado estático para proyectos escalables"
  },
  { 
    name: "Python", 
    icon: "🐍", 
    description: "Para desarrollo backend, APIs y análisis de datos"
  },
  { 
    name: "Java", 
    icon: "☕", 
    description: "Para aplicaciones empresariales y sistemas robustos"
  },
  { 
    name: "C#", 
    icon: "🟪", 
    description: "Desarrollo con .NET Framework y .NET Core"
  },
  { 
    name: "SQL", 
    icon: "🗄️", 
    description: "Para gestión y consulta de bases de datos relacionales"
  },
];

export const education = [
  {
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Universidad Tecnológica",
    period: "2015 - 2019",
    description: "Especialización en desarrollo de software y sistemas distribuidos"
  },
  {
    degree: "Certificación AWS Solutions Architect",
    institution: "Amazon Web Services", 
    period: "2021",
    description: "Certificación en arquitectura y servicios de AWS"
  },
  {
    degree: "React Developer Certification",
    institution: "Meta (Facebook)",
    period: "2020",
    description: "Certificación oficial en desarrollo con React"
  }
];

export const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Platform Associate",
  "Microsoft Azure Fundamentals",
  "React Developer Certification (Meta)",
  "Node.js Application Developer (OpenJS)",
  "MongoDB Certified Developer"
];
