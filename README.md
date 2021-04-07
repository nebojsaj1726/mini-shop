# thr-task

Mini MERN application

## Prerequisites 

Node.js

## Installing  

Clone or download the app 

Change to frontend directory  

`cd frontend`

Install dependecies 

`npm install`

Back to root 

`cd ..`

Install dependecies  

`npm install`

## Seeding the base

In your MongoDB account, create new project, then create new user and then get the connection string with your username and password.

Create .env file in root folder and type:

```
PORT=5000

MONGO_URI=<your connection string>
```

Then:

```
npm run data:import
```

## Run the app  

`npm run dev`


