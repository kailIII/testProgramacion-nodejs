# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 159.203.170.247 (MySQL 5.5.43-0+deb8u1)
# Base de datos: COLEGIO-NEW
# Tiempo de Generación: 2017-01-30 18:15:53 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla ALUmnos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ALUmnos`;

CREATE TABLE `ALUmnos` (
  `ALU_Id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ALU_Rut` int(10) unsigned NOT NULL,
  `ALU_Dv` varchar(5) CHARACTER SET latin1 DEFAULT NULL,
  `ALU_Nombres` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `ALU_ApePat` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `ALU_ApeMat` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `ALU_Foto` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `PAR_Sexo` int(11) DEFAULT NULL,
  `ALU_Email` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `ALU_Estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`ALU_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ALUmnos` WRITE;
/*!40000 ALTER TABLE `ALUmnos` DISABLE KEYS */;

INSERT INTO `ALUmnos` (`ALU_Id`, `ALU_Rut`, `ALU_Dv`, `ALU_Nombres`, `ALU_ApePat`, `ALU_ApeMat`, `ALU_Foto`, `PAR_Sexo`, `ALU_Email`, `ALU_Estado`)
VALUES
	(1,1,'1','ALEJANDRO','VERGARA','GODOY',NULL,1,'AVERGARA@EMAIL.CL',1),
	(2,2,'2','MARIA PAZ','OLGUIN','GAJARDO',NULL,2,'MP@LIVE.cl',1);

/*!40000 ALTER TABLE `ALUmnos` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla CURsos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CURsos`;

CREATE TABLE `CURsos` (
  `CUR_Id` int(11) NOT NULL AUTO_INCREMENT,
  `CUR_Nombre` varchar(150) DEFAULT NULL,
  `PRO_Id` int(11) DEFAULT '0',
  `CUR_Estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`CUR_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `CURsos` WRITE;
/*!40000 ALTER TABLE `CURsos` DISABLE KEYS */;

INSERT INTO `CURsos` (`CUR_Id`, `CUR_Nombre`, `PRO_Id`, `CUR_Estado`)
VALUES
	(1,'PROGRAMACION',1,1),
	(2,'BASES DE DATOS',2,1),
	(3,'DESARROLLO WEB',1,1);

/*!40000 ALTER TABLE `CURsos` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla CUrsosPersonas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CUrsosPersonas`;

CREATE TABLE `CUrsosPersonas` (
  `CUP_Id` int(11) NOT NULL AUTO_INCREMENT,
  `CUR_Id` int(11) NOT NULL,
  `ALU_Id` int(11) NOT NULL,
  `CUP_Estado` int(255) DEFAULT NULL,
  PRIMARY KEY (`CUP_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `CUrsosPersonas` WRITE;
/*!40000 ALTER TABLE `CUrsosPersonas` DISABLE KEYS */;

INSERT INTO `CUrsosPersonas` (`CUP_Id`, `CUR_Id`, `ALU_Id`, `CUP_Estado`)
VALUES
	(1,1,1,1),
	(2,2,1,1),
	(3,3,1,1),
	(4,1,2,1),
	(5,2,2,1),
	(6,3,2,1);

/*!40000 ALTER TABLE `CUrsosPersonas` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla NOtasPruebas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `NOtasPruebas`;

CREATE TABLE `NOtasPruebas` (
  `NOP_Id` int(11) NOT NULL AUTO_INCREMENT,
  `PRU_Id` int(11) DEFAULT NULL,
  `ALU_Id` int(11) DEFAULT NULL,
  `NOP_Nota` float(255,0) DEFAULT NULL,
  `NOP_Estado` int(255) DEFAULT NULL,
  PRIMARY KEY (`NOP_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `NOtasPruebas` WRITE;
/*!40000 ALTER TABLE `NOtasPruebas` DISABLE KEYS */;

INSERT INTO `NOtasPruebas` (`NOP_Id`, `PRU_Id`, `ALU_Id`, `NOP_Nota`, `NOP_Estado`)
VALUES
	(1,1,1,56,1),
	(2,1,2,34,1),
	(3,2,1,67,1),
	(4,2,2,42,1),
	(5,5,2,34,1),
	(6,5,2,33,1),
	(7,5,2,56,1),
	(8,6,2,21,1),
	(9,6,2,45,1);

/*!40000 ALTER TABLE `NOtasPruebas` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla PROfesores
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PROfesores`;

CREATE TABLE `PROfesores` (
  `PRO_Id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `PRO_Rut` int(10) unsigned NOT NULL,
  `PRO_Dv` varchar(5) CHARACTER SET latin1 DEFAULT NULL,
  `PRO_Nombres` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `PRO_ApePat` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `PRO_ApeMat` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `PRO_Foto` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `PAR_Sexo` int(11) DEFAULT NULL,
  `PRO_Email` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `PRO_Estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`PRO_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `PROfesores` WRITE;
/*!40000 ALTER TABLE `PROfesores` DISABLE KEYS */;

INSERT INTO `PROfesores` (`PRO_Id`, `PRO_Rut`, `PRO_Dv`, `PRO_Nombres`, `PRO_ApePat`, `PRO_ApeMat`, `PRO_Foto`, `PAR_Sexo`, `PRO_Email`, `PRO_Estado`)
VALUES
	(1,4,'4','ANDREA','VILLALOBO','GUTIERREZ',NULL,2,'vg@gmail.com',1),
	(2,5,'5','ALBERTO','PRADO','FRANCO',NULL,1,'apf@yahoo.es',1);

/*!40000 ALTER TABLE `PROfesores` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla PRUebas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PRUebas`;

CREATE TABLE `PRUebas` (
  `PRU_Id` int(11) NOT NULL AUTO_INCREMENT,
  `CUR_Id` int(11) DEFAULT NULL,
  `PRU_Nombre` varchar(255) DEFAULT NULL,
  `PRU_Estado` int(255) DEFAULT NULL,
  PRIMARY KEY (`PRU_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `PRUebas` WRITE;
/*!40000 ALTER TABLE `PRUebas` DISABLE KEYS */;

INSERT INTO `PRUebas` (`PRU_Id`, `CUR_Id`, `PRU_Nombre`, `PRU_Estado`)
VALUES
	(1,1,'PRUEBA ORIENTACION OBJETOS',1),
	(2,1,'PRUEBA RECURSIVIDAD',1),
	(3,3,'PRUEBA MAQUETACION HTML CSS',1),
	(4,3,'PRUEBA USO MATERIALIZEcss',1),
	(5,2,'PRUEBA 1-FORMA NORMALIZACION',1),
	(6,2,'PRUEBA 2-FORMA NORMALIZACION',1);

/*!40000 ALTER TABLE `PRUebas` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
