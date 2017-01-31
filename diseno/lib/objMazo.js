/*=====================================================================
    Constructor Curso
=====================================================================*/
	let Mazo = module.exports.Mazo = function(){
		
		 
	let aleaPinta = Math.floor((Math.random() * 4) + 1);
	let aleaCarta = Math.floor((Math.random() * 13) + 1);

	var pinta= ["Picas", "Corazones", "Diamantes", "Tréboles"];
	var carta=["as","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","jota","reina","rey"];

 	this.devPinta = function() {
			return this.pinta[this.aleaPinta];
	  	};

 	this.devCarta = function() {
			return this.carta[this.aleaCarta];
	  	};
		  
		
	return this;
	 };
