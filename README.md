# C.A.S. Infinity Group — Sitio web corporativo

Sitio web multidioma (NL / EN / DE) para **C.A.S. Infinity Group B.V.**, construido con
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Estructura, secciones y copy
adaptados de [develobouw.nl](https://develobouw.nl) (marca operativa de la misma holding).

**Sitio en vivo:** [https://casinfinitygroup.nl](https://casinfinitygroup.nl)

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
  api/
    contact/route.ts    ← endpoint POST para el formulario (Resend)
  sitemap.ts            ← sitemap dinámico con hreflang
  robots.ts
proxy.ts                ← redirección de idioma
dictionaries/           ← contenido textual por idioma (nl.ts, en.ts, de.ts)
lib/
  i18n-config.ts        ← idiomas soportados
  dictionaries.ts       ← loader de diccionarios
  as-locale.ts          ← normaliza el param de idioma
  seo.ts                ← helpers de metadata, canonical, hreflang, JSON-LD
  company-data.ts       ← datos de contacto/legales
components/             ← componentes de UI reutilizables
public/images/          ← logo e imágenes del hero
```

## 🌍 Cómo añadir o editar contenido

Todo el texto vive en `dictionaries/{nl,en,de}.ts`. Si agregas un campo nuevo,
agrégalo en los 3 idiomas para evitar errores de tipos.

Los datos de contacto y legales (dirección, teléfono, email, KvK) se editan en
`lib/company-data.ts`.

## ✅ Estado del proyecto — Producción

| Componente | Estado |
|---|---|
| Sitio multidioma NL/EN/DE | ✅ En vivo |
| Dominio `casinfinitygroup.nl` | ✅ Conectado con SSL |
| Formulario de contacto (Resend) | ✅ Funcionando |
| Dominio verificado en Resend | ✅ Verified |
| Remitente `noreply@casinfinitygroup.nl` | ✅ Activo |
| Google Search Console | ✅ Verificado, sitemap enviado (15 páginas) |
| Deploy automático (Vercel + GitHub) | ✅ Activo en rama `main` |

## 🔑 Variables de entorno

Crear `.env.local` en la raíz (no se sube a GitHub):

```
RESEND_API_KEY=re_...
```

La misma variable debe estar configurada en **Vercel → Settings → Environment Variables**.

## 🎨 Sistema de diseño

- **Colores**: carbón `#16181A`, ámbar `#F2B705`, piedra `#6B6D70`, niebla `#F4F3F1`
- **Tipografía**: Archivo Black (display) + Inter (cuerpo) vía `next/font/google`
- **Motivo de marca**: detalles tipo "plano técnico" (esquinas de plano, líneas de cota)

## 🔎 SEO implementado

- URLs separadas por idioma con `hreflang` completo (incluye `x-default`)
- `sitemap.xml` y `robots.txt` dinámicos con alternates por idioma
- Metadata (title, description, Open Graph, Twitter Card) por página e idioma
- JSON-LD `GeneralContractor` (schema.org) en Home
- Keywords de construcción en NL/EN/DE integradas en el contenido

## 📋 Pendientes menores (post-lanzamiento)

1. **Transferencia del dominio** a la cuenta de TransIP del cliente (usar el
   Authorization code guardado en el panel de TransIP)
2. **Fotografías reales** de obra — sustituir las imágenes actuales del hero
   por fotos en resolución mínima 1920×1080px, formato WebP
3. **Proyectos reales** — reemplazar los 4 casos de ejemplo en Home por
   proyectos reales de C.A.S. Infinity Group
4. **Google Business Profile** — recomendado para mejorar el posicionamiento
   local en búsquedas de "constructora en Holanda"
