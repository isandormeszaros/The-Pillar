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
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int NOT NULL,
  `image_brand_id` int DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_image_brand` (`image_brand_id`),
  CONSTRAINT `fk_image_brand` FOREIGN KEY (`image_brand_id`) REFERENCES `brand` (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,1,'10001.jpg'),(2,1,'10002.jpg'),(3,1,'10003.jpg'),(4,1,'10004.jpg'),(5,1,'10005.jpg'),(6,1,'10006.jpg'),(7,1,'10007.jpg'),(8,1,'10008.jpg'),(9,2,'10001.jpg'),(10,2,'10002.jpg'),(11,2,'10003.jpg'),(12,2,'10004.jpg'),(13,2,'10005.jpg'),(14,2,'10006.jpg'),(15,2,'10007.jpg'),(16,3,'10001.jpg'),(17,3,'10002.jpg'),(18,3,'10003.jpg'),(19,3,'10004.jpg'),(20,3,'10005.jpg'),(21,3,'10006.jpg'),(22,3,'10007.jpg'),(23,4,'10001.jpg'),(24,4,'10002.jpg'),(25,4,'10003.jpg'),(26,4,'10004.jpg'),(27,4,'10005.jpg'),(28,4,'10006.jpg'),(29,4,'10007.jpg'),(30,5,'10001.jpg'),(31,5,'10002.jpg'),(32,5,'10003.jpg'),(33,5,'10004.jpg'),(34,5,'10005.jpg'),(35,5,'10006.jpg'),(36,5,'10007.jpg'),(37,6,'10001.jpg'),(38,6,'10002.jpg'),(39,6,'10003.jpg'),(40,7,'10001.jpg'),(41,7,'10002.jpg'),(42,7,'10003.jpg'),(43,7,'10004.jpg'),(44,7,'10005.jpg'),(45,7,'10006.jpg'),(46,12,'10001.jpg'),(47,12,'10002.jpg'),(48,12,'10003.jpg'),(49,12,'10004.jpg'),(50,12,'10005.jpg'),(51,12,'10006.jpg'),(52,13,'10001.jpg'),(53,13,'10002.jpg'),(54,13,'10003.jpg'),(55,13,'10004.jpg'),(56,13,'10005.jpg'),(57,13,'10006.jpg'),(58,13,'10007.jpg'),(59,15,'10001.jpg'),(60,15,'10002.jpg'),(61,15,'10003.jpg'),(62,15,'10004.jpg'),(63,15,'10005.jpg'),(64,15,'10006.jpg'),(65,15,'10007.jpg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-31 13:35:58
