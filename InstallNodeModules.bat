Rem Run this script in order to avoid long paths and problems with TFS Git checkins
cd /d %~dp0
call npm install -g bower
call npm install -g flatten-packages
call npm install -g karma-cli
call npm install -g gulp
call npm install
call bower install
flatten-packages