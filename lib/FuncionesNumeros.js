
/*=====================================================================
    Formatea el numero recibido eco separadores de miles 
=====================================================================*/
	let formatNumber = module.exports.formatNumber = function(num){
		  let separador= ".";
		  let sepDecimal= ",";
		  num +='';
		  var splitStr = num.split('.');
		  var splitLeft = splitStr[0];
		  var splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1] : '';
		  var regx = /(\d+)(\d{3})/;
		  while (regx.test(splitLeft)) {
		  splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
		  }

		  return splitLeft  +splitRight;
		 }


/*=====================================================================
    Retorna el factorial de un numero
=====================================================================*/
	let devFactorial = module.exports.devFactorial = function(num){
	if (num == 0){ 
		return 1; 
	}
	return num * devFactorial (num-1); 
}



/*=====================================================================
Funcion que descompone en una array el numero recibido y lo devuelve ordenado
=====================================================================*/
	let separaNum = module.exports.separaNum = function(num){
		let varNum = Math.floor(num);
		let obj = [];
		let largo = varNum.toString().length;
		//Recorro el número y lo descompongo
		for (let i=0; i<varNum.toString().length; i++) { 
			let resto = Math.floor(varNum % 10);
			if(resto != undefined  && largo>= i){	
				if (i != largo && obj[i] !=0)
					obj[i] = resto; 
					varNum = varNum/10;
			}
		}
		obj = obj.reverse();  	//Invierto el arreglo por que queda al reves
	  return obj;
}



/*=====================================================================
Funcion que recorre un array y devuelve las ocurrencias de un numero recibido
=====================================================================*/
	let cuentaCaracter = module.exports.cuentaCaracter = function(obj, caracter){
		let largo = obj.length;
		let total=0;
		//Recorro el número y lo descompongo
		for (let i=0; i<largo; i++) { 
			if(obj[i] === caracter)
				total++;
			
			}
	  return total;
}

