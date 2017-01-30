


/*==========================================================================================
	Listado de Alumnos con promedio rojo
==========================================================================================*/ 

SELECT 
	CONCAT(`ALU_ApeMat`, ' ' , `ALU_ApePat` , ' ' , `ALU_Nombres`) as Alumno,
	t2.`CUR_Nombre` as Curso,
	
	
	(SELECT 
		IFNULL(
  			ROUND(SUM(`NOP_Nota`) / COUNT(`NOP_Nota`))   #Redondeo hacia arriba el Promedio
  			,0) 
  		FROM `NOtasPruebas` as t10
			INNER JOIN `PRUebas` as t20
			ON t10.`PRU_Id`= t20.`PRU_Id`
  		WHERE 	t10.`ALU_Id` = t1.`ALU_Id`
  		AND 	t20.`CUR_Id` = t2.`CUR_Id`
  		)as PromedioRojo
		
	FROM `CUrsosPersonas` as t1
	INNER JOIN `CURsos` as t2
		ON t1.`CUR_Id`= t2.`CUR_Id`

	INNER JOIN ALUmnos as t3
		ON t1.`ALU_Id`= t3.`ALU_Id`

	
		
	WHERE t1.`CUP_Estado`  = 1
	AND (SELECT 
		IFNULL(
  			ROUND(SUM(`NOP_Nota`) / COUNT(`NOP_Nota`))   #Redondeo hacia arriba el Promedio
  			,0) 
  		FROM `NOtasPruebas` as t10
			INNER JOIN `PRUebas` as t20
			ON t10.`PRU_Id`= t20.`PRU_Id`
  		WHERE 	t10.`ALU_Id` = t1.`ALU_Id`
  		AND 	t20.`CUR_Id` = t2.`CUR_Id`
  		) <= 39
  	AND (SELECT 
		IFNULL(
  			ROUND(SUM(`NOP_Nota`) / COUNT(`NOP_Nota`))   #Redondeo hacia arriba el Promedio
  			,0) 
  		FROM `NOtasPruebas` as t10
			INNER JOIN `PRUebas` as t20
			ON t10.`PRU_Id`= t20.`PRU_Id`
  		WHERE 	t10.`ALU_Id` = t1.`ALU_Id`
  		AND 	t20.`CUR_Id` = t2.`CUR_Id`
  		) > 0
  