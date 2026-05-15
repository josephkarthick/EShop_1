-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: eshop
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `sku` varchar(100) DEFAULT NULL,
  `short_description` text,
  `description` text,
  `category_id` int DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale_price` decimal(10,2) DEFAULT NULL,
  `cost_price` decimal(10,2) DEFAULT NULL,
  `tax_percentage` decimal(5,2) DEFAULT NULL,
  `stock_qty` int DEFAULT NULL,
  `min_stock_alert` int DEFAULT NULL,
  `front_image` varchar(500) DEFAULT NULL,
  `back_image` varchar(500) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `is_featured` tinyint(1) DEFAULT NULL,
  `is_trending` tinyint(1) DEFAULT NULL,
  `is_new_arrival` tinyint(1) DEFAULT NULL,
  `day_of_the_deal` tinyint(1) DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_keywords` text,
  `meta_description` text,
  `weight` decimal(10,2) DEFAULT NULL,
  `length` decimal(10,2) DEFAULT NULL,
  `width` decimal(10,2) DEFAULT NULL,
  `height` decimal(10,2) DEFAULT NULL,
  `average_rating` decimal(3,2) DEFAULT NULL,
  `total_reviews` int DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  UNIQUE KEY `sku` (`sku`),
  KEY `category_id` (`category_id`),
  KEY `ix_products_id` (`id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 15 Pro','iphone-15-pro','APL-IP15PRO','Apple flagship smartphone with A17 Pro chip.','The iPhone 15 Pro features a titanium body, advanced camera system, A17 Pro processor, USB-C connectivity, and premium performance.',1,'Titanium','Natural Titanium','256GB',134999.00,129999.00,120000.00,18.00,25,5,'/media/products/lite-back.png','/media/products/lite.png',1,1,1,1,1,'Buy iPhone 15 Pro Online','iphone 15 pro, apple mobile, smartphone','Buy Apple iPhone 15 Pro with best price and fast delivery.',0.22,15.00,7.00,1.00,0.00,0,'2026-05-14 21:44:54',NULL),(2,'Samsung Galaxy S25','samsung-galaxy-s25','SMS-S25','Samsung premium Android smartphone.','Samsung Galaxy S25 comes with AMOLED display, AI-powered camera, fast processor, and long-lasting battery.',1,'Aluminium','Phantom Black','256GB',99999.00,94999.00,85000.00,18.00,18,5,'/uploads/products/s25-front.jpg','/uploads/products/s25-back.jpg',1,1,1,1,1,'Samsung Galaxy S25','samsung s25, android mobile, galaxy','Latest Samsung Galaxy S25 smartphone with premium features.',0.21,15.00,7.00,1.00,0.00,0,'2026-05-14 21:45:04',NULL),(3,'Men Casual Hoodie','men-casual-hoodie','FSH-HOODIE-01','Comfortable cotton hoodie for men.','Soft cotton hoodie with fleece lining and stylish modern fit for daily wear.',2,'Cotton','Black','L',1499.00,1199.00,800.00,12.00,50,10,'/uploads/products/hoodie-front.jpg','/uploads/products/hoodie-back.jpg',1,0,1,0,1,'Men Casual Hoodie','hoodie, men fashion, cotton hoodie','Premium quality casual hoodie for men.',0.50,35.00,30.00,3.00,0.00,0,'2026-05-14 21:45:08',NULL),(5,'Lakme Face Serum','lakme-face-serum','LKM-SERUM','Hydrating face serum for glowing skin.','Vitamin C enriched serum suitable for all skin types and daily skincare routine.',5,'Liquid','Orange','50ml',799.00,699.00,400.00,18.00,80,10,'/uploads/products/serum-front.jpg','/uploads/products/serum-back.jpg',1,1,0,1,1,'Lakme Vitamin C Face Serum','lakme serum, skincare, vitamin c','Hydrating face serum for healthy glowing skin.',0.10,10.00,4.00,4.00,0.00,0,'2026-05-14 21:45:21',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-16  2:48:51
