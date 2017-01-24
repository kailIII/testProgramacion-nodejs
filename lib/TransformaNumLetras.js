//module.exports=(function() {

/*===========================================================================
	Modulo que exporta la funcionalidad de convertir un número a letras 

===========================================================================*/

	function DevTxtUnidades( numero ){
		let unidad;
		switch( numero ){
			case 0: unidad = "zero";	break;
			case 1: unidad = "un";		break;
			case 2: unidad = "dos";		break;
			case 3: unidad = "tres"; 	break;
			case 4: unidad = "cuatro"; 	break;
			case 5: unidad = "cinco"; 	break;
			case 6: unidad = "seis"; 	break;
			case 7: unidad = "siete"; 	break;
			case 8: unidad = "ocho"; 	break;
			case 9: unidad = "nueve"; 	break;
		}
		return unidad;
	}//-----------------------------------------------------------------------

	function DevTxtDecenas( numero ){
		let decena;
		switch( numero ){
			case 10: decena = "diez"; break;
			case 11: decena = "once"; break;
			case 12: decena = "doce"; break;
			case 13: decena = "trece"; break;
			case 14: decena = "catorce"; break;
			case 15: decena = "quince"; break;
			case 16: decena = "dieciseis"; break;
			case 17: decena = "diecisiete"; break;
			case 18: decena = "dieciocho"; break;
			case 19: decena = "diecinueve"; break;
			case 20: decena = "veinte"; break;
			case 30: decena = "treinta"; break;
			case 40: decena = "cuarenta"; break;
			case 50: decena = "cinquenta"; break;
			case 60: decena = "sesenta"; break;
			case 70: decena = "setenta"; break;
			case 80: decena = "ochenta"; break;
			case 90: decena = "noventa"; break;
		}
		return decena;
	}//-----------------------------------------------------------------------

	function ReemplazaCientos( txt ){
		
		return "";
	}//-----------------------------------------------------------------------

