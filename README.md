# Release Notes for Hestia 1.0 

## New Features 
* Improved matching algorithm that displays your matches on the profile page 
* Added filtering to display matches based on compatibility percentage 
* Added sign lease agreement functionality 
* Added rating system UI to every listing page 

## Bug Fixes
* Tags are now updated to the database and remain on your profile screen after refreshing 
* Matches appear on the profile screen 

## Known Bugs
* Social media login and profile creation  
* User verification through emails and photos  
* Incomplete functionality for rating system; database values correct when adding new rating but unable to display current rating 
* Navigation between certain pages is not complete 
* Sign lease page: unable to uncheck the box agreeing to all terms and conditions

# Install Guide

## Pre-requisites
The only required configuration of Software would be that the individual has NodeJS on their computer and know how to run a script from the command line.

## Dependent Libraries that must be installed
* These are the packages you need to be installed for the software to function. If you have Visual Studio Code and to run these packages you just need to do Terminal -> Run Task -> npm install front-end -> npm build front-end. And then do the same thing for the backend.  
* @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, axios, bcryptjs, body-parser, bootstrap, cors, dotenv, express, homepage, is-empty, mongodb, mongoose, nodemon, passport, passport-jwt, path,react, react-bootstrap, react-dom, react-router-dom, react-scripts, validator, web-vitals 

## Download instructions
* The users can access our product by downloading the source code from the github at the following url: 
	https://github.com/inaenae123/Team-0314---Hestia 
* Or alternatively, those without github access can email a team member for a zip file containing the source code.  

## Build Instructions: 
### Build Code on VScode
1. First, you will want to go to the terminal tab at the top bar and click configure tasks. You will then want to click on the tasks "install backend, install frontend, build frontend, start backend" These tasks should already in the configure tasks option right after downloading the code from GitHub. (If you have trouble with this our find that something is not working, follow the instructions for running the code without VScode, utilizing the terminal provided by VScode) 
2. You will then want to install all necessary npm resources before attempting to build and run the code. For how to do this please refer to the installation portion of the instructions 
3. After this you are now read to run the task "Build Frontend". This operation takes a little longer to complete than the other two (about 1-2 minutes), so keep an eye on its progress in case it throws any errors. This builds a prebuilt version of the front-end html that the backend can use. When the task is completed, you should now have a file named “build” in your frontend directory. 
	* NOTE: Any changes made to the frontend will require you to rerun the "Build 	Frontend" command for the backend to see it 
4. Finally, then you will run the task "Start Backend". After running it, wait for the messages on the console log. Three messages saying you have connected to port 3000, and the database labra has connected. After this the website is now online on the local server and ready to be accessed. You will then need to open the link yourself however, which I have provided here http://localhost:3000/ 

### Build Code from Terminal
1. You will first want to install npm for both the frontend and backend before building. Please refer to “Installation of actual application” for instructions on how to do this. 
2. After you have installed the necessary files into your frontend and backend, navigate back to the directory where you are keeping the main file, “Team-0314---Hestia”, from your terminal. You’ll then navigate to the frontend directory and enter the command “npm run build” from the command line of your terminal. This operation takes a little longer to complete than the other two (about 1-2 minutes), so keep an eye on its progress in case it throws any errors. This builds a prebuilt version of the front-end html that the backend can use. When the task is completed, you should now have a file named “build” in your frontend directory. 
	* NOTE: Any changes made to the frontend will require you to rerun the "Build Frontend" command for the backend to see it 
3. After this you’ll navigate back to the main file and then to the backend directory from your terminal. Now in the backend, you’ll enter the command, “npm start”, from the command line. After entering the command, wait for the messages on the console log. Three messages saying you have connected to port 3000, and the database labra has connected. After this the website is now online on the local server and ready to be accessed. You will then need to open the link yourself however, which I have provided here http://localhost:3000/ 

## Installation
### Installing on VScode
1. First you will first want to run task "Install Backend". When it is finished installing, there should now be a Node_Modules folder in your backend file. If there is not or if the installation itself is throwing errors, try deleting the file, package-lock.json, in the backend directory and then running the task again. 
2. You will then want to run task "Install Frontend". Much like in the previous step, there should now be a Node_Modules folder in your frontend file. If there is not or if the installation itself is throwing errors, try deleting the file, package-lock.json in the frontend directory and then running the task again. 

### Installing from Terminal 
1. First, you will want to navigate to the directory where you are keeping the main file, “Team-0314---Hestia”, from your terminal. 
2. Next we will install node modules for our backend file. From your terminal, navigate from the main file to the backend file (cd \backend). Once you have navigated to the backend directory, you will then want to run the command, “npm install” from your command line. This should then install all files necessary for the backend to compile into a new folder, node_modules. You will know that this was done correctly when this file appears in your directory. 
3. You’ll then want to navigate back to the main file then to the frontend directory and repeat the process outlined above. After this each file should have it’s own node_modules file and be ready to go. 

## Run Instructions
Select run code option on text editor of choice. 

## Troubleshooting
* If encountering an error, ensure you’ve build the application before starting by running npm run build in the front-end directory folder. Then run npm start in the backend. 
* If still having an error starting the application after running npm run build, delete the build folder and run npm run build again. 
* If encountering an error running npm install with a message that says “no such file or directory”, ensure you are running npm install separately for the front-end and backend. 
* If encountering an error with environment involving the failed access to database, ensure that you have access to the database by requesting access or changing the config to use another database by replacing the current url /Rafael:777rafael@cluster0.kiegx.mongodb.net/LocalLibrary with the url of a database you have access to in the backend/config/keys.js and to the backend/index.js.  
* If values/feature aren’t updating, try running localstorage.clear() in the terminal to clear the cache. 
