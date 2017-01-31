## INSTALACION  ##
`
1.- Instalar NodeJS y NPM`: 
	* Para sistemas operativos Linux 	y Windows [Ingrese Aqui](http://www.w3resource.com/node.js/installing-node.js-windows-and-linux.php)
	* Para sistemas operativos OSX [Ingrese Aqui](https://coolestguidesontheplanet.com/installing-node-js-on-macos/). 
	* Si necesita utilizar varias versiones de node puede usar [nvm](https://github.com/creationix/nvm)

2.- Instalar dependencias:   
```
$ npm install
```


#PROGRAMACION#
___________________________________________________________________________

#### 1.- Determinar la cantidad de 0`s a la derecha de n!(Factorial) ####
	
	Script que calcula el factorial de un número, calcula la cantidad de zeros
	que tiene el factorial calculado
	
	Para Ejecutarlo:  En el terminal escribir:
	```
	$ node CalculaFactorial.js
	```

![alt tag](http://apgca.cl/bin/test/factorial.png)





#### 2.- Transformar de Numeros a letras ####

	Script que de un numero ingresado retorna su conversión a letras

	Ejecutarlo:  En el terminal escribir:
	```
	$ node NumeroaLetras.js
	```

![alt tag](http://apgca.cl/bin/test/numeroLetras.png)



#### 3.- Algoritmo que visita los movimientos de un caballo en un tablero de NxN ####


#MODELO DE DATOS#
___________________________________________________________________________

#### 1.- Modelo de datos relacional que permita administrar los cursos de un colegio. Cada cursos tiene un profesor a cargo, cada alumno  ####

![alt tag](http://apgca.cl/bin/test/ModeloColegio.png)


[Ver Carpeta](https://github.com/mortegac/testProgramacion-nodejs/tree/master/modelo-datos)

#### 2.- Query con Listado de Alumnos en un curso #### 
[Ver Query](https://github.com/mortegac/testProgramacion-nodejs/blob/master/modelo-datos/2-ListaAlumCursos.sql) 

#### 3.- Query qeu calcula el promedio de notas de una alumno en un curso #### 
[Ver Query](https://github.com/mortegac/testProgramacion-nodejs/blob/master/modelo-datos/3-CalculaPromedioAlumCursos.sql) 

#### 4.- Query qye lista los alumnos y el promedio obtenido en casa Ramo#### 
[Ver Query](https://github.com/mortegac/testProgramacion-nodejs/blob/master/modelo-datos/4-ListaAlumnosPromedios.sql) 

#### 5.- Query que lista solo los alumnos con promedios Rojos#### 
[Ver Query](https://github.com/mortegac/testProgramacion-nodejs/blob/master/modelo-datos/5-ListaAlumnosPromediosRojos.sql) 

[Ver Dump Base de Datos en Mysql](https://github.com/mortegac/testProgramacion-nodejs/blob/master/modelo-datos/COLEGIO-NEW_2017-01-30.sql) 

#### 6.- La respuesta es la letra b) 190 tuplas #### 


#DISEÑO#
___________________________________________________________________________

#### 1.- Desarrollo de Clases (orientado a objetos) que cumplan con el modelo de datos Colegio ####

Para Ejecutarlo:  En el terminal escribir:
	```
	$ node /diseno/colegio.js
	```
[Ver Archivo](https://github.com/mortegac/testProgramacion-nodejs/blob/master/diseno/colegio.js) 

#### 2.- Desarrollo de mazo de cartas (orientado a objetos) ####

Para Ejecutarlo:  En el terminal escribir:
	```
	$ node /diseno/mazoCartas.js
	```
[Ver Archivo](https://github.com/mortegac/testProgramacion-nodejs/blob/master/diseno/mazoCartas.js) 

#### 3.- Desarrollo de agenda médica desde un objeto Json.  Los rangos de los horarios superiores e inferiores se calculan según lso datos del Json####
![alt tag](http://apgca.cl/bin/test/agenda.png)





