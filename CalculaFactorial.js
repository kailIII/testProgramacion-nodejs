
const prompt = require('prompt');
const func = require('./lib/FuncionesNumeros.js');


	prompt.start();
	prompt.get(['numero'], function (err, result) {

		let factorialNum = func.devFactorial(result.numero); //Retorna la factoria del numero
		let obj = func.separaNum(factorialNum);				 //Retorna array con los numeros

		console.log("==================================================");
		console.log(` NÚMERO:    ${ func.formatNumber(result.numero) }             `);
		console.log("==================================================");
		console.log(` FACTORIAL:    ${ func.formatNumber(factorialNum) }             `);
		console.log("==================================================");
		console.log(` TOTAL DE ZEROS:    ${ func.cuentaCaracter(obj,0) }             `);
		console.log("==================================================");


		
  });
