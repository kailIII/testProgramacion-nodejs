
/*=====================================================================
    Formatea el numero recibido eco separadores de miles 
=====================================================================*/
	var formatNumber = module.exports.formatNumber = function(num){
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
