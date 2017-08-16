const _ = require('lodash')


const alunos = [{
	nome: 'Joao',
	nota: 9.6
},
{
	nome: 'Maria',
	nota: 5.6
},
{
	nome: 'Felipe',
	nota: 8.5
}]

const media = _.sumBy(alunos, 'nota') / alunos.length


console.log(media)