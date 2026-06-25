# C.A.S. Infinity Group — Sitio web corporativo

Sitio web multidioma (NL / EN / DE) para **C.A.S. Infinity Group B.V.**, construido con
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. La estructura, secciones y
copy están adaptados de [develobouw.nl](https://develobouw.nl) (marca operativa de la
misma holding), según lo acordado con el cliente.

## 🚀 Cómo correrlo

```bash
npm install
npm run dev       # desarrollo, http://localhost:3000
npm run build     # build de producción
npm run start     # servir el build de producción
```

La raíz `/` redirige automáticamente al idioma detectado en el navegador (`nl` por
defecto). Rutas disponibles:

- `/nl`, `/nl/about`, `/nl/services`, `/nl/international`, `/nl/contact`
- `/en/...`, `/de/...` (misma estructura)
- `/sitemap.xml`, `/robots.txt` (generados dinámicamente)

## 🏗️ Estructura del proyecto

```
app/
  [lang]/              ← todas las páginas, parametrizadas por idioma
    layout.tsx          ← layout con Header/Footer
    page.tsx            ← Home
    about/page.tsx
    services/page.tsx
    international/page.tsx
    contact/page.tsx
  sitemap.ts             ← sitemap dinámico con hreflang
  robots.ts
proxy.ts                 ← redirección de idioma (antes "middleware.ts")
dictionaries/             ← contenido textual por idioma (nl.ts, en.ts, de.ts)
lib/
  i18n-config.ts          ← idiomas soportados
  dictionaries.ts         ← loader de diccionarios
  as-locale.ts            ← normaliza el param de idioma
  seo.ts                  ← helpers de metadata, canonical, hreflang, JSON-LD
  company-data.ts          ← datos de contacto/legales (⚠️ ver TODOs)
components/                ← componentes de UI reutilizables
```

## 🌍 Cómo añadir o editar contenido

Todo el texto vive en `dictionaries/{nl,en,de}.ts`. Cada archivo exporta un objeto
con la misma forma (clave por clave) — si agregas un campo nuevo, agrégalo en los
3 idiomas para evitar errores de tipos.

## ⚠️ TODOs antes de publicar (pendientes de confirmar con el cliente)

1. **Datos legales** (`lib/company-data.ts`): KvK-nummer, dirección y teléfono
   están marcados como `TODO`. El cliente debe confirmar estos datos —ver nota en
   el propio archivo sobre por qué se dejaron así (la actividad registrada del
   KvK es "holding financiera", no constructora).
2. **Dominio real** (`lib/seo.ts`, variable `siteUrl`): actualmente apunta a un
   placeholder `https://www.casinfinitygroup.nl`. Cambiarlo al dominio real antes
   del lanzamiento (afecta sitemap, canonical y hreflang).
3. **Fotografía real**: el Hero usa un fondo SVG tipo "plano técnico"
   (`components/blueprint-backdrop.tsx`) como placeholder en vez de fotos de obra,
   porque el cliente aún no ha entregado material fotográfico. Sustituir por fotos
   reales cuando estén disponibles (idealmente WebP, optimizadas).
4. **Fuentes Google (Archivo + Inter)**: por restricciones de red del entorno de
   desarrollo se usan fuentes de sistema como fallback. En un hosting con acceso
   normal a internet (Vercel, etc.), reactivar `next/font/google` en
   `app/[lang]/layout.tsx` (ver comentario en `app/globals.css`) para cargar las
   tipografías originales.
5. **Formulario de contacto**: el formulario (`components/contact-form.tsx`) no
   envía datos a ningún backend todavía — solo muestra una confirmación visual.
   Conectar a un servicio real (Resend, Formspree, API propia, etc.) antes de
   publicar.
6. **Proyectos / casos de éxito**: los 4 proyectos mostrados en Home son los
   mismos que aparecen en develobouw.nl, adaptados como placeholder. Sustituir
   por proyectos reales de C.A.S. Infinity Group cuando estén disponibles.
7. **Google Search Console**: una vez publicado con el dominio real, verificar
   la propiedad y enviar `sitemap.xml` desde Search Console (requisito del brief
   original de SEO).

## 🎨 Sistema de diseño

- **Colores**: carbón `#16181A`, ámbar `#F2B705`, piedra `#6B6D70`, niebla `#F4F3F1`
  (ver `app/globals.css`, sección `@theme inline`).
- **Tipografía**: display condensada bold (Archivo Black) + sans neutra (Inter).
- **Motivo de marca**: detalles tipo "plano técnico" (esquinas de plano, líneas de
  cota) en vez de los clichés genéricos de IA (blobs, gradientes).

## 🔎 SEO implementado

- URLs separadas por idioma (`/nl`, `/en`, `/de`) con `hreflang` completo
  (incluye `x-default`).
- `sitemap.xml` y `robots.txt` generados dinámicamente, con alternates por idioma.
- Metadata (`title`, `description`, Open Graph, Twitter Card) específica por
  página e idioma.
- JSON-LD `GeneralContractor` (schema.org) en Home para ayudar a Google a
  entender el tipo de negocio.
- Contenido optimizado con keywords de construcción en los 3 idiomas (nieuwbouw,
  renovatie, aanbouw, infrawerk / new build, renovation, extensions / Neubau,
  Renovierung, Anbau, Tiefbau).

  update deploy fix
