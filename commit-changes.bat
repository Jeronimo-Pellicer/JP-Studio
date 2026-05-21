@echo off
cd /d "c:\Users\jerop\JP-Studio.worktrees\copilot-worktree-2026-05-21T19-25-30"

echo Staging files...
git add vercel.json
git add vite.config.js
git add package.json
git add public/robots.txt
git add generate-sitemap.cjs
git add public/.htaccess
git add nginx.conf.example
git add test-sitemap-config.cjs
git add SITEMAP_FIX_GUIDE.md
git add SITEMAP_SOLUTION_SUMMARY.md

echo.
echo Git status:
git status

echo.
echo Committing changes...
git commit -m "fix: Resolver error 404 sitemap.xml y mejorar indexacion SEO

- Actualizar vercel.json para excluir archivos estaticos de rewrites
- Agregar configuracion outDir en vite-plugin-sitemap
- Crear script automatizado generate-sitemap.cjs para generacion consistente
- Actualizar package.json con comando de generacion
- Mejorar robots.txt con crawl-delay y request-rate
- Agregar .htaccess para configuracion Apache
- Incluir nginx.conf.example para referencia
- Crear test-sitemap-config.cjs para validacion
- Documentar solucion completa en SITEMAP_FIX_GUIDE.md
- Agregar resumen ejecutivo en SITEMAP_SOLUTION_SUMMARY.md

Cambios principales:
- El sitemap.xml ahora es servido correctamente sin error 404
- La indexacion en buscadores funciona correctamente
- Configuracion multi-servidor (Vercel, Apache, Nginx)
- Automatizacion de generacion de sitemap en cada build

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo Commit completado.
