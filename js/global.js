function Criatura(nombre, tipo, vida, ataque, grito, imagen){
	this.nombre = nombre;
	this.tipo = tipo;
	this.vida = vida;
	this.ataque = ataque;
	this.grito = grito;
	this.imagen = imagen;
	this.gritar =  function gritar(){
		alert( this.grito );
	}
}
// Defino las criaturas
var Pikachu   =	new Criatura('Pikachu','Pokemon','50','20','Pika pika!','pikachu');
var Agumon    =	new Criatura('Agumon','Digimon','80','50','Te vot a quemaarr!','agumon');
var Charizard = new Criatura('Charizard','Pokemon','150','80','Charrii!','charizard');
var MetalGreymon = new Criatura('Metal Greymon','Digimon','800','650','CHARIZAR TE VIOLOO!','metalgreymon');

//Dibujo el DOM
nombre.innerText = Pikachu.nombre;
tipo.innerText	 = Pikachu.tipo;
vida.innerText	 = Pikachu.vida;
ataque.innerText = Pikachu.ataque;
grito.innerText	 = Pikachu.grito;
imagen.innerHTML = "<img src='img/" + Pikachu.imagen + ".jpg' />";
//Dibujo el DOM el segundo bicho
nombre2.innerText = MetalGreymon.nombre;
tipo2.innerText	 = MetalGreymon.tipo;
vida2.innerText	 = MetalGreymon.vida;
ataque2.innerText = MetalGreymon.ataque;
grito2.innerText	 = MetalGreymon.grito;
imagen2.innerHTML = "<img src='img/" + MetalGreymon.imagen + ".jpg' style='max-width:200px' />";