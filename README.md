# Vet Web App
The application has to help vet to check if animals are healthy
#
### 1. Prerequisites:
##### 1.1. PostgreSQL (11.#)
##### 1.2. NodeJS (Current LTS)
##### 1.3. ReactJS
#
### 2. Installing:
##### 2.1. PostgreSQL: [Click here ](https://www.postgresql.org/download/)
###### [IMPORTANT] Set all paswords as '1234', install pgAdmin, StackBuilder and everything included in installation (do not uncheck anything). From StackBuilder (gonna open up after installation of basic PostgreSQL) check/install pgAdmin and Postgres version you installed. Restart system. 
###### Use command 'psql postgres postgres' to open database (before loading vet.sql) or 'psql vet postgres'. If psql command isn't found, create Path inside your system variables (Windows) or $PATH (Linux). On windows: Search for System Variables (Zmienne środowiskowe) and add your /bin directory (of your postgres installation) into: System Variables > Path
##### 2.2. NodeJS: [Click here ](https://nodejs.org/en/download/)
###### [IMPORTANT] Download and install LTS version. (npm gonna be installed automatically). Through console check if everything works with commands 
```
node -v
```
and 
```
npm -v
```
##### 2.3. After PostgreSQL and NodeJS installation:
###### Go into /api folder inside repository and use command (from terminal) 'npm install'. After installation, check if app works with ###### command: 
```
npm start
```
###### and through web browser with adress 'localhost:9000' or 'localhost:9000/testAPI'.

###### Do the same inside folder /client (inside repository). Site should open up on her own.
#
### 4. Folder structure:
#### /db - database script
#### /api -  back-end (NodeJS)
#### /api/node_modules (NodeJS files - do not touch)
#### /api/bin - not important, node files
#### /api/routes - core files containing code responsible for HTTP Requests
#### /api/views - some "jade" files. I don't know how they works. It's like node front end (we use react)
#### /api/app.js - request calls, second most important file
#### /api/package* - files containing dependencies needed to 'npm install'
#### /api/pg-set.js - database info (connection)
#### /client - front-end (ReactJS)
#### /client/node_modules - like previous (back-end ones)
#### /client/public - core files we don't touch a lot, but we can
#### /client/src - our main files (main directory)
#### /client/src/components - every component
#### /client/src/img - images
#### /client/src/App* - main script and styles
#### /client/src/index* - files containing ReactDOM call
#### /client/src/package* - as previous
#
### 3. Authors:
#### Wojciech Kubiak
#### Bartłomiej Borowski
#
