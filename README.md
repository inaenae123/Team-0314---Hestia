# Team-0314---Hestia
to run the backend just do nodemon index.js
You'll then need to open the link yourself however http://localhost:3000/

# Running Code on VScode 
1. Configure tasks "install backend, install frontend, build frontend, start backend"
2. Run task "Install Backend" -- There should now be a Node_Modules folder in your backend file
3. Run task "Install Frontend"-- There should now be a Node_Modules folder in your frontend file
4. Run task "Build Frontend" -- This builds a prebuilt version of the front end html that the backend can use
* NOTE: Any changes made to the frontend will require you to rerun the "Build Frontend" command in order for the backend to see it
5. Run task "Start Backend" -- wait for the messages on the console log, three messages saying you've connected to port 3000, and the the database labra should show up
6. You'll then need to open the link yourself however http://localhost:3000/

# Adding to the Database
*Check your email for invitation to mongodb Atlas site

to add to the backend post with this url (localhost:3000/api/user/register)  in postman with this body (raw, json):
{
	"name": <whatever name you want>,
	"email": <whatever email you want>,
	"password" : <the password>
}


# Getting from the Database
We currently have a method to get the logged in user's profile data from the database!
The current get method used to do this can be found in backend\routes\users.js under the method name router.get("/userprofile"...
Please refer to the contents of the componentDidMount() method located in front-end\src\components\profile\UserProfile.js to see how to do it
Currently the user's profile data is stored under the path (this.state.users) in the UserProfile.js file
To access specific fields from this path, just append the desired field at the end of the path
For Example: To get id would be this.state.users.id
