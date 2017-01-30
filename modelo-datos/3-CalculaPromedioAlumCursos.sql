


/*==========================================================================================
	Calculo del promedio de notas de un Alumno en un Curso

	CURSOS
	1 = PROGRAMACION
	2 = BASES DE DATOS
	3 = DESARROLLO WEB
	
	ALUMNOS 
	1 = ALEJANDRO	VERGARA	GODOY
	2 = MARIA PAZ	OLGUIN	GAJARDO
==========================================================================================*/ 

SELECT 
	t3.`CUR_Nombre` as Curso,
	CONCAT(`ALU_ApeMat`, ' ' , `ALU_ApePat` , ' ' , `ALU_Nombres`) as Alumno,

  	IFNULL(
  			ROUND(SUM(`NOP_Nota`) / COUNT(`NOP_Nota`))   #Redondeo hacia arriba el Promedio
  			,0) as PROMEDIO  
  	
  	
  	FROM `NOtasPruebas` as t1
	INNER JOIN `PRUebas` as t2
		ON t1.`PRU_Id`= t2.`PRU_Id`
	
	INNER JOIN `CURsos` as t3
		ON t2.`CUR_Id`= t3.`CUR_Id`
	
	INNER JOIN ALUmnos as t4
		ON t1.`ALU_Id`= t4.`ALU_Id`
	
	WHERE t3.`CUR_Id` = 1
	AND t1.`ALU_Id` = 1
