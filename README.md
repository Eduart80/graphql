# runing react and server from on json files

dependencies
npm i concurrently

add 
scripts
"all": "concurrently \"npm run dev\" \"npm start\"",
"dev": "nodemon server/index.js",
"start": "react-scripts start",

npm run all