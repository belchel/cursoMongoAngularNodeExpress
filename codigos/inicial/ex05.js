
function temParam(param){
	console.log(process.argv)
	return process.argv.indexOf(param) !== -1
}

if (temParam("--producao")){
	console.log('Atencao')
} else{
	console.log('buuuu')
}

process.stdout.write('esta gostando?')

process.stdin.on('data', function(data){
	process.stdout.write(`sua resp: ${data.toString()}`)
	process.exit()

})