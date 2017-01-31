/*=====================================================================
    Constructor Curso
=====================================================================*/
	let Mazo = module.exports.Mazo = function(){
		
		
	

	//	this.carta=["as","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","jota","reina","rey"];
		 
	let aleaPinta = Math.floor((Math.random() * 4) + 1);
	let aleaCarta = Math.floor((Math.random() * 13) + 1);

	var pinta= ["Picas", "Corazones", "Diamantes", "Tréboles"];

 	this.devPinta = function() {
 			
			return this.pinta[2];
			//return 4;
	  	};

 		// this.devCarta = function() {
			// return this.carta(8);
		 //  	};


		// this.pinta=pinta(Math.floor((Math.random() * 4) + 1));
		// this.carta=carta(Math.floor((Math.random() * 13) + 1));
		
		  
		
	return this;
	 };
