# serpla-exp
Service Place - User experiences

Users share their experince of being served by services and experiences.

Aimed to be back-end based on Node.js, Express.js, Mongoose and Jest

## running the project

```
# install the dependencies
yarn install

# Database connection string is read from an environmental varilable named MONGODB_CONNECTION
# To set this variable in the Ubuntu run this. Do not forget ro use your own user/password
export MONGODB_CONNECTION="mongodb://user:password@localhost:27017"

# start the project
yarn start

# start the project in the test mode
yarn dev

# run the tests
yarn test
```

## To test the routes with `CURL`

```
# Use curl with bash script on Windows

# Making a GET request:
curl http://localhost:3001/experience

# Making a POST request with JSON data
curl -X POST -H "Content-Type: application/json" -d '{"title":"New Experience","description":"Some description"}' http://localhost:3001/experience

# Making a PUT request with JSON data
curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Experience","description":"Updated description"}' http://localhost:3001/experience/123

# Making a DELETE request
curl -X DELETE http://localhost:3001/experience/123
```
