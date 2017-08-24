const express = require('express')

const server = express()



server.route('/')
	.get((req, res) => res.send('Lista'))
	.post((req, res) => res.send('Salva'))
	.put((req, res) => res.send('Atualiza'))
	.delete((req, res) => res.send('Deleta'))
	
server.listen(3000, () => console.log('Executando...'))