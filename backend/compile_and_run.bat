@echo off
echo =========================================================================
echo  ECO WEAVES STUDIO LLP - JAVA MYSQL BACKEND COMPILER & SERVER LAUNCHER
echo =========================================================================
echo.

if not exist "bin" mkdir bin

echo [1/2] Compiling Java REST API source files...
javac -cp "lib/mysql-connector-j-8.3.0.jar" -d bin src/com/ecoweaves/backend/*.java

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Compilation Failed! Please check JDK 24 installation.
    pause
    exit /b %ERRORLEVEL%
)

echo ✅ Java Source Code Compiled Successfully!
echo.
echo [2/2] Starting Java REST API Server on http://localhost:8080...
java -cp "bin;lib/mysql-connector-j-8.3.0.jar" com.ecoweaves.backend.Main

pause
