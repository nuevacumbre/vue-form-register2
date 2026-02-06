## 🎯 Vue 3.6 Alpha - Formularios Reactivos

## 📋 Descripción

Proyecto educativo para **Lección 3 Módulo 6**: Formularios con **two-way data binding** (`v-model`) en Vue 3.6.0-alpha.2. Demuestra validaciones en tiempo real, controles variados y UI responsive con Vuelidate.

## 🚀 Características

- Vue 3.6 alpha con Composition API y `<script setup>`.
- Formulario completo: inputs, checkboxes, radios, selects, textarea, range.
- Validaciones reactivas con `@vuelidate/core` y `validators`.
- Estilos CSS modernos (gradientes, animaciones, responsive).

## 🛠 Tecnologías

| Tecnología | Versión | Rol |
|------------|---------|-----|
| Vue | 3.6.0-alpha.2 | Framework   |
| Vite | 5.4.8 | Build/dev server   |
| @vuelidate/core | ^2.0.3 | Validaciones   |
| @vitejs/plugin-vue | 5.0.5 | Plugin Vite   |

## 📁 Estructura

```
vue-form-register2/
├── index.html      # Entrada HTML [file:12]
├── main.js         # Mount Vue app [file:8]
├── style.css       # Estilos globales [file:9]
├── package.json    # Deps/scripts [file:10]
├── vite.config.js  # Config Vite [file:13]
└── package-lock.json
```

## ⚡ Instalación Detallada

### Prerrequisitos
- Node.js 20+ (recomendado para Vue alpha).
- Git instalado.
- Editor: VS Code con Vue extension.

### 1. Clonar Repositorio
```bash
git clone <tu-url-github>
cd vue-form-register2
```
Nota: Ignora `node_modules` y `dist` (.gitignore activo). 

### 2. Instalar Dependencias
```bash
npm install --legacy-peer-deps
```
**Por qué `--legacy-peer-deps`?** Vue 3.6 alpha tiene peers no estándar; evita warnings/errors en npm 7+. 

Verifica:
```bash
npm ls vue  # Debe mostrar 3.6.0-alpha.2 sin errores
```

### 3. Ejecutar Desarrollo
```bash
npm run dev
```
- Abre **automáticamente** http://localhost:5173.
- Hot reload activado: cambios en `main.js` o CSS se reflejan al instante. 

### 4. Build Producción
```bash
npm run build
```
- Genera `/dist` optimizado (minificado, hashed).
- Preview: `npm run preview` (si script agregado). 

### 5. Verificar Instalación
- Consola browser: Sin errores rojos.
- Formulario carga con estilos (gradientes, labels).
- Prueba `v-model`: Cambia input → estado JS actualiza.

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| `npm install` falla (peer deps) | `npm install --legacy-peer-deps`   |
| Puerto 5173 ocupado | Edita `vite.config.js`: `port: 3000`   |
| Vue no detectado | `npm ls vue`; reinstala con flag |
| Estilos no cargan | Ver `index.html` link `<link rel="stylesheet" href="/style.css">`  

## 🎯 Contenido Educativo

### Conceptos Clave
- **v-model**: Binding bidireccional (UI ↔ JS).
- Controles: text/email/password, checkbox/radio/select/textarea/range.
- Validaciones: `@blur`, clases dinámicas (`:class`), errores reactivos con Vuelidate. 

**Ejemplo Código** (de `main.js` adaptado):
```javascript
import { createApp } from 'vue'
createApp({ /* form state con ref/reactive */ }).mount('#app')
```

## 🤝 Contribuciones (Estilo Ejemplo GitHub)

**PR: <título corto>**

**Contexto**  
**Problema:**  
**Causa raíz:**  
**Solución:**  

**Cambios**  
**Frontend** (Vue/CSS)  
**Config** (Vite/package.json)  

**Riesgos**  
**Qué rompería:** Binding o validaciones.  
**Rollback:** Revert commit.  

✅ **Checklist Blindaje**  
A) **Deps/Config**  
- `npm i --legacy-peer-deps` OK.  
- `npm run dev` sin errors.

B) **Frontend**  
- Form carga, v-model funciona.  
- Consola limpia, responsive.  

C) **Tests Rápidos**  
- localhost:5173 OK.  
- Submit form → logs datos.  
- Build OK.  

**Evidencias**  
- Screenshot consola limpia.  

## 📚 Recursos

- [Vue Forms Guide](https://vuejs.org/guide/essentials/forms.html).
- [Vite Docs](https://vitejs.dev/guide/).
- Tu curso: Módulo 6 Lección 3.

**Licencia:** MIT. Última update: Feb 2026.