var NumberToLetter = module.exports.NumberToLetter = function(numero){
  let i, j, n, quotient, reste, nb ;
		let numberToLetter='';

		nb = parseInt(numero.toString());
		
		n = nb.toString().length;
		switch( n ){
			 case 1: numberToLetter = DevTxtUnidades(nb); break;
			 case 2: if(  nb > 19  ){
						   quotient = Math.floor(nb / 10);
						   reste = nb % 10;
						   if(  nb < 71 || (nb > 79 && nb < 91)  ){
								 if(  reste == 0  ) numberToLetter = DevTxtDecenas(quotient * 10);
								 if(  reste == 1  ) numberToLetter = DevTxtDecenas(quotient * 10) + " y " + DevTxtUnidades(reste); //"-y-"
								 if(  reste > 1   ) numberToLetter = DevTxtDecenas(quotient * 10) + " y " + DevTxtUnidades(reste);
						   }else numberToLetter = DevTxtDecenas((quotient - 1) * 10) + "-" + DevTxtDecenas(10 + reste);
					 }else numberToLetter = DevTxtDecenas(nb);
					 break;
			 case 3: quotient = Math.floor(nb / 100);
					 reste = nb % 100;
					 if(  quotient == 1 && reste == 0   ) numberToLetter = "cientos";
					 if(  quotient == 1 && reste != 0   ) numberToLetter = "ciento" + " " + NumberToLetter(reste);
					 if(  quotient > 1 && reste == 0    ) numberToLetter = DevTxtUnidades(quotient) + " cientos";
					 if(  quotient > 1 && reste != 0    ) numberToLetter = DevTxtUnidades(quotient) + " cientos " + NumberToLetter(reste);
					 break;
			 case 4 :  quotient = Math.floor(nb / 1000);
						  reste = nb - quotient * 1000;
						  if(  quotient == 1 && reste == 0   ) numberToLetter = "mil";
						  if(  quotient == 1 && reste != 0   ) numberToLetter = "mil" + " " + NumberToLetter(reste);
						  if(  quotient > 1 && reste == 0    ) numberToLetter = NumberToLetter(quotient) + " mil";
						  if(  quotient > 1 && reste != 0    ) numberToLetter = NumberToLetter(quotient) + " mil " + NumberToLetter(reste);
						  break;
			 case 5 :  quotient = Math.floor(nb / 1000);
						  reste = nb - quotient * 1000;
						  if(  quotient == 1 && reste == 0   ) numberToLetter = "mil";
						  if(  quotient == 1 && reste != 0   ) numberToLetter = "mil" + " " + NumberToLetter(reste);
						  if(  quotient > 1 && reste == 0    ) numberToLetter = NumberToLetter(quotient) + " mil";
						  if(  quotient > 1 && reste != 0    ) numberToLetter = NumberToLetter(quotient) + " mil " + NumberToLetter(reste);
						  break;
			 case 6 :  quotient = Math.floor(nb / 1000);
						  reste = nb - quotient * 1000;
						  if(  quotient == 1 && reste == 0   ) numberToLetter = "mil";
						  if(  quotient == 1 && reste != 0   ) numberToLetter = "mil" + " " + NumberToLetter(reste);
						  if(  quotient > 1 && reste == 0    ) numberToLetter = NumberToLetter(quotient) + " mil";
						  if(  quotient > 1 && reste != 0    ) numberToLetter = NumberToLetter(quotient) + " mil " + NumberToLetter(reste);
						  break;
			 case 7: quotient = Math.floor(nb / 1000000);
						  reste = nb % 1000000;
						  if(  quotient == 1 && reste == 0  ) numberToLetter = "un millon";
						  if(  quotient == 1 && reste != 0  ) numberToLetter = "un millon" + " " + NumberToLetter(reste);
						  if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " millones";
						  if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " millones " + NumberToLetter(reste);
						  break;  
			 case 8: quotient = Math.floor(nb / 1000000);
						  reste = nb % 1000000;
						  if(  quotient == 1 && reste == 0  ) numberToLetter = "un millon";
						  if(  quotient == 1 && reste != 0  ) numberToLetter = "un millon" + " " + NumberToLetter(reste);
						  if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " millones";
						  if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " millones " + NumberToLetter(reste);
						  break;  
			 case 9: quotient = Math.floor(nb / 1000000);
						  reste = nb % 1000000;
						  if(  quotient == 1 && reste == 0  ) numberToLetter = "un millon";
						  if(  quotient == 1 && reste != 0  ) numberToLetter = "un millon" + " " + NumberToLetter(reste);
						  if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " millones";
						  if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " millones " + NumberToLetter(reste);
						  break;  
			 case 10: quotient = Math.floor(nb / 1000000000);
							reste = nb - quotient * 1000000000;
							if(  quotient == 1 && reste == 0  ) numberToLetter = "mil millones";
							if(  quotient == 1 && reste != 0  ) numberToLetter = "mil millones" + " " + NumberToLetter(reste);
							if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " millones";
							if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " millones " + NumberToLetter(reste);
						    break;	
			 case 11: quotient = Math.floor(nb / 1000000000);
							reste = nb - quotient * 1000000000;
							if(  quotient == 1 && reste == 0  ) numberToLetter = "mil millones";
							if(  quotient == 1 && reste != 0  ) numberToLetter = "mil millones" + " " + NumberToLetter(reste);
							if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " millones";
							if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " millones " + NumberToLetter(reste);
						    break;	
			 case 12: quotient = Math.floor(nb / 1000000000);
							reste = nb - quotient * 1000000000;
							if(  quotient == 1 && reste == 0  ) numberToLetter = "mil millones";
							if(  quotient == 1 && reste != 0  ) numberToLetter = "mil millones" + " " + NumberToLetter(reste);
							if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " millones";
							if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " millones " + NumberToLetter(reste);
						    break;	
			 case 13: quotient = Math.floor(nb / 1000000000000);
							reste = nb - quotient * 1000000000000;
							if(  quotient == 1 && reste == 0  ) numberToLetter = "un billon";
							if(  quotient == 1 && reste != 0  ) numberToLetter = "un billon" + " " + NumberToLetter(reste);
							if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " billons";
							if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " billons " + NumberToLetter(reste);
						    break; 	
			 case 14: quotient = Math.floor(nb / 1000000000000);
							reste = nb - quotient * 1000000000000;
							if(  quotient == 1 && reste == 0  ) numberToLetter = "un billon";
							if(  quotient == 1 && reste != 0  ) numberToLetter = "un billon" + " " + NumberToLetter(reste);
							if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " billons";
							if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " billons " + NumberToLetter(reste);
						    break; 	
			 case 15: quotient = Math.floor(nb / 1000000000000);
							reste = nb - quotient * 1000000000000;
							if(  quotient == 1 && reste == 0  ) numberToLetter = "un billon";
							if(  quotient == 1 && reste != 0  ) numberToLetter = "un billon" + " " + NumberToLetter(reste);
							if(  quotient > 1 && reste == 0   ) numberToLetter = NumberToLetter(quotient) + " billons";
							if(  quotient > 1 && reste != 0   ) numberToLetter = NumberToLetter(quotient) + " billons " + NumberToLetter(reste);
						    break; 	
		 }
	    return numberToLetter;
}
