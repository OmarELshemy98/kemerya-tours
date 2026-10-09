@echo off
cd /d d:\kemerya-tours
start "srv3100" /b cmd /c "node node_modules\next\dist\bin\next start -p 3100 > qa-screenshots\devserver.log 2>&1"


