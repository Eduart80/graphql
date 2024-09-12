require('dotenv').config()
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3002 // process.env.PORT || 3002

const app = express()
app.use(cors())

// conect with mongodb
mongoose.connect(process.env.url)
mongoose.connection.once('open', ()=>{
    console.log('Connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true//process.env.NODE_ENV === 'development'
}))


app.listen(port, console.log("Listening on port "+ port))
