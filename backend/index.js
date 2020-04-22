const express = require('express')

const app = express()

app.use(express.json())

app.get('/users', (req,res)=>{
    return res.json({
        evento: 'Semana OmniStack',
        aluno: 'Matheus Afonso'
    })
})

app.listen(3333)