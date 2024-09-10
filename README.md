# run react and server at the same time from json files

dependencies
npm i concurrently

add 
scripts
"all": "concurrently \"npm run dev\" \"npm start\"",
"dev": "nodemon server/index.js",
"start": "react-scripts start",

npm run all
