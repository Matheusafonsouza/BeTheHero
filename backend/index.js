const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    return res.json({
        evento: 'Semana OmniStack',
        aluno: 'Matheus Afonso'
    })
})

app.listen(3333)