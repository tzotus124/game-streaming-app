@echo off
REM Game Streaming App - Automated Build & Release Script (Windows)

setlocal enabledelayedexpansion

echo ================================
echo 🎮 Game Streaming App - Builder
echo ================================
echo.

set VERSION=1.0.0
set RELEASE_DIR=releases

if not exist "%RELEASE_DIR%" mkdir "%RELEASE_DIR%"

echo [1/4] Building Server EXE...
cd server
call npm install --production
if errorlevel 1 goto error
call npm run build
if errorlevel 1 goto error
call npm install -g pkg
if errorlevel 1 goto error
call npx pkg dist/index.js --targets win --output GameStreamingServer.exe --compress Brotli
if errorlevel 1 goto error
copy GameStreamingServer.exe "..\"%RELEASE_DIR%\""
echo ✅ Server EXE created
cd ..

echo.
echo [2/4] Building Host EXE...
cd host
call npm install
if errorlevel 1 goto error
call npm run dist
if errorlevel 1 goto error
echo ✅ Host EXE created
cd ..

echo.
echo [3/4] Creating documentation...
echo # Game Streaming Platform v%VERSION% > "%RELEASE_DIR%\INSTALL.md"
echo. >> "%RELEASE_DIR%\INSTALL.md"
echo ## Installation >> "%RELEASE_DIR%\INSTALL.md"
echo. >> "%RELEASE_DIR%\INSTALL.md"
echo ### Server >> "%RELEASE_DIR%\INSTALL.md"
echo 1. Download GameStreamingServer.exe >> "%RELEASE_DIR%\INSTALL.md"
echo 2. Run it >> "%RELEASE_DIR%\INSTALL.md"
echo. >> "%RELEASE_DIR%\INSTALL.md"
echo ### Host >> "%RELEASE_DIR%\INSTALL.md"
echo 1. Download GameStreamingHost-Setup.exe >> "%RELEASE_DIR%\INSTALL.md"
echo 2. Run installer or portable version >> "%RELEASE_DIR%\INSTALL.md"
echo ✅ Documentation created

echo.
echo ================================
echo ✅ Build Complete!
echo ================================
echo.
echo 📦 Release files in: %RELEASE_DIR%\
echo.
echo 📄 Next Steps:
echo    1. Upload files to GitHub Releases
echo    2. Share download links
echo    3. Users can download and run
echo.
pause
goto end

:error
echo.
echo ❌ Build failed!
pause
exit /b 1

:end
