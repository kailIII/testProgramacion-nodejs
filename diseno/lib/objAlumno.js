/*=====================================================================
    Constructor Alumnos
=====================================================================*/
	let Alumnos = module.exports.Alumnos = function(rut, dv, nombres, paterno, materno){
		
		  this.rut=rut;
		  this.dv=dv;
		  this.nombres=nombres;
		  this.paterno=paterno;
		  this.materno=materno;
		  this.devNombreCompleto = function() {
			return this.nombres + ' '+ this.paterno + ' '+ this.materno;
		  	};
		  
		  this.devRutCompleto = function() {
			return this.rut + '-'+ this.dv;
		  };
		
	return this;
	 };
