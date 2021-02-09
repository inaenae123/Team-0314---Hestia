# Team-0314---Hestia
to run the backend just do nodemon index.js
You'll then need to open the link yourself however http://localhost:3000/

# Running Code on VScode 
*Configure tasks "install backend, install frontend, build frontend, start backend"
*Run task "Install Backend" -- There should now be a Node_Modules folder in your backend file
*Run task "Install Frontend"-- There should now be a Node_Modules folder in your frontend file
*Run task "Build Frontend" -- This builds a prebuilt version of the front end html that the backend can use
*Run task "Start Backend" -- wait for the messages on the console log, three messages saying you've connected to port 3000, and the the database labra should show up
You'll then need to open the link yourself however http://localhost:3000/

# Adding to the Database
*Check your email for invitation to mongodb Atlas site

to add to the backend post with this url (localhost:3000/api/user/register)  in postman with this body (raw, json):
{
	"name": <whatever name you want>,
	"email": <whatever email you want>,
	"password" : <the password>
}
