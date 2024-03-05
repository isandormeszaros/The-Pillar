-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: watches
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `allbandwidthscount`
--

DROP TABLE IF EXISTS `allbandwidthscount`;
/*!50001 DROP VIEW IF EXISTS `allbandwidthscount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allbandwidthscount` AS SELECT 
 1 AS `width`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allbrandscount`
--

DROP TABLE IF EXISTS `allbrandscount`;
/*!50001 DROP VIEW IF EXISTS `allbrandscount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allbrandscount` AS SELECT 
 1 AS `id`,
 1 AS `brand`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allbrandsview`
--

DROP TABLE IF EXISTS `allbrandsview`;
/*!50001 DROP VIEW IF EXISTS `allbrandsview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allbrandsview` AS SELECT 
 1 AS `brand`,
 1 AS `description`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allcasematerialcount`
--

DROP TABLE IF EXISTS `allcasematerialcount`;
/*!50001 DROP VIEW IF EXISTS `allcasematerialcount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allcasematerialcount` AS SELECT 
 1 AS `material`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `alldatescount`
--

DROP TABLE IF EXISTS `alldatescount`;
/*!50001 DROP VIEW IF EXISTS `alldatescount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `alldatescount` AS SELECT 
 1 AS `date`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `alldialcolorscount`
--

DROP TABLE IF EXISTS `alldialcolorscount`;
/*!50001 DROP VIEW IF EXISTS `alldialcolorscount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `alldialcolorscount` AS SELECT 
 1 AS `color`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `alldialmaterialcount`
--

DROP TABLE IF EXISTS `alldialmaterialcount`;
/*!50001 DROP VIEW IF EXISTS `alldialmaterialcount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `alldialmaterialcount` AS SELECT 
 1 AS `material`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allfavouriteview`
--

DROP TABLE IF EXISTS `allfavouriteview`;
/*!50001 DROP VIEW IF EXISTS `allfavouriteview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allfavouriteview` AS SELECT 
 1 AS `id`,
 1 AS `product`,
 1 AS `userId`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allmovementscount`
--

DROP TABLE IF EXISTS `allmovementscount`;
/*!50001 DROP VIEW IF EXISTS `allmovementscount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allmovementscount` AS SELECT 
 1 AS `movement`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allorderconnbaseview`
--

DROP TABLE IF EXISTS `allorderconnbaseview`;
/*!50001 DROP VIEW IF EXISTS `allorderconnbaseview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allorderconnbaseview` AS SELECT 
 1 AS `orderId`,
 1 AS `product`,
 1 AS `quantity`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allordersview`
--

DROP TABLE IF EXISTS `allordersview`;
/*!50001 DROP VIEW IF EXISTS `allordersview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allordersview` AS SELECT 
 1 AS `id`,
 1 AS `user`,
 1 AS `address`,
 1 AS `orderDate`,
 1 AS `shippingDate`,
 1 AS `status`,
 1 AS `payment`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allstrapmaterialcount`
--

DROP TABLE IF EXISTS `allstrapmaterialcount`;
/*!50001 DROP VIEW IF EXISTS `allstrapmaterialcount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allstrapmaterialcount` AS SELECT 
 1 AS `material`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `alltablesview`
--

DROP TABLE IF EXISTS `alltablesview`;
/*!50001 DROP VIEW IF EXISTS `alltablesview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `alltablesview` AS SELECT 
 1 AS `id`,
 1 AS `watchName`,
 1 AS `price`,
 1 AS `dialColor`,
 1 AS `date`,
 1 AS `box`,
 1 AS `paper`,
 1 AS `caseMaterial`,
 1 AS `strapMaterial`,
 1 AS `movement`,
 1 AS `caseDiameter`,
 1 AS `caseThickness`,
 1 AS `bandWidth`,
 1 AS `dialMaterial`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allusersview`
--

DROP TABLE IF EXISTS `allusersview`;
/*!50001 DROP VIEW IF EXISTS `allusersview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allusersview` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `email`,
 1 AS `password`,
 1 AS `phone`,
 1 AS `verification`,
 1 AS `address`,
 1 AS `role`,
 1 AS `newsletter`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `allwaterresistancescount`
--

DROP TABLE IF EXISTS `allwaterresistancescount`;
/*!50001 DROP VIEW IF EXISTS `allwaterresistancescount`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allwaterresistancescount` AS SELECT 
 1 AS `resistance`,
 1 AS `watch_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `bandwidth`
--

DROP TABLE IF EXISTS `bandwidth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bandwidth` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bandWidth` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bandwidth`
--

LOCK TABLES `bandwidth` WRITE;
/*!40000 ALTER TABLE `bandwidth` DISABLE KEYS */;
INSERT INTO `bandwidth` VALUES (1,15),(2,16),(3,17),(4,18),(5,19),(6,20),(7,21),(8,22),(9,22),(10,23),(11,24),(12,25),(13,26),(14,28);
/*!40000 ALTER TABLE `bandwidth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `base`
--

DROP TABLE IF EXISTS `base`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `base` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brandId` int NOT NULL,
  `model` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `dialColorId` int NOT NULL,
  `dateId` int NOT NULL,
  `box` int NOT NULL,
  `paper` int NOT NULL,
  `caseMaterialId` int NOT NULL,
  `strapMaterialId` int NOT NULL,
  `movementId` int NOT NULL,
  `waterResistanceId` int NOT NULL,
  `caseDiameter` double NOT NULL,
  `caseThickness` double NOT NULL,
  `bandWidthId` int NOT NULL,
  `dialMaterialId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brandId_idx` (`brandId`),
  KEY `dialColorId_idx` (`dialColorId`),
  KEY `dateId_idx` (`dateId`),
  KEY `caseMaterialId_idx` (`caseMaterialId`),
  KEY `strapMaterialId_idx` (`strapMaterialId`),
  KEY `waterResistanceId_idx` (`waterResistanceId`),
  KEY `bandWidthId_idx` (`bandWidthId`),
  KEY `dialMaterialId_idx` (`dialMaterialId`),
  KEY `movementId_idx` (`movementId`),
  CONSTRAINT `bandWidthId` FOREIGN KEY (`bandWidthId`) REFERENCES `bandwidth` (`id`),
  CONSTRAINT `brandId` FOREIGN KEY (`brandId`) REFERENCES `brand` (`brandId`),
  CONSTRAINT `caseMaterialId` FOREIGN KEY (`caseMaterialId`) REFERENCES `casematerial` (`id`),
  CONSTRAINT `dateId` FOREIGN KEY (`dateId`) REFERENCES `date` (`id`),
  CONSTRAINT `dialColorId` FOREIGN KEY (`dialColorId`) REFERENCES `dialcolor` (`id`),
  CONSTRAINT `dialMaterialId` FOREIGN KEY (`dialMaterialId`) REFERENCES `dialmaterial` (`id`),
  CONSTRAINT `movementId` FOREIGN KEY (`movementId`) REFERENCES `movement` (`id`),
  CONSTRAINT `strapMaterialId` FOREIGN KEY (`strapMaterialId`) REFERENCES `strapmaterial` (`id`),
  CONSTRAINT `waterResistanceId` FOREIGN KEY (`waterResistanceId`) REFERENCES `waterresistance` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=508 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `base`
--

LOCK TABLES `base` WRITE;
/*!40000 ALTER TABLE `base` DISABLE KEYS */;
INSERT INTO `base` VALUES (1,1,'Submariner',9500,1,17,1,1,1,1,1,8,40,13,6,4),(2,2,'Seamaster',5800,2,29,0,0,2,2,1,10,43.5,14.47,7,4),(3,3,'Carrera',4200,3,24,1,1,1,3,1,4,41,13,6,4),(4,4,'Navitimer',7900,1,10,1,1,1,1,1,1,43,14.25,9,4),(5,5,'Tank Solo',2800,5,28,1,1,1,3,2,1,31,6.05,6,4),(6,6,'Reverso',5500,1,7,1,1,1,3,3,1,42.9,9.2,6,4),(7,7,'Prospex',1400,1,11,1,1,1,1,1,7,44.3,12.9,6,4),(8,8,'Promaster',1200,1,24,0,1,1,1,4,7,42,13,9,3),(9,9,'Le Locle',650,3,22,0,1,1,3,1,1,39.3,9.75,5,4),(10,10,'Khaki Field',495,1,12,1,0,1,3,1,4,38,9.8,6,4),(11,11,'Master Collection',1150,5,6,0,0,1,3,1,1,38.5,9.7,6,4),(12,12,'Big Crown ProPilot',1800,1,29,1,1,1,4,1,4,41,12,6,4),(13,13,'Aviation',4500,1,22,1,0,1,2,1,4,42,11.5,11,4),(14,14,'104',1400,1,28,0,1,1,3,1,7,41,11.5,6,4),(15,15,'Classique',16000,5,5,1,1,3,3,3,1,38,8.65,6,4),(16,16,'Royal Oak',22000,5,12,0,1,1,1,1,2,41,9.8,6,4),(17,17,'Overseas',19000,2,14,0,1,1,2,1,6,41,11,9,4),(18,2,'Speedmaster',4500,1,15,1,1,1,1,1,2,42,14.5,6,4),(19,4,'Superocean',3200,2,5,1,0,1,2,1,9,42,13.3,6,4),(20,18,'Luminor Base Logo',3900,1,26,1,0,1,3,3,4,44,10.5,9,4),(21,19,'Black Bay',3500,1,30,0,1,1,3,1,7,41,11.9,9,4),(22,1,'GMT-Master II',14000,1,26,0,1,1,1,1,4,40,12.5,6,4),(23,20,'Pilot\'s Watch',4800,1,14,0,0,1,3,1,3,41,12.5,6,4),(24,6,'Master Ultra Thin',7500,3,19,1,0,1,3,1,2,39,7.58,6,4),(25,13,'BR 03-92',200,1,13,0,0,4,2,1,4,42,9.3,9,4),(26,21,'1858 Geosphere',6200,1,13,1,0,1,3,1,4,42,11.2,9,4),(27,5,'Santos-Dumont',3500,5,8,1,1,1,3,2,1,38,7.5,4,4),(28,16,'Royal Oak',21000,1,7,0,0,1,1,1,2,41,10.4,6,4),(29,1,'Datejust',9000,5,4,0,1,1,5,1,4,36,12,6,4),(30,2,'Speedmaster Moonwatch',5250,1,21,1,0,1,1,3,2,42,14.3,6,2),(31,20,'Portugieser',8800,5,5,0,1,1,6,1,1,40.4,12.3,6,4),(32,16,'Royal Oak',17800,1,4,1,1,1,1,1,2,41,10.4,6,4),(33,22,'Fifty Fathoms',11500,1,22,1,0,1,7,1,8,45,15.4,10,4),(34,23,'El Primero',6500,5,16,0,0,1,6,1,4,42,12.75,6,4),(35,15,'Classique',23500,5,27,0,0,5,3,1,1,39,8.65,6,4),(36,24,'Polo S',10000,2,16,0,0,1,1,1,4,42,9.4,11,4),(37,25,'Marine',9500,2,17,1,0,1,2,1,4,44,12.5,9,4),(38,17,'Overseas',21500,5,3,1,1,1,1,1,6,41,11,6,4),(39,26,'Grande Seconde',9800,1,6,0,1,1,3,1,1,43,12.27,10,4),(40,16,'Royal Oak',19900,2,11,0,0,1,1,1,2,41,10.4,6,4),(41,22,'Fifty Fathoms',14400,1,22,0,0,1,7,1,8,45,15.5,9,4),(42,15,'Type XXI',9500,5,4,0,0,1,3,1,4,42,13.85,9,4),(43,27,'Octo Finissimo',12800,1,28,1,0,2,3,1,4,40,5.15,14,4),(44,28,'Mille Miglia',6500,1,10,1,1,1,3,1,2,44,13.7,6,4),(45,29,'Laureato',7800,2,3,1,0,1,1,1,4,42,10.88,6,4),(46,30,'Senator',9200,5,17,1,1,1,3,1,2,42,12.2,7,4),(47,31,'Classic Fusion',6500,1,3,1,0,2,2,1,2,42,9.3,6,4),(48,20,'Portugieser',8400,5,12,0,1,1,3,1,1,41,12.3,9,4),(49,26,'Grande Seconde',6200,5,5,1,1,1,3,1,1,43,12.13,10,4),(50,11,'Master Collection',1600,2,16,1,0,1,3,1,1,38.5,9.3,6,4),(51,32,'Nautilus',29800,2,23,0,1,1,1,1,5,40.5,8.3,6,4),(52,16,'Royal Oak',24500,2,6,1,0,1,1,1,2,41,9.8,6,4),(53,20,'Portugieser',7950,5,30,0,1,1,3,1,1,41,12.3,9,4),(54,31,'Classic Fusion',8200,1,7,0,1,2,2,1,2,42,10.5,9,4),(55,22,'Fifty Fathoms',11500,1,17,1,1,1,7,1,8,45,15.4,10,4),(56,23,'Chronomaster',9400,5,2,0,1,1,3,1,4,42,13.1,9,4),(57,29,'Laureato',6700,2,23,1,1,1,1,1,4,38,10.88,12,4),(58,28,'Mille Miglia',6100,1,12,1,0,1,3,1,2,42,11.43,6,4),(59,17,'Overseas',16300,2,2,0,0,1,1,1,6,41,11,9,4),(60,21,'1858',3600,1,30,1,1,1,3,1,4,42,12.8,9,4),(61,25,'Marine',9500,1,8,1,1,1,2,1,8,44,12.5,9,4),(62,1,'Datejust',8900,5,29,0,0,1,1,1,4,41,11.2,6,4),(63,32,'Nautilus',44500,2,5,0,1,1,1,1,5,40.8,8.3,6,4),(64,16,'Royal Oak',17000,2,3,0,1,1,1,1,2,41,10.4,6,4),(65,19,'Black Bay',4500,1,4,1,0,1,8,1,7,41,12.7,9,4),(66,20,'Portugieser',8300,5,15,1,0,1,3,1,1,41,12.3,9,4),(67,18,'Luminor Marina',8900,1,25,1,1,1,3,1,8,44,13.05,11,4),(68,22,'Fifty Fathoms',12000,1,11,1,0,1,8,1,8,43.6,13.83,10,4),(69,31,'Classic Fusion',7500,2,29,1,0,2,2,1,2,45,10.95,11,4),(70,23,'Chronomaster',6900,5,5,0,1,1,3,1,2,42,14.05,9,4),(71,17,'Overseas',15500,2,9,0,1,1,1,1,2,41,11,6,4),(72,29,'Laureato',11200,1,15,0,1,1,1,1,4,42,10.88,9,4),(73,16,'Royal Oak',18900,2,6,1,0,1,1,1,2,39,9.4,6,4),(74,32,'Nautilus',49800,2,27,0,0,1,1,1,5,40.5,8.3,6,4),(75,20,'Pilot\'s Watch',5500,1,28,1,1,1,3,1,3,41,12.5,6,4),(76,18,'Luminor',9600,1,27,1,1,2,2,1,8,44,15.65,11,4),(77,15,'Type XX',8800,1,26,0,0,1,3,1,4,39.5,14.1,6,4),(78,22,'Fifty Fathoms',14700,1,12,1,0,1,2,1,8,43,13.4,10,4),(79,29,'Laureato',10600,2,26,0,1,1,1,1,4,42,10.88,9,4),(80,17,'Overseas',19200,1,13,0,1,1,1,1,6,41,11,6,4),(81,23,'El Primero',7500,5,2,1,1,1,3,1,4,38,12.15,5,4),(82,28,'Mille Miglia',5600,1,11,0,1,1,3,1,2,42,12.67,6,4),(83,11,'HydroConquest',1400,2,15,0,0,1,1,1,8,43,12.75,9,4),(84,1,'Submariner',9500,1,9,1,1,1,1,1,8,40,13,6,4),(85,2,'Seamaster',5800,2,24,0,0,2,2,1,10,43.5,14.47,7,4),(86,3,'Carrera',4200,3,11,0,1,1,3,1,4,41,13,6,4),(87,4,'Navitimer',7900,1,8,1,0,1,1,1,1,43,14.25,9,4),(88,5,'Tank Solo',2800,5,5,0,1,1,3,2,1,31,6.05,6,4),(89,6,'Reverso',5500,1,1,1,0,1,3,3,1,42.9,9.2,6,4),(90,19,'Black Bay',3500,1,10,0,1,1,3,1,7,41,12.75,9,4),(91,7,'Prospex',650,2,7,1,0,1,9,1,7,42.3,13.4,9,1),(92,8,'Promaster',995,1,26,0,1,2,10,4,7,46.5,15,10,4),(93,10,'Khaki Field Auto',545,1,2,1,0,1,3,1,4,38,9.85,6,4),(94,33,'Precisionist',650,1,25,0,0,1,1,2,8,46.5,17.5,11,3),(95,2,'Speedmaster',5500,1,26,1,1,1,1,3,2,42,14.3,6,2),(96,4,'Superocean Heritage',4800,1,10,1,1,1,2,1,7,42,14.35,9,4),(97,6,'Master Control',6500,5,4,1,1,1,3,1,2,40,8.8,6,4),(99,23,'Elite',4500,5,28,1,0,1,3,1,2,40.5,9.15,6,4),(100,18,'Luminor Base',5800,1,1,1,0,1,3,3,4,44,10.5,11,4),(101,16,'Royal Oak',21000,5,2,1,0,1,1,1,2,41,10.4,6,4),(102,20,'Pilot\'s Watch',3800,1,30,0,1,1,3,1,3,41,10.86,6,4),(103,19,'Black Bay',3900,1,8,0,1,1,3,1,7,41,12.7,9,4),(104,11,'Conquest VHP',1500,1,22,1,1,1,1,2,2,41,12.1,6,4),(105,14,'U1',2500,1,3,0,0,1,2,1,11,44,14.3,9,4),(106,32,'Nautilus',38000,2,30,0,0,1,1,1,5,40.8,8.3,6,4),(107,16,'Royal Oak',55000,2,26,1,0,6,11,1,2,41,9.8,6,4),(108,17,'Overseas',21000,2,3,1,1,1,1,1,6,41,11,9,4),(109,34,'Saxonia',23000,5,6,1,0,7,3,3,1,38.5,7.8,4,4),(110,15,'Classique',23000,5,5,1,0,6,3,3,1,38.5,8.25,6,4),(111,20,'Portugieser',8500,2,12,0,0,1,3,1,1,41,12.3,9,4),(112,22,'Fifty Fathoms',14000,1,28,1,0,1,8,1,8,45,15.5,10,4),(113,31,'Big Bang',16000,2,27,0,0,2,2,1,4,44,14.5,11,4),(114,18,'Luminor Marina',8500,1,22,0,1,1,3,1,8,44,15.65,11,4),(115,23,'El Primero',6000,5,8,0,1,1,3,1,4,42,12.75,6,4),(116,24,'Altiplano',16500,5,22,0,1,7,3,3,1,38,6.1,6,4),(117,7,'Prospex',1200,2,17,1,0,1,9,1,7,44.3,12.7,6,4),(118,18,'Luminor Due',6500,1,25,1,1,1,3,1,1,38,11.2,6,4),(119,20,'Portugieser',9800,2,9,0,0,1,3,1,1,41,12.3,9,4),(120,22,'Fifty Fathoms',16800,1,24,1,0,2,2,1,8,45,15.5,10,4),(121,16,'Royal Oak',19800,1,15,1,1,1,1,1,2,41,9.5,6,4),(122,32,'Nautilus',47000,2,17,0,0,1,1,1,5,40.8,8.3,6,4),(123,15,'Classique',19000,3,27,1,0,5,3,1,1,40,6.8,6,4),(124,17,'Patrimony',18500,5,30,1,1,3,3,3,1,40,6.79,6,4),(125,28,'Mille Miglia',5800,1,7,1,1,1,3,1,2,44,14.97,9,4),(126,11,'Conquest',2200,1,2,0,1,1,1,1,8,41,13.2,6,4),(127,21,'1858',3500,1,14,1,0,1,3,3,1,44,12.3,9,4),(128,1,'GMT-Master II',9500,1,7,0,1,1,1,1,4,40,12.5,6,4),(129,2,'Speedmaster',4950,1,7,0,0,1,1,1,2,42,13.7,6,2),(130,32,'Nautilus',38000,2,8,0,0,1,1,1,5,40.8,8.3,6,4),(131,16,'Royal Oak',22000,2,7,1,1,1,1,1,2,41,9.8,6,4),(132,20,'Portugieser',7500,5,1,1,1,1,3,1,1,41,12.3,9,4),(133,6,'Master Ultra Thin',8900,5,5,1,1,1,3,1,2,39,7.58,6,4),(134,22,'Fifty Fathoms',13900,1,12,1,0,1,8,1,8,45,15.4,10,4),(135,15,'Classique',20500,5,10,0,1,6,3,3,1,40,6.8,6,4),(136,25,'Marine',9500,2,9,1,0,2,2,1,8,44,14.5,9,4),(137,31,'Big Bang',16000,1,16,1,0,4,2,1,4,41,14.5,6,4),(138,23,'El Primero',5500,3,15,0,0,1,3,1,4,38,12.75,6,4),(139,1,'Datejust',8200,1,12,1,0,1,1,1,4,41,11.8,6,4),(140,2,'Speedmaster Moonwatch',5400,1,30,0,1,1,1,3,2,42,13.2,6,2),(141,5,'Ballon Bleu',6500,5,9,1,1,1,1,1,1,33,9.96,4,4),(142,4,'Superocean',3600,2,17,1,1,1,2,1,9,42,13.32,6,4),(143,32,'Calatrava',18000,3,3,1,1,6,3,3,1,36,7.45,4,4),(144,31,'Big Bang',8900,1,27,1,0,2,2,1,4,42,14.5,11,4),(145,22,'Fifty Fathoms',13500,1,16,1,0,1,7,1,8,45,15.4,10,4),(146,16,'Royal Oak',26000,2,19,1,1,1,1,1,2,41,10.4,6,4),(147,23,'El Primero',6500,1,17,0,0,1,3,1,4,42,12.75,9,4),(148,20,'Portugieser',7800,5,23,1,0,1,3,1,1,41.5,12.3,9,4),(149,6,'Master Ultra Thin',4500,5,29,0,0,1,3,1,2,38,7.58,6,4),(150,32,'Nautilus',29800,2,1,1,1,1,1,1,5,40.5,8.3,9,4),(151,16,'Royal Oak',23100,1,19,0,1,1,1,1,2,41,9.8,6,4),(152,20,'Portugieser',7950,5,29,1,1,1,3,1,1,41,12.3,9,4),(153,17,'Overseas',18900,2,26,0,0,1,2,1,6,41.5,11,9,4),(154,22,'Fifty Fathoms',12800,1,5,0,1,1,7,1,8,45,15.5,10,4),(155,31,'Big Bang',17900,1,2,1,0,4,2,1,4,44,14.5,13,4),(156,15,'Classique',15200,5,16,1,0,5,3,3,1,39,8.65,6,4),(157,25,'Marine',8400,2,29,0,0,1,3,1,4,42.2,14.2,9,4),(158,23,'Defy',9500,2,26,1,0,2,2,1,4,41,10.75,9,4),(159,29,'Laureato',9200,5,14,1,1,1,1,1,4,42,10.88,9,4),(160,18,'Luminor',7500,1,9,1,1,1,3,3,4,44,13.05,11,4),(161,7,'Prospex',1300,2,13,1,0,1,9,1,7,43,13.2,9,1),(162,9,'Le Locle',650,5,3,0,1,1,3,1,1,39.3,9.75,6,4),(163,11,'Master Collection',2500,1,24,0,1,1,3,1,1,40,10.25,6,4),(164,10,'Jazzmaster',1150,5,23,1,0,1,3,1,2,40,11.15,6,4),(165,21,'Heritage',2750,5,21,1,0,1,3,1,2,40,9.85,6,4),(166,35,'True Thinline',1600,1,13,0,0,8,3,2,1,39,5,9,4),(167,36,'Classics',1400,5,27,1,0,1,3,1,2,40,10.5,6,4),(168,23,'Elite',5500,3,24,1,1,1,3,1,2,40.5,8.15,9,4),(169,29,'Laureato',8700,1,30,1,1,1,1,1,4,38,10.88,12,4),(170,25,'Marine Torpilleur',7900,2,14,1,1,1,3,1,2,42,11.15,6,4),(171,14,'U50',3350,1,26,1,0,9,9,1,9,45,14.7,9,4),(172,1,'Datejust',8000,1,30,0,1,1,5,1,4,36,12.5,6,4),(173,2,'Speedmaster',6500,1,10,0,1,1,1,1,2,42,13.5,6,4),(174,5,'Ballon Bleu',4500,5,23,0,0,1,3,1,1,33,9.96,2,4),(175,3,'Aquaracer',1800,2,15,0,0,1,1,2,8,43,10.8,6,4),(176,4,'Superocean',3600,2,30,1,1,1,2,1,12,42,13.32,6,4),(177,20,'Portugieser',8900,2,17,0,0,1,3,1,1,41,12.3,9,4),(178,18,'Luminor Marina',5700,1,4,1,0,2,3,3,8,44,13.05,11,4),(179,32,'Nautilus',34000,2,25,0,0,1,1,1,5,40.5,8.3,9,4),(180,6,'Master Ultra Thin',6800,5,11,1,1,1,3,1,2,39,7.58,6,4),(181,13,'BR V2-92',2500,1,11,0,0,1,2,1,4,41,9.7,9,4),(182,21,'1858',5300,1,22,0,1,10,3,1,4,44,12.8,9,4),(183,32,'Nautilus',34000,2,26,0,1,1,1,1,5,40.5,8.3,9,4),(184,16,'Royal Oak',22000,1,19,0,0,1,1,1,2,41,9.8,6,4),(185,17,'Overseas',17500,2,24,0,0,1,2,1,6,41,11,7,4),(186,20,'Portugieser',8500,5,24,1,1,1,3,1,1,41,13.1,9,4),(187,31,'Big Bang',15000,1,17,0,0,4,2,1,4,44.5,14.5,9,4),(188,23,'El Primero',6000,3,22,0,0,1,3,1,4,38,12.4,5,4),(189,28,'Mille Miglia',5000,1,17,0,1,1,3,1,2,42,12.67,6,4),(190,18,'Luminor',8500,1,10,1,1,2,2,1,8,44,13.05,11,4),(191,29,'Laureato',9000,2,6,1,1,1,1,1,4,42,10.88,9,4),(192,22,'Fifty Fathoms',12500,1,30,0,0,1,12,1,8,45,15.5,10,4),(193,27,'Octo Finissimo',10000,1,21,0,1,2,3,1,1,40,5.5,7,4),(194,19,'Black Bay',3800,1,17,0,1,1,3,1,7,41,12.7,9,4),(195,18,'Luminor Marina',8900,1,20,1,0,1,3,1,8,44,13.05,9,4),(196,31,'Big Bang',16800,1,14,0,1,2,2,1,4,44,14.5,12,4),(197,20,'Portugieser',6900,5,28,0,1,1,3,1,1,40.9,12.3,6,4),(198,16,'Royal Oak',24500,2,11,1,0,1,1,1,2,41,9.8,6,4),(199,17,'Overseas',19500,5,3,0,1,1,2,1,6,41.5,11,7,4),(200,15,'Classique',24500,5,10,0,1,3,3,1,1,39,8.65,6,4),(201,24,'Altiplano',20800,3,16,0,0,5,3,3,1,38,6,6,4),(202,22,'Fifty Fathoms',13000,1,19,0,1,1,8,1,8,45,15.5,10,4),(203,29,'Laureato',9700,1,24,0,1,1,1,1,4,41,10.88,9,4),(204,23,'Chronomaster',7400,5,8,0,0,1,3,1,2,42,14.05,9,4),(205,4,'Superocean Heritage II',4300,1,24,1,0,1,2,1,7,44,14.2,9,4),(206,5,'Santos de Cartier',6500,5,22,1,0,1,1,1,4,39.8,9.08,6,4),(207,2,'Speedmaster',5500,1,27,0,1,1,3,3,2,42,13.7,6,2),(208,1,'GMT-Master II',9100,1,25,0,1,1,1,1,4,40,12.4,6,4),(209,6,'Master Control',7500,5,3,1,1,1,3,1,2,40,8.8,6,4),(210,16,'Royal Oak',20900,2,19,1,0,1,1,1,2,41,10.4,6,4),(211,20,'Pilot\'s Watch Mark XVIII',4200,1,21,0,0,1,3,1,3,40,10.8,6,4),(212,32,'Calatrava',22000,5,12,0,1,3,3,1,1,39,8.6,6,4),(213,3,'Aquaracer',1700,2,2,1,1,1,1,2,8,32,9.5,1,4),(214,19,'Black Bay',3600,1,15,0,1,1,3,1,7,41,12.7,9,4),(215,1,'Datejust',8900,5,24,1,0,1,13,1,4,36,12.5,6,4),(216,2,'Speedmaster',6800,1,19,1,0,1,1,1,2,42,13.5,6,4),(217,3,'Aquaracer',2600,2,12,1,1,1,1,2,8,43,10.8,7,4),(218,4,'Superocean Heritage',4400,1,22,1,0,1,3,1,7,42,14.35,6,4),(219,5,'Ballon Bleu',13000,5,3,1,1,5,3,1,1,33,9.96,4,4),(220,6,'Master Control',7500,5,3,0,1,1,3,1,2,39,8.5,6,4),(221,19,'Black Bay GMT',4500,1,26,0,1,1,1,1,7,41,14.5,9,4),(222,23,'El Primero',6900,3,21,1,1,1,3,1,4,38,12.45,5,4),(223,11,'HydroConquest',1800,1,1,1,0,1,1,1,8,41,12.65,6,4),(224,12,'Divers Sixty-Five',1500,2,12,1,0,1,3,1,4,40,12.9,6,4),(225,10,'Khaki Field',595,1,30,1,1,1,12,1,4,38,9.7,6,4),(226,18,'Luminor Marina',7500,1,30,0,0,1,3,1,8,42,13.2,9,4),(227,20,'Pilot\'s Watch',5400,1,26,1,1,1,3,1,3,41,15.3,9,4),(228,32,'Calatrava',25000,3,2,1,0,7,3,3,1,37,7.7,6,4),(229,31,'Big Bang',15000,1,8,0,0,11,2,1,4,44,14.5,12,4),(230,23,'Chronomaster',7500,5,7,1,1,1,3,1,2,38,12.6,6,4),(231,16,'Royal Oak',25000,2,11,0,0,1,1,1,2,41,9.8,6,4),(232,17,'Overseas',18000,2,17,1,1,1,1,1,2,41,11,9,4),(233,15,'Classique',20000,5,30,0,0,7,3,1,1,39,8.65,7,4),(234,25,'Marine',8500,2,17,1,0,1,2,1,4,42,12.8,9,4),(235,22,'Fifty Fathoms',10500,1,15,1,1,1,7,1,8,45,15.5,10,4),(236,29,'Laureato',9000,1,17,0,0,1,1,1,4,42,10.88,9,4),(237,32,'Nautilus',51000,2,3,1,0,1,1,1,5,40.8,8.3,7,4),(238,16,'Royal Oak',22000,2,14,1,1,1,1,1,2,41,9.8,6,4),(239,20,'Pilot\'s Watch',7500,1,23,1,1,1,3,1,3,46.2,15,6,4),(240,22,'Fifty Fathoms',14500,1,21,1,1,2,8,1,8,45,15.4,10,4),(241,17,'Overseas',21500,5,26,1,0,1,1,1,6,41,11,9,4),(242,23,'El Primero',7500,1,17,0,1,1,3,1,4,42,12.75,6,4),(243,31,'Big Bang',15000,1,26,0,1,2,2,1,4,44,14.5,9,4),(244,15,'Classique',18000,5,1,1,1,5,3,1,1,39,10.2,9,4),(245,28,'Happy Sport',5000,3,28,1,1,1,3,2,1,30,10.5,3,4),(246,29,'Laureato',11500,2,1,0,0,1,1,1,4,41,10.88,9,4),(247,18,'Luminor Marina',8000,1,23,1,0,1,3,1,8,44,15.65,11,4),(248,19,'Black Bay',3800,1,21,0,1,1,3,1,7,41,14.75,9,4),(249,18,'Luminor',6400,1,22,1,0,1,3,3,4,44,13.05,11,4),(250,20,'Portugieser',8900,5,2,1,0,1,3,1,1,41,12.3,9,4),(251,16,'Royal Oak',20400,2,29,0,1,1,1,1,2,41,9.8,6,4),(252,17,'Overseas',22000,2,22,1,0,1,2,1,6,41,11,7,4),(253,32,'Nautilus',62500,2,23,0,1,1,1,1,5,40.8,8.3,7,4),(254,22,'Fifty Fathoms',14900,1,10,1,0,1,7,1,8,45,15.5,10,4),(255,28,'Mille Miglia',5900,5,24,0,1,1,3,1,2,42,12.67,6,4),(256,11,'Master Collection',1500,5,27,1,1,1,3,1,1,40,9.35,6,4),(257,21,'Heritage',2700,1,26,0,0,1,3,1,2,40,9.85,6,4),(258,23,'El Primero',6500,1,3,0,1,1,3,1,4,42,12.75,6,4),(259,1,'Datejust',7800,2,26,0,0,1,1,1,4,41,11.8,7,4),(260,2,'Speedmaster',5300,1,7,1,0,1,1,1,2,42,13.75,6,4),(261,3,'Monaco',5900,2,12,1,1,1,3,1,4,39,14.5,9,4),(262,4,'Superocean',3800,2,20,0,1,1,2,1,11,44,14.21,9,4),(263,5,'Ballon Bleu',7500,5,6,1,1,1,1,1,1,42,13,9,4),(264,6,'Master Ultra Thin',6200,3,27,1,1,1,3,1,2,39,7.5,6,4),(265,1,'GMT-Master II',9500,1,25,0,0,1,1,1,4,40,12.5,6,4),(266,2,'Aqua Terra',4700,5,1,0,0,1,1,1,6,41.5,13,6,4),(267,3,'Aquaracer',2700,1,13,0,1,1,1,1,8,41,12.5,6,4),(268,4,'Avenger II',4600,1,11,1,0,1,2,1,8,43,16.5,9,4),(269,5,'Santos',5300,5,7,1,0,1,3,1,4,35.1,8.83,9,4),(270,1,'Daytona',39500,6,20,0,0,12,3,1,4,40,12.4,6,4),(271,2,'Speedmaster',5400,1,9,0,0,1,1,3,2,42,14.3,6,4),(272,3,'Monaco',6550,2,6,0,0,1,3,1,4,39,14,9,4),(273,5,'Santos-Dumont',5300,5,28,0,0,1,3,2,1,43.5,7.3,10,4),(274,4,'Superocean',3850,2,2,0,1,1,2,1,11,42,13.32,6,4),(275,32,'Calatrava',25800,5,22,0,1,7,3,1,1,39,8.25,6,4),(276,19,'Black Bay',4100,1,30,1,0,1,8,1,7,41,11.9,9,4),(277,22,'Fifty Fathoms',12900,1,7,0,1,1,2,1,8,45,15.5,10,4),(278,20,'Portugieser',6900,2,17,0,1,1,3,1,1,41,12.3,9,4),(279,17,'Overseas',19800,2,19,1,1,1,2,1,6,41,11,9,4),(280,1,'Datejust',8100,1,17,0,0,1,1,1,4,36,12,6,4),(281,1,'Datejust',6500,1,3,1,0,1,1,1,4,36,12.5,6,4),(282,2,'Speedmaster Moonwatch',5400,1,21,1,0,1,1,3,2,42,14.3,6,2),(283,32,'Nautilus',44000,2,29,1,0,1,1,1,5,40.5,8.3,6,4),(284,5,'Ballon Bleu',13200,5,26,1,1,5,3,1,1,33,9.96,4,4),(285,31,'Classic Fusion',20200,2,17,1,1,13,2,1,2,42,10.5,9,4),(286,16,'Royal Oak',24800,2,6,0,0,1,1,1,2,41,10.4,6,4),(287,20,'Pilot\'s Watch',4800,1,28,0,1,1,3,1,3,41,12.8,9,4),(288,19,'Black Bay GMT',4000,1,17,0,1,1,1,1,7,41,14.5,9,4),(289,15,'Classique',22500,3,30,0,0,3,3,3,1,40,6.95,6,4),(290,22,'Fifty Fathoms',12500,1,1,1,0,1,2,1,8,45,15.4,10,4),(291,28,'Mille Miglia',6900,1,10,0,0,1,3,1,2,42,12.67,9,4),(292,18,'Luminor',7500,1,30,1,0,2,3,1,4,44,15.65,11,4),(293,16,'Royal Oak',25000,2,7,1,1,1,1,1,2,41,10.4,6,4),(294,32,'Nautilus',70000,2,3,1,1,1,1,1,5,40.5,8.3,9,4),(295,20,'Pilot\'s Watch',5500,1,2,0,0,1,3,1,3,41,10.8,6,4),(296,22,'Fifty Fathoms',12000,1,30,0,0,2,8,1,8,45,15.4,10,4),(297,25,'Marine',7500,2,20,1,1,1,2,1,4,44,14.4,9,4),(298,15,'Classique',20000,5,21,0,1,6,3,1,1,38,8.25,6,4),(299,29,'Laureato',8500,1,1,1,0,1,1,1,4,38,10.88,9,4),(300,31,'Big Bang',12000,1,9,0,0,4,2,1,4,42,14.1,11,4),(301,23,'Chronomaster',6000,5,15,1,1,1,3,1,4,42,14.05,6,4),(302,17,'Overseas',12000,2,4,1,0,1,2,1,6,41,11,9,4),(303,16,'Royal Oak',22000,1,28,1,0,1,1,1,2,41,10.4,6,4),(304,31,'Classic Fusion',8500,2,1,0,1,2,2,1,2,42,10.5,9,4),(305,18,'Luminor Marina',7200,1,24,0,0,1,3,3,8,44,15.65,11,4),(306,15,'Classique',16000,5,30,1,1,3,3,3,1,40,6.1,6,4),(307,28,'Happy Sport',5800,5,12,0,0,1,1,2,1,30,7.2,1,4),(308,25,'Marine',8900,2,27,0,1,1,2,1,4,42.2,12.6,9,4),(309,20,'Portugieser Chronograph',7600,3,19,0,1,1,3,1,1,41,13.1,6,4),(310,32,'Nautilus',57000,2,29,1,0,1,1,1,5,40.8,8.3,6,4),(311,21,'1858 Geosphere',6500,1,13,0,0,2,3,1,4,42,12.8,9,4),(312,17,'Overseas',21000,2,25,1,0,1,1,1,6,41.5,11,9,4),(313,23,'Chronomaster El Primero',6000,5,3,1,0,1,3,1,4,38,12.45,6,4),(314,1,'Daytona',29500,7,12,0,1,14,3,1,4,40,12.4,6,4),(315,16,'Royal Oak',36500,2,2,0,0,6,11,1,2,37,9.8,4,4),(316,32,'Nautilus',51000,2,14,0,0,1,1,1,5,40.5,8.3,9,4),(317,20,'Portuguese',8800,3,30,1,0,1,3,1,1,42.3,14.2,9,4),(318,22,'Fifty Fathoms',13500,1,19,0,1,1,2,1,8,45,15.4,10,4),(319,31,'Big Bang',19500,1,21,1,0,11,2,1,4,44,14.5,9,4),(320,25,'Marine',7000,2,4,1,1,1,2,1,4,43,12.6,9,4),(321,15,'Classique',23000,5,14,0,1,3,3,3,1,38,7.45,6,4),(322,29,'Laureato',9500,1,13,0,0,1,1,1,4,42,10.88,12,4),(323,24,'Altiplano',18500,5,8,0,1,3,3,3,1,40,6.36,6,4),(324,17,'Patrimony',22500,5,12,1,0,5,3,3,1,42,7.65,6,4),(325,18,'Luminor Marina',7500,1,7,1,1,1,3,1,8,44,15.65,9,4),(326,20,'Portugieser',6500,2,23,0,0,1,3,1,1,41,12.3,9,4),(327,16,'Royal Oak',20000,2,11,0,0,1,1,1,2,41,9.8,6,4),(328,31,'Big Bang',12000,1,2,0,1,11,2,1,4,44,14.5,13,4),(329,29,'Laureato',6500,2,3,1,1,1,1,1,4,42,10.88,9,4),(330,28,'Mille Miglia',6200,1,10,0,1,1,3,1,2,42,11.43,9,4),(331,17,'Overseas',15000,2,16,0,0,1,1,1,6,41,11,9,4),(332,24,'Altiplano',22000,5,12,1,0,7,3,3,1,40,6.36,6,4),(333,23,'El Primero',5500,1,12,0,0,1,3,1,4,42,12.75,9,4),(334,15,'Classique',19000,5,26,1,1,7,3,1,1,39,10.2,9,4),(335,19,'Black Bay',3500,1,5,0,0,1,3,1,7,41,12.7,9,4),(336,1,'Datejust',7400,2,24,1,0,1,1,1,4,36,12.5,6,4),(337,2,'Speedmaster',5000,1,22,1,0,1,1,1,2,42,14.3,6,2),(338,5,'Santos',6200,5,14,0,1,1,1,1,4,39.8,9.08,6,4),(339,3,'Aquaracer',3100,1,30,0,1,1,1,1,8,43,12.5,7,4),(340,4,'Superocean',4100,2,15,0,0,1,2,1,11,42,13.3,6,4),(341,18,'Luminor Marina',6500,1,9,1,0,1,3,1,8,44,13.05,11,4),(342,19,'Black Bay',3800,1,11,0,0,1,3,1,7,41,12.7,9,4),(343,23,'Elite Classic',4900,5,15,0,1,1,3,1,2,39,8.15,6,4),(344,11,'Conquest Classic',1850,5,23,0,1,1,3,1,2,40,10.75,6,4),(345,21,'Star Legacy',3900,3,28,1,0,1,3,1,2,42,11.4,9,4),(346,37,'Clifton Baumatic',2750,5,5,1,0,1,3,1,2,40,10.3,6,4),(347,1,'Datejust',9500,2,10,0,0,1,13,1,4,41,11.8,6,4),(348,2,'Speedmaster Moonwatch',5350,1,16,0,0,1,1,3,2,42,13.75,6,2),(349,4,'Superocean Heritage',3250,2,11,0,1,1,1,1,7,44,14.2,9,4),(350,5,'Santos-Dumont',14200,5,24,0,0,14,3,3,1,27.5,6.5,4,4),(351,3,'Monaco',4950,2,1,1,1,1,3,1,4,39,14,9,4),(352,6,'Master Control',6500,5,3,1,0,1,3,1,2,40,8.5,6,4),(353,18,'Luminor',8500,1,10,1,0,2,2,3,8,44,15.6,11,4),(354,16,'Royal Oak',27000,2,17,1,0,1,1,1,2,41,10.4,6,4),(355,20,'Portugieser',7250,5,3,1,0,1,3,1,1,40.4,12.3,6,4),(356,32,'Calatrava',25000,3,12,0,1,3,3,3,1,38,8.25,6,4),(357,13,'BR 03-92',3800,1,8,0,0,4,2,1,4,42,9.8,11,4),(358,1,'Datejust',8000,5,26,0,0,1,1,1,4,36,12.5,6,4),(359,2,'Speedmaster',4500,1,15,1,0,1,1,3,2,42,14.3,6,2),(360,32,'Nautilus',52000,2,23,0,1,1,1,1,5,40.8,8.3,6,4),(361,16,'Royal Oak',28500,2,15,0,0,1,1,1,2,41,10.4,6,4),(362,20,'Pilot\'s Watch Mark',6800,1,6,0,1,1,3,1,3,41,12.5,6,4),(363,31,'Big Bang',16000,1,14,0,0,4,2,1,4,42,14.1,11,4),(364,23,'El Primero',6500,1,21,0,0,1,3,1,4,42,12.75,6,4),(365,15,'Classique',19000,5,21,0,0,3,3,1,1,39,8.65,6,4),(366,22,'Fifty Fathoms',13500,1,10,0,1,1,2,1,8,45,15.5,10,4),(367,29,'Laureato',8000,1,5,1,0,1,1,1,4,42,10.88,12,4),(368,26,'Grande Seconde',10000,5,21,0,0,1,3,1,1,43,12.48,10,4),(369,1,'GMT-Master II',9700,1,3,1,1,1,1,1,4,40,12.5,6,4),(370,32,'Nautilus',29800,2,12,0,1,1,1,1,5,40.5,8.3,7,4),(371,2,'Speedmaster',5350,1,3,0,0,1,1,3,2,42,14.3,6,2),(372,16,'Royal Oak',18500,2,14,0,0,1,1,1,2,41,9.8,6,4),(373,20,'Pilot\'s Watch',4950,1,10,1,0,1,3,1,3,43,15,9,4),(374,23,'El Primero',7900,3,20,1,1,1,3,1,4,42,12.75,6,4),(375,5,'Santos-Dumont',4500,5,11,1,1,1,3,3,1,31.4,7.25,4,4),(376,31,'Big Bang',16000,1,5,0,1,2,2,1,4,44,14.5,11,4),(377,29,'Laureato',12800,2,4,0,1,1,1,1,4,42,10.88,9,4),(378,6,'Master Control',8500,5,7,0,0,1,3,1,2,40,8.78,6,4),(379,20,'Portugieser',8500,2,26,0,1,1,3,1,1,41,12.3,9,4),(380,18,'Luminor',7500,1,4,1,1,2,2,1,8,44,13.05,11,4),(381,32,'Nautilus',39000,2,19,1,1,1,1,1,5,40.5,8.3,6,4),(382,16,'Royal Oak',19500,2,12,0,1,1,1,1,2,37,9.8,6,4),(383,31,'Big Bang',13000,1,13,1,0,2,2,1,4,44,14.5,11,4),(384,23,'El Primero',7500,3,20,0,0,1,3,1,4,42,12.75,6,4),(385,17,'Overseas',23000,2,29,0,1,1,1,1,6,41,11,9,4),(386,15,'Classique',24000,5,12,0,1,3,3,3,1,40,6.95,6,4),(387,22,'Fifty Fathoms',11000,1,26,0,1,1,8,1,8,45,15.5,10,4),(388,28,'Mille Miglia',6000,1,11,1,0,1,3,1,2,44,14.45,9,4),(389,1,'Datejust',7500,5,15,1,1,1,1,1,4,36,12,6,4),(390,2,'Speedmaster',6500,1,20,1,0,1,1,1,2,42,13.7,6,4),(391,3,'Aquaracer',3700,2,13,0,0,1,1,1,8,43,13,7,4),(392,4,'Superocean',4500,1,29,1,1,1,2,1,7,44,14.2,9,4),(393,5,'Ballon Bleu',7500,5,7,1,0,1,1,1,1,42,13,9,4),(394,6,'Master Control',6000,5,26,1,1,1,3,1,2,40,8.8,6,4),(395,1,'GMT-Master II',9500,1,28,0,0,1,1,1,4,40,12.5,6,4),(396,2,'Constellation',4800,1,9,1,0,1,1,1,4,39,10.6,6,4),(397,3,'Monaco',5200,2,2,1,0,1,3,1,4,39,14.5,9,4),(398,4,'Chronomat',6900,2,22,0,0,1,1,1,7,44,16.95,9,4),(399,5,'Santos',5500,5,9,0,1,1,1,1,4,35.1,8.83,4,4),(400,1,'Datejust',8000,3,8,0,1,1,1,1,4,41,11.7,6,4),(401,32,'Nautilus',40000,2,21,1,0,1,1,1,5,40.5,8.3,7,4),(402,16,'Royal Oak',18000,2,24,0,1,1,1,1,2,37,9,2,4),(403,20,'Portugieser',7500,3,13,0,0,1,3,1,1,40.4,12.3,9,4),(404,31,'Big Bang',14000,1,17,0,0,2,2,1,4,44,14.5,12,4),(405,22,'Fifty Fathoms',14000,1,16,1,1,1,7,1,8,45,15.4,10,4),(406,15,'Classique',25000,5,13,1,0,6,3,3,1,40,6.8,6,4),(407,6,'Master Ultra Thin',6500,5,8,1,1,1,3,1,2,39,7.8,6,4),(408,23,'El Primero',7000,2,17,0,0,1,1,1,4,42,12.75,6,4),(409,27,'Octo Finissimo',10000,1,4,0,0,2,10,1,1,40,5.15,14,4),(410,29,'Laureato',9000,2,3,1,0,1,1,1,4,42,10.88,9,4),(411,1,'GMT-Master II',9450,1,10,1,0,1,1,1,4,40,12.1,6,4),(412,32,'Nautilus',29800,2,26,1,0,1,1,1,5,40.8,8.3,7,4),(413,16,'Royal Oak',22300,2,8,1,1,1,1,1,2,41,9.8,6,4),(414,31,'Classic Fusion',8100,1,25,1,0,2,2,1,2,42,10.6,9,4),(415,20,'Pilot\'s Watch Mark XVIII',3900,1,24,0,0,1,3,1,3,40,10.8,6,4),(416,34,'Saxonia',23300,5,26,1,0,6,3,3,1,38.5,7.8,4,4),(417,15,'Classique',23200,5,7,1,1,6,3,1,1,39,8.65,6,4),(418,28,'Mille Miglia',6300,1,19,1,0,1,3,1,2,44,14.4,9,4),(419,23,'El Primero',5600,3,16,1,0,1,3,1,4,38,12.45,6,4),(420,18,'Luminor',6900,1,1,0,1,2,3,3,4,44,13.05,11,4),(421,1,'Daytona',13500,3,10,0,1,1,1,1,4,40,12.4,6,4),(422,2,'Speedmaster',4500,1,21,0,0,1,1,3,2,42,14.3,6,2),(423,5,'Santos',6600,5,6,0,0,1,3,1,4,39.8,9.08,6,4),(424,4,'Superocean Heritage',4400,1,9,0,1,1,3,1,7,42,14.35,6,4),(425,3,'Aquaracer',2800,2,2,1,0,1,1,1,8,41,12,6,4),(426,6,'Master Ultra Thin',6300,5,22,0,0,1,3,1,2,40,7.45,6,4),(427,32,'Calatrava',22900,3,20,0,0,5,3,3,1,38,7.68,5,4),(428,16,'Royal Oak',22500,1,6,0,0,1,1,1,2,41,9.8,6,4),(429,23,'El Primero',6900,2,5,0,0,1,1,1,4,42,12.75,6,4),(430,17,'Overseas',20200,1,2,1,1,1,1,1,6,41,11,6,4),(431,20,'Portugieser',7600,5,8,0,0,1,3,1,1,40.4,12.6,6,4),(432,18,'Luminor Marina',6500,1,16,0,1,1,3,1,8,44,15.65,11,4),(433,32,'Nautilus',34000,2,25,1,1,1,1,1,5,40.5,8.3,7,4),(434,16,'Royal Oak',22000,1,7,1,1,1,1,1,2,41,9.8,6,4),(435,20,'Portugieser',9500,3,6,1,1,1,3,1,1,41,12.3,9,4),(436,31,'Big Bang',14000,1,30,0,1,4,2,1,4,41,14.6,6,4),(437,15,'Classique',26000,5,30,0,0,5,3,3,1,39,10.2,9,4),(438,23,'El Primero',7000,5,7,1,1,1,3,1,4,38,12.5,6,4),(439,22,'Fifty Fathoms',10000,1,8,1,0,1,12,1,8,45,15.4,10,4),(440,29,'Laureato',11500,2,3,0,1,1,1,1,4,42,10.88,9,4),(441,25,'Marine',7500,2,15,0,1,1,3,1,4,42.2,12.6,6,4),(442,17,'Overseas',20000,5,17,1,0,1,1,1,6,41.5,11,9,4),(443,32,'Nautilus',26000,2,21,1,1,1,1,1,5,40,8.3,6,4),(444,16,'Royal Oak',17000,8,8,0,0,1,1,1,2,41,10.4,6,4),(445,20,'Portugieser',7800,3,4,0,0,1,3,1,1,42.3,14.2,9,4),(446,34,'Saxonia',17500,5,4,1,0,5,3,3,1,37,7.5,4,4),(447,17,'Overseas',20000,2,30,1,1,1,2,1,6,42.5,13.7,9,4),(448,29,'Laureato',12000,1,5,0,0,1,1,1,4,41,10.88,13,4),(449,23,'El Primero',7500,5,2,0,1,1,3,1,4,42,12.75,9,4),(450,22,'Fifty Fathoms',14000,1,10,0,0,1,2,1,8,45,15.5,10,4),(451,31,'Classic Fusion',9500,2,28,1,1,2,2,1,2,45,10.95,9,4),(452,15,'Classique',22000,5,9,0,1,3,3,3,1,38,8.25,6,4),(453,24,'Polo',10500,2,22,0,0,1,1,1,4,42,9.4,9,4),(454,32,'Nautilus',29000,2,6,0,0,1,1,1,5,40.5,8.3,9,4),(455,16,'Royal Oak',38500,1,19,1,1,6,3,1,2,37,9.8,6,4),(456,31,'Classic Fusion',7500,2,26,0,1,2,2,1,2,42,9.85,9,4),(457,15,'Classique',25000,5,9,0,0,6,3,1,1,39,10.2,6,4),(458,20,'Pilot\'s Watch',5900,1,4,0,0,1,3,1,3,41,15.3,6,4),(459,22,'Fifty Fathoms',12000,1,24,0,0,1,12,1,8,45,15.5,10,4),(460,23,'El Primero',6200,5,21,1,1,1,3,1,4,38,12.45,6,4),(461,28,'Mille Miglia',6800,1,6,1,0,1,2,1,2,42,13.07,6,4),(462,17,'Patrimony',28000,5,21,1,1,7,3,3,1,40,6.79,6,4),(463,18,'Luminor',9500,1,21,1,1,2,3,1,8,44,16.15,11,4),(464,19,'Black Bay',3500,1,21,0,1,1,12,1,7,41,11.9,9,4),(465,18,'Luminor Marina',7200,1,1,0,0,1,3,1,8,42,14.5,9,4),(466,20,'Portugieser',7900,2,2,0,1,1,3,1,1,41,12.3,9,4),(467,32,'Nautilus',36000,2,20,0,0,1,1,1,5,40,8.3,9,4),(468,16,'Royal Oak',28500,2,22,0,0,1,1,1,2,41,10.4,6,4),(469,22,'Fifty Fathoms',15000,1,12,1,1,1,7,1,8,45,15.4,10,4),(470,15,'Classique',26000,5,8,1,0,14,3,1,1,39,10.2,6,4),(471,23,'Chronomaster',6500,2,5,0,1,1,3,1,2,42,13.5,9,4),(472,29,'Laureato',12000,2,6,1,1,1,1,1,4,38,10.88,6,4),(473,31,'Big Bang',18500,1,28,1,1,2,2,1,4,44,14.5,11,4),(474,26,'Grande Seconde',9500,1,13,1,1,1,3,1,1,43,11.48,10,4),(475,21,'Star Legacy',3500,5,22,0,1,1,3,1,2,39,9.9,5,4),(476,1,'GMT-Master II',9900,1,1,0,0,1,1,1,4,40,12.5,6,4),(477,2,'Speedmaster',4300,1,16,1,0,1,1,3,2,42,14.3,6,2),(478,20,'Portugieser',7500,3,12,1,0,1,3,1,1,40.4,12.3,6,4),(479,31,'Big Bang',15500,1,13,1,0,4,2,1,4,44,14.5,11,4),(480,18,'Luminor Marina',5200,1,4,0,0,1,3,3,8,44,13.05,11,4),(481,32,'Calatrava',25000,3,24,1,1,7,3,1,1,37,8.5,4,4),(482,16,'Royal Oak',19500,2,17,1,1,1,1,1,2,41,10.4,6,4),(483,17,'Patrimony',15000,3,17,1,0,6,3,1,1,40,6.79,6,4),(484,22,'Fifty Fathoms',14000,1,25,1,0,2,8,1,8,45,15.4,10,4),(485,29,'Laureato',7500,2,26,1,0,1,1,1,4,42,10.88,12,4),(486,26,'Grande Seconde',8500,3,4,1,0,1,3,1,1,43,11.48,9,4),(487,1,'Datejust',7650,2,1,1,1,1,13,1,4,36,12,6,4),(488,2,'Speedmaster',5200,1,27,0,0,1,1,3,2,42,14.3,6,2),(489,32,'Nautilus',67000,2,3,0,0,1,1,1,5,40.5,8.3,6,4),(490,16,'Royal Oak',25000,2,15,0,1,1,1,1,2,41,9.8,6,4),(491,5,'Ballon Bleu',4700,5,5,1,1,1,1,1,1,36.6,12.05,4,4),(492,20,'Portugieser',9100,2,23,0,1,1,3,1,1,42.3,14.2,9,4),(493,6,'Master Control',8200,5,23,0,1,1,3,1,2,39,8.5,6,4),(494,22,'Fifty Fathoms',12500,1,11,1,1,1,7,1,8,45,15.5,10,4),(495,15,'Classique',27900,3,25,1,1,5,3,1,1,39,9.9,9,4),(496,28,'Mille Miglia',6500,1,3,1,0,1,2,1,2,42,12.67,6,4),(497,7,'Prospex',1200,1,14,1,1,1,9,1,7,44.3,13.1,9,1),(498,19,'Black Bay',3800,1,30,1,1,1,3,1,7,41,14.75,9,4),(499,20,'Pilot\'s Watch',4500,1,15,1,1,1,3,1,3,39,10.86,6,4),(500,18,'Luminor Marina',9500,1,24,0,1,2,2,1,8,44,15.65,11,4),(501,32,'Nautilus',35000,2,17,0,0,1,1,1,5,40.5,8.3,6,4),(502,16,'Royal Oak',24000,1,23,0,1,1,1,1,2,41,10.4,6,4),(503,15,'Classique',21500,3,15,0,1,5,3,1,1,38.5,8.25,6,4),(504,22,'Fifty Fathoms',13500,1,6,1,1,1,8,1,8,45,15.5,10,4),(505,11,'Master Collection',1800,2,6,1,0,1,3,1,1,38.5,9.7,6,4),(506,17,'Overseas',19000,2,10,0,1,1,1,1,6,41.5,11,9,4),(507,36,'Classics',1200,5,6,0,0,1,3,1,2,40,10.6,6,4);
/*!40000 ALTER TABLE `base` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `brandId` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) NOT NULL,
  `description` varchar(1024) NOT NULL,
  PRIMARY KEY (`brandId`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Rolex','A Rolex órák az óragyártás csúcsát képviselik a minőség, a precizitás és a stílus terén. Az exkluzív óramárka híres a legendás időmérőkre jellemző megbízhatóságról és tartósságról. A Rolex órák a legkiválóbb anyagokból készülnek, például rozsdamentes acélból, aranyból vagy platinafémekből, és gyakran egyedi, luxus kiegészítőkkel rendelkeznek, mint például gyémántok vagy drágakövek. Az órák tervezése és gyártása a legmagasabb szinten történik, hogy garantálják a pontos időmérés és a hosszú élettartam. A Rolex órák nemcsak időmérő eszközként szolgálnak, hanem a stílus kifejezésének ikonikus darabjai is, amelyek az elegancia és a presztízs szimbólumai.'),(2,'Omega','Az Omega egy svájci luxusóramárka, amelyet világszerte elismernek a minőség és a stílus terén. Az Omega órák híresek a precíz mechanizmusukról és az ikonikus designjukról, valamint számos híres személyiség kedvencei között találhatók.'),(3,'Tag Heuer','A Tag Heuer egy neves svájci óramárka, amely a precíz időmérés és a sportos stílus ötvözésére összpontosít. Az óramárka különösen híres a motorsportokkal kapcsolatos kapcsolatairól és az innovatív technológiájáról.'),(4,'Breitling','A Breitling ismert a pilóták és a repülés szerelmesei körében, mivel órái kiemelkedő pontosságot és megbízhatóságot nyújtanak, miközben egyedi, sportos stílust képviselnek.'),(5,'Cartier','A Cartier a luxus és az elegancia megtestesítője a divat- és ékszeriparban, és órái sem kivételek. Az ikonikus Cartier órák magas színvonalú anyagokból készülnek, és lenyűgöző művészeti kivitelükkel rendelkeznek.'),(6,'Jaeger-LeCoultre','A Jaeger-LeCoultre a svájci óraművészet egyik legmegbízhatóbb és legkreatívabb háza, amely a legmagasabb színvonalú mechanikus órákat kínálja a világ minden táján.'),(7,'Seiko','A Seiko egy japán óramárka, amely a hagyomány és az innováció tökéletes egyensúlyát képviseli. Az óramárka kínálata magában foglalja a mindennapi viseletre szánt óráktól kezdve a luxus kivitelű időmérőkig.'),(8,'Citizen','A Citizen egy japán óramárka, amely az állandó innováció és a környezetbarát technológiák terén vezető szerepet tölt be. Az óráik pontosak és tartósak, és számos funkciót kínálnak a mindennapi életben.'),(9,'Tissot','A Tissot egy svájci óramárka, amely híres az ár-érték arányával rendelkező minőségi óráiról. A Tissot órák stílusosak és megbízhatóak, és széles választékuk van a sportos, divatos és klasszikus stílusú órákból.'),(10,'Hamilton','A Hamilton egy amerikai óramárka, amelynek történelme a klasszikus filmek és a vasúti ipar világához kapcsolódik. Az óramárka híres a vintage stílusú óráiról és a megbízható mechanizmusairól.'),(11,'Longines','A Longines egy svájci óramárka, amely a hagyomány és az elegancia terén vezető szerepet tölt be. Az óramárka kínálata magában foglalja a klasszikus és sportos stílusú órákat egyaránt, és a precíz időmérésre összpontosít.'),(12,'Oris','Az Oris egy svájci óramárka, amelyet a kiváló minőség és az elérhető ár jellemzett. Az Oris órák funkcionálisak és strapabíróak, és számos kollekciójukban megtalálhatók a sportos, búvár- és pilótaórák is.'),(13,'Bell & Ross','A Bell & Ross óramárka a katonai stílus és a precíz időmérés egyedülálló kombinációját kínálja. Az óráik gyakran inspirációt merítenek repülőgép-műszerekből és a repülés világából, és rendkívül strapabíróak és funkcionálisak.'),(14,'Sinn','A Sinn egy német óramárka, amelyet a magas minőség és a technikai innováció jellemzi. Az óráik kiváló ellenállást biztosítanak a környezeti hatásokkal szemben, és gyakran tartalmaznak különleges funkciókat, mint például a gyorsbeállítású zónaidő és a gyöngyházkerámia burkolat.'),(15,'Breguet','A Breguet az óragyártás csúcsát képviseli a luxus és a művészet terén. Az óramárka híres a klasszikus stílusú óráiról és a kézműves művészetről, és gyakran egyedi funkciókkal, például a turbillonnal és a repeater mechanizmussal rendelkeznek.'),(16,'Audemars Piguet','Az Audemars Piguet egy svájci óramárka, amelyet a kreativitás és a műszaki kifinomultság jellemzi. Az óramárka rendelkezik egyedülálló stílussal és kiváló minőségű mechanizmusokkal, amelyeket a világ számos híressége és óra szerelmese keres.'),(17,'Vacheron Constantin','A Vacheron Constantin az egyik legrégebbi működő óramárka a világon, amely a hagyomány és a kiválóság terén kiemelkedik. Az óráik luxus kivitelben készülnek, és gyakran magukon hordozzák a finom óragyártás évszázados tudományát és kézműves hagyományait.'),(18,'Panerai','A Panerai egy olasz luxusóramárka, amelyet a hajózási és búvárórák eredeti stílusa jellemzi. Az óramárka híres a nagy méretű tokjaikról és az egyszerű, de hatékony kialakításukról.'),(19,'Tudor','A Tudor egy svájci óramárka, amely a Rolex testvércégeként ismert. Az óráikat a minőség, a funkcionalitás és a stílus egyedülálló kombinációja jellemzi, és széles körű kínálatuk van a sportos, búvár- és klasszikus stílusú órákból.'),(20,'IWC','Az International Watch Company (IWC) egy svájci luxusóramárka, amely a hagyomány és az innováció tökéletes egyensúlyát képviseli. Az IWC órák a magas minőségű anyagokból készülnek, és rendkívül precíz mechanizmusokkal rendelkeznek.'),(21,'Montblanc','A Montblanc egy német óramárka, amelyet a klasszikus elegancia és a művészi kivitel jellemzi. Az óramárka híres az exkluzív tervezésű óráiról és a kifinomult stílusáról, amelyek a luxus életmódot képviselik.'),(22,'Blancpain','A Blancpain egy svájci óramárka, amely a hagyományos óragyártás legmagasabb szintjét képviseli. Az óráikat kézi munkával készítik, és gyakran rendelkeznek komplikált mechanizmusokkal és kifinomult kialakítással.'),(23,'Zenith','A Zenith egy svájci óramárka, amely a precizitás és a műszaki kifinomultság terén élen jár. Az óramárka híres a legendás El Primero kronográf mechanizmusáról, amely az első magas frekvenciájú automata kronográf volt a világon.'),(24,'Piaget','A Piaget egy francia luxusóramárka, amely az elegáns és stílusos óráiról ismert. Az óramárka különleges figyelmet fordít a luxus és a kreativitás ötvözésére, és rendszeresen bemutat különleges kivitelű órákat.'),(25,'Ulysse Nardin','Az Ulysse Nardin egy svájci óramárka, amely a tengerészeti hagyományok és az innováció ötvözésére összpontosít. Az óramárka híres a precíz kronométer óráiról és a számos bonyolult funkcióval rendelkező időmérőiről.'),(26,'Jaquet Droz','A Jaquet Droz egy svájci luxusóramárka, amelyet a klasszikus elegancia és a művészi kivitel jellemzi. Az óramárka különleges figyelmet fordít a finom kivitelezésre és a bonyolult mechanizmusokra.'),(27,'Bulgari','A Bulgari egy olasz luxusóramárka, amely az exkluzív design és a kifinomult stílus jellemzője. Az óramárka híres az egyedi és lenyűgöző kialakítású óráiról, amelyek tökéletesen kiegészítik a Bulgari ékszerkollekcióit.'),(28,'Chopard','A Chopard egy svájci óramárka, amelyet a luxus és az elegancia jellemző. Az óramárka híres az exkluzív tervezésű óráiról és a kiváló minőségű anyagok felhasználásáról.'),(29,'Girard-Perregaux','A Girard-Perregaux egy svájci óramárka, amelyet a műszaki kifinomultság és a precizitás jellemzi. Az óramárka híres a bonyolult mechanizmusokkal rendelkező időmérőiről és a klasszikus stílusú óráiról.'),(30,'Glashutte Original','A Glashütte Original egy német óramárka, amelyet a hagyomány és az innováció ötvözése jellemzi. Az óramárka híres a magas minőségű mechanizmusokról és a lenyűgöző kivitelezésről.'),(31,'Hublot','A Hublot egy svájci luxusóramárka, amelyet a modern design és az innovatív anyagok felhasználása jellemzi. Az óramárka híres a nagyméretű tokokról és az egyedi kialakítású óráiról.'),(32,'Patek Philippe','A Patek Philippe a világ egyik leghíresebb és legelismertebb óramárkája, amely a luxus és a kiválóság szinonimája. Az óramárka kézi munkával készült, bonyolult mechanizmusokkal rendelkező órái igazi műremekek.'),(33,'Bulova','A Bulova egy amerikai óramárka, amely a kifinomult stílus és a megbízható teljesítmény egyensúlyát képviseli. Az óramárka kínálata magában foglalja a klasszikus és sportos stílusú órákat egyaránt.'),(34,'A. Lange & Söhne','Az A. Lange & Söhne egy német luxusóramárka, amelyet a művészi kivitel és a kiváló minőség jellemzi. Az óramárka különleges figyelmet fordít a hagyományos óragyártás kézműves technikáira és a magas színvonalú mechanizmusokra.'),(35,'Rado','A Rado egy svájci óramárka, amely az innováció és a kiváló minőség ötvözésére összpontosít. Az óramárka híres a kerámiaóráiról, amelyek tartósak és kifinomultak.'),(36,'Frederique Constant','A Frederique Constant egy svájci óramárka, amelyet a klasszikus design és a megfizethető luxus jellemzi. Az óramárka kínálata magában foglalja a precíz mechanizmusokkal rendelkező elegáns és stílusos órákat.'),(37,'Baume & Mercier','A Baume & Mercier egy svájci óramárka, amely a hagyomány és az elegancia terén élen jár. Az óramárka kínálata magában foglalja a klasszikus és divatos stílusú órákat egyaránt.');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `casematerial`
--

DROP TABLE IF EXISTS `casematerial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `casematerial` (
  `id` int NOT NULL AUTO_INCREMENT,
  `material` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casematerial`
--

LOCK TABLES `casematerial` WRITE;
/*!40000 ALTER TABLE `casematerial` DISABLE KEYS */;
INSERT INTO `casematerial` VALUES (1,'Rozsdamentes acél'),(2,'Titán'),(3,'18 karátos fehérarany'),(4,'Kerámia'),(5,'18 karátos rózsaarany'),(6,'Rózsaarany'),(7,'Fehérarany'),(8,'Csúcstechnológiás kerámia'),(9,'Német tengeralattjáró acél'),(10,'Bronz'),(11,'Szénszál'),(12,'Sárgarany'),(13,'18 karátos arany király'),(14,'18 karátos sárgarany');
/*!40000 ALTER TABLE `casematerial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `date`
--

DROP TABLE IF EXISTS `date`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `date` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `date`
--

LOCK TABLES `date` WRITE;
/*!40000 ALTER TABLE `date` DISABLE KEYS */;
INSERT INTO `date` VALUES (1,1995),(2,1996),(3,1997),(4,1998),(5,1999),(6,2000),(7,2001),(8,2002),(9,2003),(10,2004),(11,2005),(12,2006),(13,2007),(14,2008),(15,2009),(16,2010),(17,2011),(18,2011),(19,2012),(20,2013),(21,2014),(22,2015),(23,2016),(24,2017),(25,2018),(26,2019),(27,2020),(28,2021),(29,2022),(30,2023);
/*!40000 ALTER TABLE `date` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dialcolor`
--

DROP TABLE IF EXISTS `dialcolor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dialcolor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dialcolor`
--

LOCK TABLES `dialcolor` WRITE;
/*!40000 ALTER TABLE `dialcolor` DISABLE KEYS */;
INSERT INTO `dialcolor` VALUES (1,'Fekete'),(2,'Kék'),(3,'Fehér'),(4,'Fekete'),(5,'Ezüst'),(6,'Elefántcsont'),(7,'Pezsgő'),(8,'Szürke');
/*!40000 ALTER TABLE `dialcolor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dialmaterial`
--

DROP TABLE IF EXISTS `dialmaterial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dialmaterial` (
  `id` int NOT NULL AUTO_INCREMENT,
  `material` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dialmaterial`
--

LOCK TABLES `dialmaterial` WRITE;
/*!40000 ALTER TABLE `dialmaterial` DISABLE KEYS */;
INSERT INTO `dialmaterial` VALUES (1,'Hardlex'),(2,'Hesalite'),(3,'Mineral'),(4,'Zafír');
/*!40000 ALTER TABLE `dialmaterial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favourite`
--

DROP TABLE IF EXISTS `favourite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourite` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userIdFK` int NOT NULL,
  `productIdFK` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId_idx` (`userIdFK`),
  KEY `productId_idx` (`productIdFK`),
  CONSTRAINT `productIdX` FOREIGN KEY (`productIdFK`) REFERENCES `base` (`id`),
  CONSTRAINT `userIdX` FOREIGN KEY (`userIdFK`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourite`
--

LOCK TABLES `favourite` WRITE;
/*!40000 ALTER TABLE `favourite` DISABLE KEYS */;
INSERT INTO `favourite` VALUES (1,5,1),(2,2,9),(3,6,50),(4,10,63),(5,1,23);
/*!40000 ALTER TABLE `favourite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `watchId` int NOT NULL,
  `imageId` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `watchId_idx` (`watchId`),
  CONSTRAINT `watchId` FOREIGN KEY (`watchId`) REFERENCES `base` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,'10001.jpg'),(2,1,'10002.jpg'),(3,1,'10003.jpg'),(4,1,'10004.jpg'),(5,1,'10005.jpg'),(6,1,'10006.jpg'),(7,1,'10007.jpg'),(8,1,'10008.jpg'),(9,2,'10001.jpg'),(10,2,'10002.jpg'),(11,2,'10003.jpg'),(12,2,'10004.jpg'),(13,2,'10005.jpg'),(14,2,'10006.jpg'),(15,2,'10007.jpg'),(16,3,'10001.jpg'),(17,3,'10002.jpg'),(18,3,'10003.jpg'),(19,3,'10004.jpg'),(20,3,'10005.jpg'),(21,3,'10006.jpg'),(22,3,'10007.jpg'),(23,4,'10001.jpg'),(24,4,'10002.jpg'),(25,4,'10003.jpg'),(26,4,'10004.jpg'),(27,4,'10005.jpg'),(28,4,'10006.jpg'),(29,4,'10007.jpg'),(30,5,'10001.jpg'),(31,5,'10002.jpg'),(32,5,'10003.jpg'),(33,5,'10004.jpg'),(34,5,'10005.jpg'),(35,5,'10006.jpg'),(36,5,'10007.jpg'),(37,6,'10001.jpg'),(38,6,'10002.jpg'),(39,6,'10003.jpg'),(40,7,'10001.jpg'),(41,7,'10002.jpg'),(42,7,'10003.jpg'),(43,7,'10004.jpg'),(44,7,'10005.jpg'),(45,7,'10006.jpg'),(46,12,'10001.jpg'),(47,12,'10002.jpg'),(48,12,'10003.jpg'),(49,12,'10004.jpg'),(50,12,'10005.jpg'),(51,12,'10006.jpg'),(52,13,'10001.jpg'),(53,13,'10002.jpg'),(54,13,'10003.jpg'),(55,13,'10004.jpg'),(56,13,'10005.jpg'),(57,13,'10006.jpg'),(58,13,'10007.jpg'),(59,15,'10001.jpg'),(60,15,'10002.jpg'),(61,15,'10003.jpg'),(62,15,'10004.jpg'),(63,15,'10005.jpg'),(64,15,'10006.jpg'),(65,15,'10007.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movement`
--

DROP TABLE IF EXISTS `movement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movement` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movement`
--

LOCK TABLES `movement` WRITE;
/*!40000 ALTER TABLE `movement` DISABLE KEYS */;
INSERT INTO `movement` VALUES (1,'Automata'),(2,'Kvarc'),(3,'Manuális'),(4,'Eco-Drive');
/*!40000 ALTER TABLE `movement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderconnbase`
--

DROP TABLE IF EXISTS `orderconnbase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderconnbase` (
  `productId` int NOT NULL,
  `orderId` int NOT NULL,
  `quantity` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`orderId`,`productId`),
  KEY `connBase_idx` (`orderId`),
  KEY `productId_idx` (`productId`),
  CONSTRAINT `orderIdBase` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `productIdBase` FOREIGN KEY (`productId`) REFERENCES `base` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderconnbase`
--

LOCK TABLES `orderconnbase` WRITE;
/*!40000 ALTER TABLE `orderconnbase` DISABLE KEYS */;
INSERT INTO `orderconnbase` VALUES (20,1,4,0),(19,3,6,0),(12,4,1,0),(13,5,1,0),(14,6,2,0),(15,7,1,0),(16,8,5,0),(18,8,5,0),(17,9,4,0);
/*!40000 ALTER TABLE `orderconnbase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `orderDate` datetime NOT NULL,
  `shippingDate` datetime NOT NULL,
  `status` tinyint NOT NULL,
  `paymentId` tinyint NOT NULL,
  `userAddress` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,3,'2024-02-08 09:15:00','2024-02-12 09:15:00',0,0,'3456 Szeged, Rákóczi út 3.'),(2,4,'2024-02-08 12:45:00','2024-02-12 12:45:00',0,0,'2345 Pécs, Alkotmány krt. 4.'),(3,5,'2024-02-08 16:22:00','2024-02-12 16:22:00',0,1,'4567 Győr, Fő tér 5.'),(4,6,'2024-02-08 21:03:00','2024-02-12 21:03:00',1,1,'7890 Miskolc, Kossuth tér 6.'),(5,7,'2024-02-08 05:10:00','2024-02-12 05:10:00',1,0,'8901 Székesfehérvár, Baross u. 7.'),(6,8,'2024-02-08 14:30:00','2024-02-12 14:30:00',1,0,'6789 Veszprém, Jókai u. 8.'),(7,9,'2024-02-08 18:55:00','2024-02-12 18:55:00',0,1,'1234 Szombathely, Bajcsy-Zs. u. 9.'),(8,10,'2024-02-08 07:48:00','2024-02-12 07:48:00',1,1,'2345 Eger, Dobozi út 10.'),(9,1,'2024-02-08 10:20:00','2024-02-12 10:20:00',1,0,'3456 Pécs, Alkotmány krt. 11.'),(10,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(11,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(12,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(13,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(14,NULL,'2024-03-04 20:17:46','2024-03-04 20:17:46',0,1,'Budapest, Kiss utca 10'),(15,NULL,'2024-03-04 20:34:09','2024-03-04 20:34:09',0,1,'Budapest, Kiss utca 10'),(16,NULL,'2024-03-04 20:34:28','2024-03-04 20:34:28',0,1,'Budapest, Kiss utca 10'),(17,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(18,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(19,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(20,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(21,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(22,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(23,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(24,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(25,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(26,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(27,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(28,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(29,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(30,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(31,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(32,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(33,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(34,NULL,'2024-03-04 21:35:18','2024-03-04 21:35:18',0,1,'Budapest, Nagy utca 9'),(35,NULL,'2024-03-04 21:35:38','2024-03-04 21:35:38',0,1,'Budapest, Nagy utca 9'),(36,NULL,'2024-03-04 21:35:50','2024-03-04 21:35:50',0,1,'Budapest, Nagy utca 11'),(37,NULL,'2024-03-04 22:02:40','2024-03-04 22:02:40',0,1,'Budapest, Kiss utca 10'),(38,NULL,'2024-03-04 22:03:43','2024-03-04 22:03:43',0,1,'Budapest, Kiss utca 10'),(39,NULL,'2024-03-04 22:04:33','2024-03-04 22:04:33',0,1,'Budapest, Kiss utca 10'),(40,NULL,'2024-03-04 22:07:31','2024-03-04 22:07:31',0,1,'Budapest, Kiss utca 10'),(42,NULL,'2024-03-04 22:09:19','2024-03-04 22:09:19',0,1,'Budapest, Kiss utca 10'),(43,NULL,'2024-03-04 22:10:16','2024-03-04 22:10:16',0,1,'Budapest, Kiss utca 10'),(44,NULL,'2024-03-04 22:10:34','2024-03-04 22:10:34',0,1,'Budapest, Kiss utca 10'),(45,NULL,'2024-03-04 22:12:15','2024-03-04 22:12:15',0,1,'Budapest, Kiss utca 10'),(46,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(47,NULL,'2024-03-04 22:13:07','2024-03-04 22:13:07',0,1,'Budapest, Kiss utca 10'),(48,NULL,'2024-03-04 22:14:14','2024-03-04 22:14:14',0,1,'Budapest, Kiss utca 10'),(49,NULL,'2024-03-04 22:21:51','2024-03-04 22:21:51',0,1,'Budapest, Kiss utca 10'),(50,NULL,'2024-03-04 22:24:41','2024-03-04 22:24:41',0,1,'Budapest, Kiss utca 10'),(51,NULL,'2024-03-04 22:26:33','2024-03-04 22:26:33',0,1,'Budapest, Kiss utca 10'),(52,NULL,'2024-03-04 22:33:40','2024-03-04 22:33:40',0,1,'Budapest, Kiss utca 10'),(53,NULL,'2024-03-04 22:45:04','2024-03-04 22:45:04',0,1,'Budapest, Kiss utca 10'),(54,NULL,'2024-03-04 22:46:54','2024-03-04 22:46:54',0,1,'Budapest, Kiss utca 10'),(55,NULL,'2024-03-04 22:53:58','2024-03-04 22:53:58',0,1,'Budapest, Kiss utca 10'),(56,NULL,'2024-03-04 22:54:06','2024-03-04 22:54:06',0,1,'Budapest, Kiss utca 10'),(57,NULL,'2023-11-14 12:30:00','2023-11-17 12:30:00',0,1,'123 Main Street, Budapest, Hungary'),(58,NULL,'2024-03-04 23:58:29','2024-03-04 23:58:29',0,1,'Budapest, Kiss utca 10'),(59,NULL,'2024-03-04 23:58:32','2024-03-04 23:58:32',0,1,'Budapest, Kiss utca 10'),(60,NULL,'2024-03-04 23:58:51','2024-03-04 23:58:51',0,1,'Budapest, Kiss utca 10'),(61,NULL,'2024-03-04 23:58:52','2024-03-04 23:58:52',0,1,'Budapest, Kiss utca 10'),(62,NULL,'2024-03-05 00:01:11','2024-03-05 00:01:11',0,1,'Budapest, Kiss utca 10'),(63,NULL,'2024-03-05 00:02:45','2024-03-05 00:02:45',0,1,'Budapest, Kiss utca 10'),(64,NULL,'2024-03-05 00:02:48','2024-03-05 00:02:48',0,1,'Budapest, Kiss utca 10'),(65,NULL,'2024-03-05 00:11:02','2024-03-05 00:11:02',0,1,'Budapest, Kiss utca 10'),(66,NULL,'2024-03-05 08:58:31','2024-03-05 08:58:31',0,1,'Budapest, Kiss utca 10'),(67,NULL,'2024-03-05 09:01:32','2024-03-05 09:01:32',0,1,'Budapest, Kiss utca 10'),(68,NULL,'2024-03-05 09:12:32','2024-03-05 09:12:32',0,1,'Budapest, Kiss utca 10'),(69,NULL,'2024-03-05 09:13:07','2024-03-05 09:13:07',0,1,'Budapest, Kiss utca 10'),(70,NULL,'2024-03-05 09:13:31','2024-03-05 09:13:31',0,1,'Budapest, Kiss utca 10'),(71,NULL,'2024-03-05 09:14:57','2024-03-05 09:14:57',0,1,'Budapest, Kiss utca 10'),(72,NULL,'2024-03-05 09:15:39','2024-03-05 09:15:39',0,1,'Budapest, Kiss utca 10'),(73,NULL,'2024-03-05 09:15:50','2024-03-05 09:15:50',0,1,'Budapest, Kiss utca 10'),(74,NULL,'2024-03-05 09:16:19','2024-03-05 09:16:19',0,1,'Budapest, Kiss utca 10'),(75,NULL,'2024-03-05 09:16:22','2024-03-05 09:16:22',0,1,'Budapest, Kiss utca 10'),(76,NULL,'2024-03-05 09:16:24','2024-03-05 09:16:24',0,1,'Budapest, Kiss utca 10'),(77,NULL,'2024-03-05 09:16:40','2024-03-05 09:16:40',0,1,'Budapest, Kiss utca 10'),(78,NULL,'2024-03-05 09:22:17','2024-03-05 09:22:17',0,1,'Budapest, Kiss utca 10'),(79,NULL,'2024-03-05 09:33:31','2024-03-05 09:33:31',0,1,'Budapest, Kiss utca 10'),(80,NULL,'2024-03-05 09:39:13','2024-03-05 09:39:13',0,1,'Budapest, Kiss utca 10'),(81,NULL,'2024-03-05 09:39:17','2024-03-05 09:39:17',0,1,'Budapest, Kiss utca 10'),(82,NULL,'2024-03-05 09:39:19','2024-03-05 09:39:19',0,1,'Budapest, Kiss utca 10'),(85,NULL,'2024-03-05 09:53:51','2024-03-05 09:53:51',0,1,'Budapest, Kiss utca 10'),(86,NULL,'2024-03-05 11:46:17','2024-03-05 11:46:17',0,1,'Budapest, Kiss utca 10'),(87,NULL,'2024-03-05 12:00:25','2024-03-05 12:00:25',0,1,'Budapest, Kiss utca 10'),(88,NULL,'2024-03-05 12:00:33','2024-03-05 12:00:33',0,1,'Budapest, Kiss utca 10'),(89,NULL,'2024-03-05 12:00:38','2024-03-05 12:00:38',0,1,'Budapest, Kiss utca 10'),(90,NULL,'2024-03-05 12:01:09','2024-03-05 12:01:09',0,1,'Budapest, Kiss utca 10');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roles` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Felhasználó'),(2,'Operátor Admin'),(3,'Szuperadmin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strapmaterial`
--

DROP TABLE IF EXISTS `strapmaterial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `strapmaterial` (
  `id` int NOT NULL AUTO_INCREMENT,
  `material` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strapmaterial`
--

LOCK TABLES `strapmaterial` WRITE;
/*!40000 ALTER TABLE `strapmaterial` DISABLE KEYS */;
INSERT INTO `strapmaterial` VALUES (1,'Rozsdamentes acél'),(2,'Gumi'),(3,'Bőr'),(4,'Textil'),(5,'Jubilee'),(6,'Krokodil'),(7,'Vászon'),(8,'Anyag'),(9,'Szilikon'),(10,'Titánium'),(11,'Rózsaarany'),(12,'NATO szíj'),(13,'Jubilee Bracelet');
/*!40000 ALTER TABLE `strapmaterial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `userEmail` varchar(45) NOT NULL,
  `password` varchar(64) NOT NULL,
  `userPhone` bigint NOT NULL,
  `userVerification` tinyint(1) DEFAULT NULL,
  `userAddress` varchar(255) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `newsletter` tinyint(1) DEFAULT NULL,
  `nonpass` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userEmail_UNIQUE` (`userEmail`),
  UNIQUE KEY `userPhone_UNIQUE` (`userPhone`),
  KEY `roles_idx` (`role`),
  CONSTRAINT `roles` FOREIGN KEY (`role`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kovács János','kovacsjani@gmail.com','0a041b9462caa4a31bac3567e0b6e6fd9100787db2ab433d96f6d178cabfce90',36123456789,0,'1234 Budapest, Kossuth u. 1.',1,0,'user1'),(2,'Nagy Emese','nagyemi@hotmail.com','6cf615d5bcaac778352a8f1f3360d23f02f34ec182e259897fd6ce485d7870d4',36987654321,0,'5678 Debrecen, Petőfi tér 2.',2,0,NULL),(3,'Molnár Misi','molnarmisi@random.hu','5906ac361a137e2d286465cd6588ebb5ac3f5ae955001100bc41577c3d751764',36555666777,0,'3456 Szeged, Rákóczi út 3.',3,0,NULL),(4,'Kiss Sára','kisssaci@gmail.com','5269ef980de47819ba3d14340f4665262c41e933dc92c1a27dd5d01b047ac80e',36222333444,1,'2345 Pécs, Alkotmány krt. 4.',1,0,NULL),(5,'Barta Dániel','bartadan@freemail.com','8b2c86ea9cf2ea4eb517fd1e06b74f399e7fec0fef92e3b482a6cf2e2b092023',36777888999,1,'4567 Győr, Fő tér 5.',2,0,NULL),(6,'Varga Jessica','vargajessz@citromail.com','598a1a400c1dfdf36974e69d7e1bc98593f2e15015eed8e9b7e47a83b31693d5',36111222333,0,'7890 Miskolc, Kossuth tér 6.',1,1,NULL),(7,'Fehér Dávid','feherdave@gmail.com','5860836e8f13fc9837539a597d4086bfc0299e54ad92148d54538b5c3feefb7c',36444555666,0,'8901 Székesfehérvár, Baross u. 7.',1,1,NULL),(8,'Szabó Olivér','szabooliver@gmail.com','57f3ebab63f156fd8f776ba645a55d96360a15eeffc8b0e4afe4c05fa88219aa',36666777888,1,'6789 Veszprém, Jókai u. 8.',1,1,NULL),(9,'Takács Ernő','takacserni@gmail.com','9323dd6786ebcbf3ac87357cc78ba1abfda6cf5e55cd01097b90d4a286cac90e',36333444555,1,'1234 Szombathely, Bajcsy-Zs. u. 9.',1,0,NULL),(10,'Simon Ágnes','simonagi@freemail.com','aa4a9ea03fcac15b5fc63c949ac34e7b0fd17906716ac3b8e58c599cdc5a52f0',36888999000,1,'2345 Eger, Dobozi út 10.',1,1,NULL),(12,'Kiss Feri','feri@gmail.com','a441b15fe9a3cf56661190a0b93b9dec7d04127288cc87250967cf3b52894d11',0,NULL,NULL,NULL,NULL,NULL),(13,'Random Jani','jani@gmail.com','a441b15fe9a3cf56661190a0b93b9dec7d04127288cc87250967cf3b52894d11',1,NULL,NULL,NULL,NULL,NULL),(44,'Mészáros Sándor','isandormeszaros6@gmail.com','11341aaaf764a1598fd0574b852a01cfd70c6ec180ec1b7b5bfe3c930e0efa76',2,NULL,NULL,NULL,NULL,NULL),(45,'Mészáros Sándor','isandormeszaros@gmail.com','11341aaaf764a1598fd0574b852a01cfd70c6ec180ec1b7b5bfe3c930e0efa76',3,NULL,NULL,NULL,NULL,NULL),(57,'Random ','random@gmail.com','6c0db8f0df2848bc8fcf2a3be49f89e8a221f3df7e9be4168fa7dfa26867ffc3',4,NULL,NULL,NULL,NULL,NULL),(58,'Virágka','viragka@gmail.com','26837b01b647b719b793488e1a2fe0d7bba4d174992d5305070512d659b36371',5,NULL,NULL,NULL,NULL,NULL),(59,'Nagysüni','nagysun@gmail.com','fc7d7baab294b73ce9809bd2c25a17267b9748c3b125714da05458bfa33942ad',6,NULL,NULL,NULL,NULL,NULL),(78,'fafdsafsa','isandormeszaros1@gmail.com','443ed65910096ecb0a9f7e7af343c79d2cd155cf18aeb7cd47bb7f118cca38cc',7,NULL,NULL,NULL,NULL,NULL),(80,'fafdsafsa','isandormeszaros11@gmail.com','443ed65910096ecb0a9f7e7af343c79d2cd155cf18aeb7cd47bb7f118cca38cc',8,NULL,NULL,NULL,NULL,NULL),(82,'fafdsafsa','isandormeszaros111@gmail.com','443ed65910096ecb0a9f7e7af343c79d2cd155cf18aeb7cd47bb7f118cca38cc',9,NULL,NULL,NULL,NULL,NULL),(83,'fafdsafsa','isandormeszaros1111@gmail.com','443ed65910096ecb0a9f7e7af343c79d2cd155cf18aeb7cd47bb7f118cca38cc',10,NULL,NULL,NULL,NULL,NULL),(86,'Kiss Béla','bela123@gmail.com','6025d18fe48abd45168528f18a82e265dd98d421a7084aa09f61b341703901a3',36,NULL,NULL,NULL,NULL,NULL),(89,'Kiss Béla','bela1233@gmail.com','6025d18fe48abd45168528f18a82e265dd98d421a7084aa09f61b341703901a3',30,NULL,NULL,NULL,NULL,NULL),(91,'Kiss Béla','bela12133@gmail.com','6025d18fe48abd45168528f18a82e265dd98d421a7084aa09f61b341703901a3',302266285,NULL,NULL,NULL,NULL,NULL),(93,'Kiss Béla','bela121313@gmail.com','6025d18fe48abd45168528f18a82e265dd98d421a7084aa09f61b341703901a3',302263285,NULL,NULL,NULL,NULL,NULL),(95,'Kiss Béla','Rando1m@gmail.com','09ea2f9a0f334cea5a0af7acaa6dee937f80a1e6d9b3a289835fae42b1951133',301266285,NULL,NULL,NULL,NULL,NULL),(98,'Kiss Béla','Rando1m1@gmail.com','09ea2f9a0f334cea5a0af7acaa6dee937f80a1e6d9b3a289835fae42b1951133',302843984,NULL,NULL,NULL,NULL,NULL),(103,'Kiss Béla','Ran1do11m11@gmail.com','09ea2f9a0f334cea5a0af7acaa6dee937f80a1e6d9b3a289835fae42b1951133',302843983,NULL,NULL,NULL,NULL,NULL),(104,'Mészáros Sándor','isandormeszarosx@gmail.com','443ed65910096ecb0a9f7e7af343c79d2cd155cf18aeb7cd47bb7f118cca38cc',309876495,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `waterresistance`
--

DROP TABLE IF EXISTS `waterresistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `waterresistance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `resistance` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `waterresistance`
--

LOCK TABLES `waterresistance` WRITE;
/*!40000 ALTER TABLE `waterresistance` DISABLE KEYS */;
INSERT INTO `waterresistance` VALUES (1,30),(2,50),(3,60),(4,100),(5,120),(6,150),(7,200),(8,300),(9,500),(10,600),(11,1000),(12,2000);
/*!40000 ALTER TABLE `waterresistance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `allbandwidthscount`
--

/*!50001 DROP VIEW IF EXISTS `allbandwidthscount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allbandwidthscount` AS select `bw`.`bandWidth` AS `width`,count(0) AS `watch_count` from ((`brand` `b` left join `base` `w` on((`b`.`brandId` = `w`.`brandId`))) left join `bandwidth` `bw` on((`w`.`bandWidthId` = `bw`.`id`))) group by `bw`.`bandWidth` order by `bw`.`bandWidth` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allbrandscount`
--

/*!50001 DROP VIEW IF EXISTS `allbrandscount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allbrandscount` AS select `b`.`brandId` AS `id`,`b`.`brand` AS `brand`,count(`b`.`brandId`) AS `watch_count` from (`brand` `b` left join `base` on((`b`.`brandId` = `base`.`brandId`))) group by `b`.`brandId`,`b`.`brand` order by `b`.`brand` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allbrandsview`
--

/*!50001 DROP VIEW IF EXISTS `allbrandsview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allbrandsview` AS select distinct `brand`.`brand` AS `brand`,`brand`.`description` AS `description` from `brand` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allcasematerialcount`
--

/*!50001 DROP VIEW IF EXISTS `allcasematerialcount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allcasematerialcount` AS select `cm`.`material` AS `material`,count(0) AS `watch_count` from ((`brand` `b` left join `base` `w` on((`b`.`brandId` = `w`.`brandId`))) left join `casematerial` `cm` on((`w`.`caseMaterialId` = `cm`.`id`))) group by `cm`.`material` order by `watch_count` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `alldatescount`
--

/*!50001 DROP VIEW IF EXISTS `alldatescount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `alldatescount` AS select `d`.`date` AS `date`,count(0) AS `watch_count` from ((`brand` `b` left join `base` `w` on((`b`.`brandId` = `w`.`brandId`))) left join `date` `d` on((`w`.`dateId` = `d`.`id`))) group by `d`.`date` order by `d`.`date` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `alldialcolorscount`
--

/*!50001 DROP VIEW IF EXISTS `alldialcolorscount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `alldialcolorscount` AS select `d`.`color` AS `color`,count(0) AS `watch_count` from ((`brand` `b` left join `base` `w` on((`b`.`brandId` = `w`.`brandId`))) left join `dialcolor` `d` on((`w`.`dialColorId` = `d`.`id`))) group by `d`.`color` order by `watch_count` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `alldialmaterialcount`
--

/*!50001 DROP VIEW IF EXISTS `alldialmaterialcount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `alldialmaterialcount` AS select `d`.`material` AS `material`,count(0) AS `watch_count` from ((`brand` `b` left join `base` `w` on((`b`.`brandId` = `w`.`brandId`))) left join `dialmaterial` `d` on((`w`.`dialMaterialId` = `d`.`id`))) group by `d`.`material` order by `d`.`material` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allfavouriteview`
--

/*!50001 DROP VIEW IF EXISTS `allfavouriteview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allfavouriteview` AS select `f`.`id` AS `id`,concat(`b`.`brand`,' ',`w`.`model`) AS `product`,`f`.`userIdFK` AS `userId` from (((`favourite` `f` join `base` `w` on((`f`.`productIdFK` = `w`.`id`))) join `brand` `b` on((`w`.`brandId` = `b`.`brandId`))) join `users` `u` on((`f`.`userIdFK` = `u`.`id`))) order by `f`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allmovementscount`
--

/*!50001 DROP VIEW IF EXISTS `allmovementscount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allmovementscount` AS select `m`.`movement` AS `movement`,count(0) AS `watch_count` from ((`brand` `b` left join `base` `w` on((`b`.`brandId` = `w`.`brandId`))) left join `movement` `m` on((`w`.`movementId` = `m`.`id`))) group by `m`.`movement` order by `watch_count` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allorderconnbaseview`
--

/*!50001 DROP VIEW IF EXISTS `allorderconnbaseview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allorderconnbaseview` AS select `ocb`.`orderId` AS `orderId`,concat(`b`.`brand`,' ',`w`.`model`) AS `product`,`ocb`.`quantity` AS `quantity` from (((`orderconnbase` `ocb` join `base` `w` on((`ocb`.`productId` = `w`.`id`))) join `brand` `b` on((`w`.`brandId` = `b`.`brandId`))) join `orders` `o` on((`ocb`.`orderId` = `o`.`id`))) order by `o`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allordersview`
--

/*!50001 DROP VIEW IF EXISTS `allordersview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allordersview` AS select `o`.`id` AS `id`,`u`.`name` AS `user`,`o`.`userAddress` AS `address`,`o`.`orderDate` AS `orderDate`,`o`.`shippingDate` AS `shippingDate`,`o`.`status` AS `status`,`o`.`paymentId` AS `payment` from (`orders` `o` join `users` `u` on((`o`.`userId` = `u`.`id`))) order by `o`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allstrapmaterialcount`
--

/*!50001 DROP VIEW IF EXISTS `allstrapmaterialcount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allstrapmaterialcount` AS select `sm`.`material` AS `material`,count(0) AS `watch_count` from ((`brand` `b` left join `base` `w` on((`b`.`brandId` = `w`.`brandId`))) left join `strapmaterial` `sm` on((`w`.`strapMaterialId` = `sm`.`id`))) group by `sm`.`material` order by `watch_count` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `alltablesview`
--

/*!50001 DROP VIEW IF EXISTS `alltablesview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `alltablesview` AS select `w`.`id` AS `id`,concat(`b`.`brand`,' ',`w`.`model`) AS `watchName`,`w`.`price` AS `price`,`dc`.`color` AS `dialColor`,`d`.`date` AS `date`,`w`.`box` AS `box`,`w`.`paper` AS `paper`,`cm`.`material` AS `caseMaterial`,`sm`.`material` AS `strapMaterial`,`m`.`movement` AS `movement`,`w`.`caseDiameter` AS `caseDiameter`,`w`.`caseThickness` AS `caseThickness`,`bw`.`bandWidth` AS `bandWidth`,`dm`.`material` AS `dialMaterial` from ((((((((`base` `w` join `brand` `b` on((`w`.`brandId` = `b`.`brandId`))) join `dialcolor` `dc` on((`w`.`dialColorId` = `dc`.`id`))) join `date` `d` on((`w`.`dateId` = `d`.`id`))) join `casematerial` `cm` on((`w`.`caseMaterialId` = `cm`.`id`))) join `strapmaterial` `sm` on((`w`.`strapMaterialId` = `sm`.`id`))) join `movement` `m` on((`w`.`movementId` = `m`.`id`))) join `bandwidth` `bw` on((`w`.`bandWidthId` = `bw`.`id`))) join `dialmaterial` `dm` on((`w`.`dialMaterialId` = `dm`.`id`))) order by `w`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allusersview`
--

/*!50001 DROP VIEW IF EXISTS `allusersview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allusersview` AS select `u`.`id` AS `id`,`u`.`name` AS `name`,`u`.`userEmail` AS `email`,`u`.`password` AS `password`,`u`.`userPhone` AS `phone`,`u`.`userVerification` AS `verification`,`u`.`userAddress` AS `address`,`r`.`roles` AS `role`,`u`.`newsletter` AS `newsletter` from (`users` `u` join `roles` `r` on((`u`.`role` = `r`.`id`))) order by `u`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `allwaterresistancescount`
--

/*!50001 DROP VIEW IF EXISTS `allwaterresistancescount`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allwaterresistancescount` AS select `wr`.`resistance` AS `resistance`,count(0) AS `watch_count` from ((`brand` `b` left join `base` `w` on((`b`.`brandId` = `w`.`brandId`))) left join `waterresistance` `wr` on((`w`.`waterResistanceId` = `wr`.`id`))) group by `wr`.`resistance` order by `wr`.`resistance` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-05 13:04:33
