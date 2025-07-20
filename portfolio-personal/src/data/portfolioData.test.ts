/**
 * Pruebas unitarias para validar los datos del portfolio
 * 
 * Este archivo contiene pruebas que validan los requisitos mínimos del portfolio:
 * - Datos personales completos (fotografía, teléfono, nombres)
 * - Al menos 5 habilidades técnicas
 * - Al menos 3 proyectos
 * 
 * Nota sobre AI/Copilot: Se utilizó GitHub Copilot para generar la estructura base
 * de las pruebas y sugerir casos de prueba adicionales para mejorar la cobertura.
 * Las sugerencias fueron especialmente útiles para:
 * - Generar assertions detalladas para validación de URLs e imágenes
 * - Sugerir casos edge para validación de formatos de teléfono
 * - Proponer pruebas adicionales para validar la consistencia de datos
 */

import { 
  personalInfo, 
  technicalSkills, 
  projects, 
  softSkills,
  experiences,
  programmingLanguages 
} from '../data/portfolioData';

describe('Portfolio Data Validation', () => {
  
  /**
   * Pruebas para datos personales
   * Valida que toda la información personal requerida esté presente y sea válida
   */
  describe('Personal Information Tests', () => {
    
    test('should have complete personal information', () => {
      expect(personalInfo).toBeDefined();
      expect(personalInfo.name).toBeDefined();
      expect(personalInfo.email).toBeDefined();
      expect(personalInfo.phone).toBeDefined();
      expect(personalInfo.profileImage).toBeDefined();
    });

    test('should have valid full name (nombres y apellidos)', () => {
      expect(personalInfo.name).toBeTruthy();
      expect(typeof personalInfo.name).toBe('string');
      expect(personalInfo.name.length).toBeGreaterThan(3);
      
      // Valida que contenga al menos 2 palabras (nombre y apellido)
      const nameParts = personalInfo.name.trim().split(/\s+/);
      expect(nameParts.length).toBeGreaterThanOrEqual(2);
    });

    test('should have valid phone number', () => {
      expect(personalInfo.phone).toBeTruthy();
      expect(typeof personalInfo.phone).toBe('string');
      
      // Valida formato de teléfono (debe contener números)
      const phoneRegex = /[\d\s\-\+\(\)]/;
      expect(phoneRegex.test(personalInfo.phone)).toBe(true);
      expect(personalInfo.phone.length).toBeGreaterThanOrEqual(10);
    });

    test('should have valid profile image (fotografía)', () => {
      expect(personalInfo.profileImage).toBeTruthy();
      expect(typeof personalInfo.profileImage).toBe('string');
      
      // Valida que sea una URL válida o ruta de imagen
      const isValidImagePath = 
        personalInfo.profileImage.startsWith('http') || 
        personalInfo.profileImage.startsWith('/') ||
        personalInfo.profileImage.startsWith('./');
      
      expect(isValidImagePath).toBe(true);
      
      // Valida extensión de imagen (opcional pero recomendado)
      const imageExtensions = /\.(jpg|jpeg|png|gif|svg|webp)$/i;
      const hasImageExtension = imageExtensions.test(personalInfo.profileImage);
      expect(hasImageExtension).toBe(true);
    });

    test('should have valid email format', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(personalInfo.email)).toBe(true);
    });

    test('should have additional required personal fields', () => {
      expect(personalInfo.title).toBeTruthy();
      expect(personalInfo.description).toBeTruthy();
      expect(personalInfo.location).toBeTruthy();
      expect(personalInfo.github).toBeTruthy();
      expect(personalInfo.linkedin).toBeTruthy();
    });
  });

  /**
   * Pruebas para habilidades técnicas
   * Valida que haya al menos 5 habilidades con la estructura correcta
   */
  describe('Technical Skills Tests', () => {
    
    test('should have at least 5 technical skills', () => {
      expect(Array.isArray(technicalSkills)).toBe(true);
      expect(technicalSkills.length).toBeGreaterThanOrEqual(5);
    });

    test('should have valid skill structure', () => {
      technicalSkills.forEach((skill, index) => {
        expect(skill).toBeDefined();
        expect(skill.name).toBeTruthy();
        expect(typeof skill.name).toBe('string');
        expect(typeof skill.level).toBe('number');
        expect(skill.level).toBeGreaterThan(0);
        expect(skill.level).toBeLessThanOrEqual(100);
        expect(skill.color).toBeTruthy();
        expect(typeof skill.color).toBe('string');
      });
    });

    test('should have diverse skill categories', () => {
      const skillNames = technicalSkills.map(skill => skill.name.toLowerCase());
      
      // Verifica que incluya diferentes tipos de habilidades
      const hasJavaScript = skillNames.some(name => name.includes('javascript') || name.includes('js'));
      const hasReact = skillNames.some(name => name.includes('react'));
      const hasBackend = skillNames.some(name => 
        name.includes('node') || name.includes('python') || name.includes('backend')
      );
      
      expect(hasJavaScript || hasReact).toBe(true);
    });
  });

  /**
   * Pruebas para proyectos
   * Valida que haya al menos 3 proyectos con información completa
   */
  describe('Projects Tests', () => {
    
    test('should have at least 3 projects', () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThanOrEqual(3);
    });

    test('should have complete project information', () => {
      projects.forEach((project, index) => {
        expect(project.title).toBeTruthy();
        expect(typeof project.title).toBe('string');
        
        expect(project.description).toBeTruthy();
        expect(typeof project.description).toBe('string');
        expect(project.description.length).toBeGreaterThan(20);
        
        expect(Array.isArray(project.technologies)).toBe(true);
        expect(project.technologies.length).toBeGreaterThan(0);
        
        expect(project.image).toBeTruthy();
        expect(typeof project.image).toBe('string');
        
        expect(project.github).toBeTruthy();
        expect(typeof project.github).toBe('string');
        
        expect(project.demo).toBeTruthy();
        expect(typeof project.demo).toBe('string');
      });
    });

    test('should have valid project URLs', () => {
      projects.forEach((project) => {
        // Valida formato de URL para GitHub
        expect(project.github.startsWith('http') || project.github.startsWith('/')).toBe(true);
        
        // Valida formato de URL para demo
        expect(project.demo.startsWith('http') || project.demo.startsWith('/')).toBe(true);
      });
    });

    test('should have diverse technologies across projects', () => {
      const allTechnologies = projects.flatMap(project => project.technologies);
      const uniqueTechnologies = Array.from(new Set(allTechnologies));
      
      // Verifica diversidad tecnológica
      expect(uniqueTechnologies.length).toBeGreaterThanOrEqual(5);
    });
  });

  /**
   * Pruebas adicionales para completitud del portfolio
   */
  describe('Additional Portfolio Completeness Tests', () => {
    
    test('should have soft skills defined', () => {
      expect(Array.isArray(softSkills)).toBe(true);
      expect(softSkills.length).toBeGreaterThan(0);
    });

    test('should have work experience', () => {
      expect(Array.isArray(experiences)).toBe(true);
      expect(experiences.length).toBeGreaterThan(0);
      
      experiences.forEach((experience) => {
        expect(experience.title).toBeTruthy();
        expect(experience.company).toBeTruthy();
        expect(experience.period).toBeTruthy();
        expect(experience.description).toBeTruthy();
      });
    });

    test('should have programming languages', () => {
      expect(Array.isArray(programmingLanguages)).toBe(true);
      expect(programmingLanguages.length).toBeGreaterThan(0);
      
      programmingLanguages.forEach((language) => {
        expect(language.name).toBeTruthy();
        expect(language.icon).toBeTruthy();
        expect(language.description).toBeTruthy();
      });
    });
  });

  /**
   * Pruebas de integridad y consistencia
   * Valida que los datos sean coherentes entre sí
   */
  describe('Data Integrity Tests', () => {
    
    test('should have consistent skill levels', () => {
      const averageSkillLevel = technicalSkills.reduce((sum, skill) => sum + skill.level, 0) / technicalSkills.length;
      expect(averageSkillLevel).toBeGreaterThan(50); // Nivel promedio razonable
    });

    test('should have realistic project count vs experience', () => {
      // Si hay experiencia laboral, debería haber proyectos
      if (experiences.length > 0) {
        expect(projects.length).toBeGreaterThan(0);
      }
    });

    test('should have valid color codes for skills', () => {
      technicalSkills.forEach((skill) => {
        // Valida que sea un color hex válido
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        expect(hexColorRegex.test(skill.color)).toBe(true);
      });
    });
  });
});

/**
 * Pruebas de componentes (opcional - para testing más avanzado)
 */
describe('Portfolio Component Integration', () => {
  
  test('should export all required data modules', () => {
    expect(personalInfo).toBeDefined();
    expect(technicalSkills).toBeDefined();
    expect(projects).toBeDefined();
    expect(softSkills).toBeDefined();
    expect(experiences).toBeDefined();
    expect(programmingLanguages).toBeDefined();
  });

  test('should have data suitable for portfolio display', () => {
    // Verifica que los datos son apropiados para mostrar en un portfolio
    expect(personalInfo.name.length).toBeLessThan(50); // Nombre no demasiado largo
    expect(personalInfo.title.length).toBeLessThan(100); // Título conciso
    
    projects.forEach((project) => {
      expect(project.title.length).toBeLessThan(100); // Títulos de proyecto concisos
      expect(project.technologies.length).toBeLessThan(10); // Lista de tecnologías manejable
    });
  });
});
