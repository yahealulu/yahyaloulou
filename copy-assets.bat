@echo off
echo Copying assets from original project...

REM Copy CV file
xcopy /Y "..\yahyaloulou\assets\cv.pdf" ".\public\assets\"

REM Copy project images
xcopy /E /I /Y "..\yahyaloulou\myprojectsdata" ".\public\myprojectsdata"

echo Done! Assets have been copied to the public folder.
pause

