# Lyft Apprenticeship Code Sample

This is a simple Express server written in vanilla Javascript. You can use `npm start` to start the server, or simply `node app.js` in the terminal to start the server. There's no frontend, so you could use Postman to test the route, or the curl command at the bottom of this README.

## Requirements
* Accept a POST request to the route `“/test”`, which accepts one argument `“string_to_cut”`
* Return a JSON object with the key `“return_string”` and a string containing every third letter from the original string
    * e.g. If you `POST` `{"string_to_cut": "iamyourlyftdriver"}`, it will return: `{"return_string": "muydv"}`.

## Testing
To see expected behavior you can run this command after starting the server:

```
curl -X POST https://localhost:4000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
```
