@echo off
REM Build script for Game Streaming Server EXE

echo Building Game Streaming Server EXE...
echo.

REM Build TypeScript
echo [1/3] Building TypeScript...
cd server
call npm run build
if errorlevel 1 (
    echo Error building TypeScript
    exit /b 1
)

REM Create EXE with pkg
echo [2/3] Creating EXE file...
call npm install -g pkg
call npx pkg dist/index.js --targets win --output GameStreamingServer.exe --compress Brotli

if errorlevel 1 (
    echo Error creating EXE
    exit /b 1
)

echo [3/3] Complete!
echo.
echo ✅ Success! EXE created: GameStreamingServer.exe
echo.
