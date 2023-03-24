# EXPRESS APP TEMPLATE

## Packaging

### based package

1. body-parser
2. cors
3. dotenv
4. morgan
5. express

### development tool

6. nodemon

## Installation

clone this project and `npm install` in the project folder

## Configuration

### .env contain following:

1. PORT: port of the server
2. LOGGER_TYPE: set type for morgan logger `LOGGER_TYPE = "dev"` to enable dev mode

## Start application

development mode: `npm run dev`

run application: `npm run start` or `node .`

## Application structure

`src` is source folder

`app/index.js` contain the server, update addition express router for expansion

`modules` contain express module, each sub folder is consider as a module,
each `module` can contain:

- `controllers` for `controller`
- `services` for `model`
- `router` for sub routing if `module` is a router
- `index.js` is main file of the module
