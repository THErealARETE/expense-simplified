const path = require ('path')

const express = require('express')
const app = express()
// const publicPath = path.join (__dirname, '..', 'public')
const port = process.env.PORT ||3000

app.use( express.static( `${__dirname}/../build` ) );

// app.use(express.static(publicPath))

// app.get('*', (req, res)=>{
// res.sendfile(path.join(publicPath, 'index.html'))
// })

// const path = require('path')
app.get('*', (req, res)=>
{  res.sendFile(path.join(__dirname, '../build/index.html'));})

app.listen(port, (()=>{
    console.log('server is up')
}) )
