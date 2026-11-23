@echo off
chcp 65001 >nul
cd /d %~dp0\backend
node app.js
pause
