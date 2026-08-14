@echo off
title Launching Eco Weaves Studio Live System...
echo ===================================================
echo   ECO WEAVES STUDIO LLP - 1-CLICK LIVE RUNNER
echo ===================================================
echo.
echo [1/2] Starting React Dev Live Server...
start /b npm run dev -- --port 3000

echo [2/2] Starting Java 24 MySQL Backend Server...
cd backend
start /b java -cp "bin;lib/mysql-connector-j-8.3.0.jar" com.ecoweaves.backend.Main
cd ..

timeout /t 3 /nobreak >nul
echo Opening Eco Weaves Studio Live Site in Browser...
start http://localhost:3000

echo.
echo ✅ Eco Weaves Studio is Live at http://localhost:3000!
