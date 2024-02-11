# CRUD API
To work with the project you should to clone the repository:

`git clone https://github.com/ElizavetaRazumenko/crud-api.git`

switch to the develop branch:

`git checkout dev`

install the dependencies:

`npm i`

To start a project in development mode:

`npm run start:dev`

or in production mode:

`npm run start:prod`

After launching the application, launch the Insomnia or another API client.

To get an array of all users, select the GET method and specify the address:

`GET http://localhost:{PORT value from .env}/api/users`

To get a specific user, use the GET method. In the address bar, add the ID of an existing user (The ID must be in uuid format).

`GET http://localhost:{PORT value from .env}/api/users/{id in uuid format}`

To add a new user, use the POST method and specify the address. And don't forget to specify the object in the desired format:

`POST http://localhost:{PORT value from .env}/api/users`

```
{
	"username": "Elizaveta",
	"age": 24,
	"hobbies": [
		"JavaScript"
	]
}
```

To change the user's data, use the PUT method. In the address bar, specify the user ID in the uuid format (The ID must match the ID of your created user). And don't forget to specify the object in the desired format.

`PUT http://localhost:{PORT value from .env}/api/users/{id in uuid format}`
```
{
	"username": "Nick",
	"age": 38,
	"hobbies": [
		"sport"
	]
}
```
To delete a character, use the DELETE method. In the address bar, specify the user ID in the uuid format (The ID must match the ID of an existing user).

`DELETE http://localhost:{PORT value from .env}/api/users/b97fbf9e-2a38-43a4-9692-74aa143871a0`

To run the tests, start the server,

`npm run start:dev`

and in another terminal write the command

`npm run test`