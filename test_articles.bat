@echo off
setlocal enabledelayedexpansion

echo.
echo Testing 13 resource articles...
echo.

set success=0
set failed=0

REM Test each article
for %%A in (cjm-template foda-kit content-calendar nps-template content-strategy guia-customer-journey-map guia-seo-local guia-estrategia-linkedin cx-metrics-guide infografia-anatomia-post-linkedin infografia-optimizacion-atencion-cliente infografia-palabras-clave infografia-elementos-landing-page) do (
    curl -s -I "https://jpstudio.app/recursos/%%A" | find "HTTP" >nul
    if errorlevel 0 (
        echo OK %%A
        set /a success+=1
    ) else (
        echo FAIL %%A
        set /a failed+=1
    )
)

echo.
echo Success: %success%/13
echo Failed: %failed%/13
