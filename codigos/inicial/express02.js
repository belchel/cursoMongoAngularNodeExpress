const express = require('express')

const server = express()

server.get('/', function (req, res, next){
	console.log('Iniciando...')
	next()
	console.log('Fim...')
})

server.all('/', function (req, res){
	console.log('Olaaa...')
	res.send('<h1>Ola</h1>')
})



server.use('/www', function (req, res){
	console.log('wwww...')
	res.send('<h1>wwwww</h1>')
})

server.listen(3000, () => console.log('Executando...'))