const express = require('express')

const routes = express.Router()

routes.get('/users', (req,res)=>{
    return res.json({
        evento: 'Semana OmniStack',
        aluno: 'Matheus Afonso'
    })
})


module.exports = routes