# CRUD API
1. Clone this repository:

`git clone https://github.com/ElizavetaRazumenko/crud-api.git`

2. Switch to the development branch:

`git checkout dev`

3. Install the dependencies:

`npm i`

4. to start the project, use one of the commands:
   
`npm run start:dev`

to start a project in development mode

`npm run start:prod`

to start a project in production mode
## Main methods
Method to get an array of all users:

`GET http://localhost:{PORT value}/api/users`

Method to get a specific user (the id must be in uuid format):

`GET http://localhost:{PORT value}/api/users/{id in uuid format}`

Method to add a new user (data must be in a special format):

    - `id` — unique identifier (`string`, `uuid`) generated on server side
    - `username` — user's name (`string`, **required**)
    - `age` — user's age (`number`, **required**)
    - `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**)
    

`POST http://localhost:{PORT value}/api/users`

```
{
	"username": "Elizaveta",
	"age": 24,
	"hobbies": [
		"JavaScript"
	]
}
```

Method to change the user's data:

`PUT http://localhost:{PORT value}/api/users/{id in uuid format}`
```
{
	"username": "Nick",
	"age": 38,
	"hobbies": [
		"sport"
	]
}
```
Method to delete a character (the id must match the id of an existing user).

`DELETE http://localhost:{PORT value}/api/users/{id in uuid format}`

## Testing

To run the tests, write the following commands:

`npm run start:dev`

`npm run test`
