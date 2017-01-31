/*=====================================================================
    Constructor Personas
=====================================================================*/
	let Profesor = module.exports.Profesor = function(id, rut, dv, nombres, paterno, materno){
		
	 	this.id=id;
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



