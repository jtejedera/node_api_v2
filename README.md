# NODE.JS API #

Simple Node.JS Project. It include tests, generated documentation using apiDoc (https://apidocjs.com/), Docker file and Docker Compose.

**RECOMENDATION**: Use Docker to run the API server, check Docker section.

## NOTES 
* I added Babel to use `import` and avoid to add `-experimental-modules` flag.
* Send the request to the API using the header `authorization`.

## API Documentation
Open the API documentation Index file.
```
./apidoc/index.html
```

## Project setup
```
npm install
```

### Start the API
```
npm start
```

## Docker
Build the API image
```
docker image build -t node_api .
```

Then you can run docker-compose up
```
docker-compose up
```

### Run Tests
1. HTTP endpoints
```
npm run test-dev
```
![Screenshot](tests.PNG)