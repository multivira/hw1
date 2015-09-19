Q&A Course README

----------------------------------------------------------------------------------------------------


INSTALLATION

1. Install NodeJS 0.10.38 (karma unit test runner does not support 0.12 release)

	http://nodejs.org/dist/v0.10.38/node-v0.10.38-x86.msi
	
2. Install Git

	https://github.com/msysgit/msysgit/releases/download/Git-1.9.5-preview20150319/Git-1.9.5-preview20150319.exe

3. Go to /Q-And-A-Angular1.4/QAndA/ right mouse on InstallNodeModules.bat, Run as administrator. This will install
npm and bower dependencies.

----------------------------------------------------------------------------------------------------


RUNNING THE APPLICATION

To start NodeJS server, open Command Prompt as administrator, cd to your project's folder, run

	node server.js

open the browser at localhost:8080/#home for Q&A Course example application or localhost:8888/#home for homework
application. Have in mind that you need to run 'node server.js' for homework and example applications separately.

----------------------------------------------------------------------------------------------------


BUILDING THE JAVASCRIPT APPLICATION

If you make updates to the javascript code or html views and want to see the effect, 
open Command Prompt as administrator, navigate to the project folder, 
run this command in the command line:

	gulp build

----------------------------------------------------------------------------------------------------


RUNNING UNIT TESTS

Open Command Prompt as administrator, navigate to the project folder, 
run this command in the command line:

	karma start karma-alltests.conf

To see the resulted coverage, in file explorer navigate to the project folder, then with
chrome or any other browser open the file

	/TestResults/coverage-alltests/lcov-report/index.html