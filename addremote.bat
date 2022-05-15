git remote -v
pause
set /p linkremoto=^> Pegue el enlace del proyecto:
git remote add origin %linkremoto%
git pull -r origin main
git push -u origin main

