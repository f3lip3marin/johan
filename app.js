
alert(
	'Hola hola señorita no se si usted sabia, pero yo soy programador web, y se me ocurrio la brillante idea de hacerle este mini juego, espero le guste, y en algun momento nos veremos, de hecho me muero por eso'
);

class Persona {
	constructor(nombre, apellido, edad, cedula) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.cedula = cedula;
	}

	registro() {
		this.nombre = prompt('Aca debe escribir el bello nombre que le dio su madre al nacer...');

		this.apellido = prompt('Aca escriba el nombre de quien hizo este cagada de juego:');

		this.edad = parseInt(prompt('Ahora ingrese que edad tiene: '));
		while (isNaN(this.edad) || this.edad <= 0) {
			this.edad = parseInt(prompt('Ingrese, jajja si jodo no? yayya esta el la ultima, ingrese que siente por el: '));
		}


		console.log(this);
	}

	algunaVaina() {
		alert(
			`Hola, me llamo ${this.nombre}, y estoy un poquito aburrida, asi que ${this.apellido} me hizo esta chimba de juego. Él es muy encantador y se que cuando nos veamos él y yo nos daremos ${this.edad} besos, y los ultimos 3 seran intensos JAJAJJAJAJJAJJA. Y aparte ella prometio un baile sensual...`
		);
	}
}

const personaNueva = new Persona(
	this.nombre,
	this.apellido,
	this.edad,
	this.cedula,
);

personaNueva.registro();

alert('Ups, hubo un error, su belleza hizo que se callera la página, que pena molestarla. Pero en parte la culpa es suya debería estar en un museo, no por ahí colapsando páginas! cosaaaaa hermosaaaaa, le pedire que ingrese otra vez los datos...');

personaNueva['nombre'] = prompt('Ingrese su nombre otra vez..: ');
personaNueva['edad'] = prompt('Ingrese su edad :');
personaNueva.algunaVaina();

alert("¿Que tal le pareció?");
alert("Si le saque una sonrisa???")
alert("Espero verla pronto 😏")
