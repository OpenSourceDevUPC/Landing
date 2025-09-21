# GeoPs Landing Page

<div align="center">
  <img src="public/images/logo.png" alt="GeoPs Logo" width="200">
  
  **Tu plataforma de descuentos basada en geolocalización**
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green?style=flat-square)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
</div>

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Responsive Design](#responsive-design)
- [Componentes Principales](#componentes-principales)
- [Contribución](#contribución)
- [Equipo](#equipo)
- [Licencia](#licencia)

## Descripción

**GeoPs (Geo Publicity Service)** es una plataforma innovadora desarrollada por estudiantes de Ingeniería de Software en Perú que conecta consumidores con negocios locales mediante geolocalización inteligente. La landing page presenta una interfaz moderna y completamente responsive que promociona los servicios de descuentos y ofertas basados en ubicación.

### Propósito

- **Para Consumidores**: Acceder a descuentos exclusivos en restaurantes, entretenimiento, salud y bienestar cerca de su ubicación
- **Para Negocios**: Promocionar productos y servicios a clientes locales mediante geolocalización y estadísticas de marketing

## Características

### Funcionalidades Principales

- Diseño Responsive: Adaptable a dispositivos móviles, tablets y desktop
- Navegación Móvil: Menú hamburguesa con animaciones suaves
- Carrusel Interactivo: Múltiples carruseles con indicadores y navegación
- FAQ Expandible: Sección de preguntas frecuentes con animaciones
- Geolocalización Visual: Representación de servicios basados en ubicación
- Secciones de Planes: Comparación clara entre planes gratuito y premium
- Marcas Aliadas: Showcase de empresas que confían en la plataforma
- Optimización SEO: Estructura semántica y meta tags apropiados

### Características de Diseño

- **Paleta de Colores**: Tema principal en tonos morados (#8C4DCC)
- **Tipografía**: Sistema de fuentes moderno y legible
- **Iconografía**: Íconos SVG y PNG optimizados
- **Animaciones**: Transiciones suaves y micro-interacciones
- **Grid System**: Layout flexible con CSS Grid y Flexbox

## Tecnologías Utilizadas

### Frontend Core

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) **HTML5**: Estructura semántica y accesible
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) **CSS3**: Estilos modernos con Custom Properties
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **Vanilla JavaScript**: Interactividad sin dependencias

### Metodologías y Patrones

- **Mobile-First Design**: Enfoque responsive desde dispositivos móviles
- **CSS Grid & Flexbox**: Layout moderno y flexible
- **BEM Methodology**: Nomenclatura de clases CSS estructurada
- **Semantic HTML**: Estructura accesible y SEO-friendly
- **Progressive Enhancement**: Funcionalidad básica sin JavaScript

### Herramientas de Desarrollo

- **Version Control**: Git & GitHub
- **Code Organization**: Estructura modular de archivos
- **Asset Optimization**: Imágenes optimizadas para web

## Estructura del Proyecto

```bash
Landing/
├── index.html                 # Página principal
├── README.md                 # Documentación del proyecto
├── public/                   # Directorio de assets públicos
│   ├── css/
│   │   └── styles.css        # Estilos principales
│   ├── js/
│   │   └── script.js         # Funcionalidad JavaScript
│   └── images/               # Assets de imágenes
│       ├── logo.png          # Logo principal
│       ├── brand-logos/      # Logos de marcas aliadas
│       ├── carousel/         # Imágenes de carruseles
│       ├── icons/            # Iconografía del sitio
│       └── backgrounds/      # Imágenes de fondo
└── .git/                     # Control de versiones
```

### Organización de Assets

- **`public/css/`**: Hojas de estilo modulares
- **`public/js/`**: Scripts de funcionalidad
- **`public/images/`**: Assets gráficos optimizados
  - Logos de marcas (PNG con transparencia)
  - Imágenes de carrusel (JPG optimizadas)
  - Iconografía (SVG escalables)

### Despliegue

La aplicación está desplegada en **GitHub Pages** y es completamente estática.

**URL del proyecto**: [https://opensourcedevupc.github.io/Landing/](https://opensourcedevupc.github.io/Landing/)

#### Configuración de GitHub Pages

El proyecto está configurado para desplegarse automáticamente desde la rama `main` usando GitHub Pages. Cada commit a la rama principal actualiza automáticamente el sitio en vivo.

#### Otras opciones de despliegue compatibles

La aplicación también es compatible con:

- **Netlify**
- **Vercel**
- **Firebase Hosting**
- Cualquier servidor web estático

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
Base: 320px+        /* Smartphones */
Tablet: 768px+      /* Tablets */
Desktop: 1024px+    /* Desktop */
Large: 1200px+      /* Large screens */
```

### Características Responsive

- **Header**: Navegación colapsible con menú hamburguesa
- **Hero Section**: Grid adaptativo con reordenamiento de contenido
- **Carruseles**: Scroll horizontal en móvil, grid en desktop
- **Cards**: Layout flexible que se adapta al viewport
- **Typography**: Escalado fluido de tipografía

## Componentes Principales

### Header Navigation

```html
<!-- Navegación principal con menú móvil -->
<header class="header">
  <div class="nav-wrapper">
    <div class="logo">...</div>
    <nav class="main-nav">...</nav>
    <div class="mobile-menu-toggle">...</div>
  </div>
</header>
```

### Interactive Carousel

```javascript
// Sistema de carrusel con indicadores
function goToSlide(index) {
  // Lógica de navegación entre slides
}
```

### FAQ Accordion

```javascript
// Sistema de FAQ expandible
document.querySelectorAll('.faq-item').forEach(item => {
  // Toggle de preguntas frecuentes
});
```

### Brand Showcase

```html
<!-- Marcas aliadas con logos -->
<section class="brands-section">
  <div class="brands-grid">
    <!-- Cards de marcas -->
  </div>
</section>
```

## Contribución

### Cómo Contribuir

1. **Fork** el repositorio
2. **Crear** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abrir** un Pull Request

### Estándares de Código

- **HTML**: Estructura semántica y validación W3C
- **CSS**: Metodología BEM, mobile-first
- **JavaScript**: ES6+, código limpio y documentado
- **Commits**: Mensajes descriptivos en español

### Reportar Issues

- Usar el sistema de Issues de GitHub
- Incluir capturas de pantalla si es necesario
- Describir pasos para reproducir el problema

## Equipo

Desarrollado por estudiantes de Ingeniería de Software - Perú

- **Proyecto**: Trabajo Final de curso
- **Institución**: Universidad Peruana de Ciencias Aplicadas (UPC)
- **Año**: 2025

### Roles del Proyecto

- **Frontend Development**: Desarrollo de interfaz y experiencia de usuario
- **UI/UX Design**: Diseño de interfaz y experiencia de usuario
- **Responsive Design**: Adaptación multiplataforma
- **Documentation**: Documentación técnica y de usuario

## Licencia

Este proyecto es desarrollado con fines educativos como parte del programa de Ingeniería de Software.

---

GeoPs - Conectando negocios y clientes a través de la geolocalización

Desarrollado por estudiantes de Ingeniería de Software en Perú
