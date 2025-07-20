# Portfolio Personal - React + TypeScript + Material-UI

Este proyecto es un portfolio personal desarrollado con React, TypeScript y Material-UI, que incluye un sistema completo de pruebas unitarias.

## Características Principales

- ✅ **Información Personal Completa**: Foto, nombre, teléfono, email, ubicación
- ✅ **Habilidades Técnicas**: Más de 5 habilidades con niveles y colores
- ✅ **Proyectos**: Mínimo 3 proyectos con descripciones y tecnologías
- ✅ **Responsive Design**: Adaptable a diferentes dispositivos
- ✅ **Modo Oscuro/Claro**: Tema personalizable
- ✅ **Pruebas Unitarias**: Cobertura completa con Jest y React Testing Library

## Requisitos Validados por Pruebas

### 📋 Validaciones de Datos Personales:
- ✅ **Fotografía**: Formato de imagen cargado correctamente desde `/public`
- ✅ **Número de teléfono**: Formato válido con validación regex
- ✅ **Nombres y apellidos**: Nombre completo con mínimo 2 palabras
- ✅ **Email**: Formato válido con validación regex
- ✅ **Información adicional**: Título, descripción, ubicación, redes sociales

### 🛠️ Validaciones de Habilidades:
- ✅ **Mínimo 5 habilidades técnicas** con estructura completa
- ✅ **Niveles válidos** (1-100) y colores hex
- ✅ **Diversidad tecnológica** verificada

### 📁 Validaciones de Proyectos:
- ✅ **Mínimo 3 proyectos** con información completa
- ✅ **Descripciones detalladas** (+20 caracteres)
- ✅ **Tecnologías diversas** por proyecto
- ✅ **URLs válidas** para GitHub y demos

## Scripts Disponibles

### `npm start`
Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3010](http://localhost:3010) para verla en el navegador.

### `npm test`
Lanza las pruebas unitarias en modo watch.\
Incluye pruebas para validación de datos y componentes.

### `npm run test:coverage`
Ejecuta las pruebas con reporte de cobertura.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.

## 🧪 Sistema de Pruebas

Este proyecto incluye un sistema completo de pruebas unitarias que valida:

### **Archivos de Prueba:**
- `src/data/portfolioData.test.ts` - Validaciones de datos
- `src/components/Portfolio.test.tsx` - Pruebas del componente principal

### **Categorías de Pruebas:**
1. **Datos Personales**: Validación completa de información personal
2. **Habilidades Técnicas**: Estructura y cantidad mínima
3. **Proyectos**: Contenido y enlaces válidos
4. **Renderizado**: Componentes se muestran correctamente
5. **Interactividad**: Funcionalidades como cambio de tema
6. **Accesibilidad**: Navegación y etiquetas apropiadas

### **Comandos de Prueba:**
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con cobertura
npm test -- --coverage

# Ejecutar pruebas en modo watch
npm test -- --watch

# Ejecutar solo pruebas de datos
npm test -- --testPathPattern=portfolioData.test.ts

# Ejecutar solo pruebas de componentes
npm test -- --testPathPattern=Portfolio.test.tsx
```

## 🤖 Uso de GitHub Copilot en el Desarrollo

### **Sugerencias Útiles de IA Implementadas:**

1. **Estructura de Pruebas**: Copilot sugirió patrones de pruebas Jest más robustos
2. **Validaciones Regex**: Generó expresiones regulares para email y teléfono
3. **Testing Library Queries**: Propuso métodos más efectivos para encontrar elementos
4. **Casos Edge**: Sugirió pruebas adicionales para validación de URLs e imágenes
5. **Mocks Avanzados**: Ayudó con mocks para APIs del navegador (IntersectionObserver, ResizeObserver)
6. **Assertions Detalladas**: Propuso validaciones más específicas para accesibilidad

### **Adaptaciones Realizadas:**
- Ajustamos las sugerencias de Copilot para usar Material-UI específicamente
- Modificamos las validaciones para trabajar con datos mock locales
- Personalizamos los tests de accesibilidad para nuestro diseño específico
- Adaptamos las pruebas de responsive design para nuestros breakpoints

## 📦 Tecnologías Utilizadas

- **React** 19.1.0
- **TypeScript** 4.9.5
- **Material-UI** 7.2.0
- **Jest** (incluido con React Scripts)
- **React Testing Library** 16.3.0
- **React Scripts** 5.0.1

## 🚀 Personalización

Para personalizar el portfolio con tu información:

1. Edita `src/data/portfolioData.ts` con tus datos
2. Reemplaza las imágenes en `public/` con tus fotos
3. Ejecuta las pruebas para validar que todo esté correcto:
   ```bash
   npm test
   ```
4. Si las pruebas pasan, tu portfolio está listo

## 📄 Estructura del Proyecto

```
src/
├── components/
│   ├── Portfolio.tsx          # Componente principal
│   └── Portfolio.test.tsx     # Pruebas del componente
├── data/
│   ├── portfolioData.ts       # Datos del portfolio
│   └── portfolioData.test.ts  # Pruebas de validación de datos
├── App.tsx                    # Aplicación principal
└── setupTests.ts              # Configuración de pruebas

public/
├── profile-photo.svg          # Imagen de perfil principal
├── profile-avatar.svg         # Imagen alternativa
└── ...                        # Otros assets públicos
```

## 📊 Cobertura de Pruebas

Las pruebas cubren:
- ✅ 100% validación de datos requeridos
- ✅ Renderizado de componentes principales
- ✅ Interacciones del usuario
- ✅ Accesibilidad básica
- ✅ Responsive design
- ✅ Enlaces externos y navegación

---

**Desarrollado con ❤️ usando React + TypeScript + Material-UI**

### Información Original de Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Para más información sobre Create React App, consulta la [documentación oficial](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
