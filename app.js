const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = 5000

mongoose.connect("mongodb+srv://<user>:<password>@cluster0.m9ons.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')
app.set('views', __dirname, 'views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Importando o router
const livros_router = require('./routers/livros-router')
app.use('/livros', livros_router)

app.get('/', (req, res)=>{
    res.send('Página inicial')
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})


