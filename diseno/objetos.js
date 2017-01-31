
const alumno = require('./lib/objAlumno');
const profesor = require('./lib/objProfesor');
const curso = require('./lib/objCurso');
//const cursoPersonas = require('./lib/objcursoPersonas');

let Alumno1 = new alumno.Alumnos(1,'1','ALEJANDRO', 'VERGARA', 'GODOY');
let Alumno2 = new alumno.Alumnos(2,'2','MARIA PAZ', 'OLGUIN', 'GAJARDO');

console.log("__________________________________________________");
console.log(" - ALUMNOS -");
console.log(Alumno1,Alumno2);

console.log("__________________________________________________");
console.log(" - PROFESORES -");

 let Profe1 =  new profesor.Profesor(1, 4, '4', 'ANDREA', 'VILLALOBO', 'GUTIERREZ');
 let Profe2 =  new profesor.Profesor(2, 5, '5', 'ALBERTO', 'PRADO', 'FRANCO');

console.log(Profe1,Profe2);
console.log("__________________________________________________");
console.log(" - CURSOS -");

 let Curso1 =  new curso.Curso(1,'PROGRAMACION', 1);
 let Curso2 =  new curso.Curso(2,'BASE DE DATOS', 1);
 

console.log(Curso1,Curso2);
console.log("__________________________________________________");
