const express = require('express')
const dogRouter = require('./src/routes/dog') 
const database = require('./src/database')  

const app = express()
const porta = 3000
app.use(express.json())

app.use('/api/v1/dog', dogRouter)

database.db
    .sync({ force: false })
    .then(() => {
        app.listen(porta, () => {
        console.log('Servidor rodando na porta ' + porta + '!')
        })
    })
    .catch((e) => {
        console.error(`Não foi possível conectar ao banco: ${e}`)
    })