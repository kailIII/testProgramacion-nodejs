
const prompt = require('prompt');
const Transforma = require('./lib/TransformaNumLetras.js');
const func = require('./lib/FuncionesNumeros.js');

	prompt.start();
	prompt.get(['numero'], function (err, result) {
		console.log("==================================================");
		console.log(` NÚMERO:    ${ func.formatNumber(result.numero) }             `);
		console.log("==================================================");
		console.log(` LETRAS:    ${ Transforma.NumberToLetter(result.numero) }             `);
		console.log("==================================================");
  });
