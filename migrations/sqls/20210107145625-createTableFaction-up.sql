/* Replace with your SQL commands */
CREATE TABLE `Factions` (
  `idfaction` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `race` varchar(255) DEFAULT NULL,
  `namefaction` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idfaction`)
) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;