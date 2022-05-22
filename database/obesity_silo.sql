-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2022 at 09:27 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `obesity silo`
--

-- --------------------------------------------------------

--
-- Table structure for table `clinicalrecordunit`
--

CREATE TABLE `clinicalrecordunit` (
  `clinicalRecordUnitId` int(15) NOT NULL,
  `clinicalName` text NOT NULL,
  `clinicalUnit` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medicationprescription`
--

CREATE TABLE `medicationprescription` (
  `medPreId` int(15) NOT NULL,
  `medRecId` int(15) NOT NULL,
  `medRedDateTime` date NOT NULL,
  `patientMRNO` int(15) NOT NULL,
  `Liraglutide` varchar(25) NOT NULL,
  `Naltroxone_Buporpion` varchar(25) NOT NULL,
  `Orlistat` varchar(25) NOT NULL,
  `Phentermine` varchar(25) NOT NULL,
  `Topiramate` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medicationrecommendation`
--

CREATE TABLE `medicationrecommendation` (
  `medRecId` int(15) NOT NULL,
  `medRecDateTime` date NOT NULL,
  `patientMRNO` int(15) NOT NULL,
  `Liraglutide` varchar(25) NOT NULL,
  `Naltroxone_Buporpion` varchar(25) NOT NULL,
  `Orlistat` varchar(25) NOT NULL,
  `Phentermine` varchar(25) NOT NULL,
  `Topiramate` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medicationunit`
--

CREATE TABLE `medicationunit` (
  `medicationUnitId` int(15) NOT NULL,
  `medicationName` text NOT NULL,
  `medicationUnit` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patientclinicalrecord`
--

CREATE TABLE `patientclinicalrecord` (
  `ptClinicalRecId` int(15) NOT NULL,
  `patientMRNO` int(15) NOT NULL,
  `recordDateTime` date NOT NULL,
  `WBC` float NOT NULL,
  `RBC` float NOT NULL,
  `Hemoglobin` float NOT NULL,
  `Hematocrit` float NOT NULL,
  `Platelet` float NOT NULL,
  `Segmented_neutrophil` varchar(25) NOT NULL,
  `Lymphocytes` float NOT NULL,
  `Monocytes` float NOT NULL,
  `Eosinophils` float NOT NULL,
  `Basophis` float NOT NULL,
  `BUN` float NOT NULL,
  `creatinine` varchar(25) NOT NULL,
  `eGFR` varchar(25) NOT NULL,
  `AST` float NOT NULL,
  `ALT` float NOT NULL,
  `GGT` float NOT NULL,
  `Uric acid` float NOT NULL,
  `Protein` float NOT NULL,
  `Albumin` float NOT NULL,
  `Cholesterol` float NOT NULL,
  `Triglyceride` float NOT NULL,
  `HDL` float NOT NULL,
  `LDL` float NOT NULL,
  `HbA1c` varchar(25) NOT NULL,
  `Bioimpedence` varchar(25) NOT NULL,
  `SBP` int(15) NOT NULL,
  `DBP` int(15) NOT NULL,
  `RGLevel` float NOT NULL,
  `FGLevel` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patientprofile`
--

CREATE TABLE `patientprofile` (
  `patientId` int(11) NOT NULL,
  `patientName` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dateOfBirth` varchar(255) DEFAULT NULL,
  `height` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `dateOfRegistration` varchar(255) DEFAULT NULL,
  `SBP` varchar(25) DEFAULT NULL,
  `DBP` varchar(25) DEFAULT NULL,
  `RGLevel` varchar(255) DEFAULT NULL,
  `FGLevel` varchar(255) DEFAULT NULL,
  `smoker` varchar(255) DEFAULT NULL,
  `alcoholic` varchar(255) DEFAULT NULL,
  `familyHeartHistory` varchar(255) DEFAULT NULL,
  `kidneyIssue` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patientprofile`
--

INSERT INTO `patientprofile` (`patientId`, `patientName`, `gender`, `dateOfBirth`, `height`, `weight`, `dateOfRegistration`, `SBP`, `DBP`, `RGLevel`, `FGLevel`, `smoker`, `alcoholic`, `familyHeartHistory`, `kidneyIssue`) VALUES
(1, 'Gujjariya', 'Female', '22/4/2022', '23', '10', 'LOLLAA', '46', '38', '48', '487', 'true', 'true', 'Very Bad', 'Yes'),
(2, 'Khawar Boink', 'Male', '22/4/2022', '23', '10', '2022-05-22 19:15:18', '46', '38', '48', '487', 'true', 'true', 'Very Bad', 'Yes'),
(3, 'Saad Gamer', 'Male', '22/4/2022', '23', '10', '2022-05-22 19:15:53', '46', '38', '48', '487', '', '', 'Very Bad', 'Yes'),
(4, 'BONDA', 'Female', '2/15/2022', '45', '56', '2022-05-22 19:18:54', '45', '34', '67', '56', '', '', '32', '23'),
(5, 'Khawar Boink', 'Female', '2134', '4345', '45', '2022-05-22 20:08:59', '45', '76', '234', '345', 'true', 'true', '234', '345');

-- --------------------------------------------------------

--
-- Table structure for table `recordrule`
--

CREATE TABLE `recordrule` (
  `recRuleId` int(15) NOT NULL,
  `recIndex` int(15) NOT NULL,
  `WBC` float NOT NULL,
  `RBC` float NOT NULL,
  `Hemoglobin` float NOT NULL,
  `Hematocrit` float NOT NULL,
  `Platelet` float NOT NULL,
  `Segmented_neutrophil` varchar(25) NOT NULL,
  `Lymphocytes` float NOT NULL,
  `Monocytes` float NOT NULL,
  `Eosinophils` float NOT NULL,
  `Basophis` float NOT NULL,
  `BUN` float NOT NULL,
  `creatinine` float NOT NULL,
  `eGFR` float NOT NULL,
  `AST` float NOT NULL,
  `ALT` float NOT NULL,
  `GGT` float NOT NULL,
  `Uric acid` float NOT NULL,
  `Protein` float NOT NULL,
  `Albumin` float NOT NULL,
  `Cholesterol` float NOT NULL,
  `Triglyceride` float NOT NULL,
  `HDL` float NOT NULL,
  `LDL` float NOT NULL,
  `HbA1c` varchar(25) NOT NULL,
  `Bioimpedence` varchar(25) NOT NULL,
  `SBP` float NOT NULL,
  `DBP` float NOT NULL,
  `RGLevel` float NOT NULL,
  `FGLevel` float NOT NULL,
  `Surgery` varchar(25) NOT NULL,
  `Lifestyle` varchar(25) NOT NULL,
  `Medication` varchar(25) NOT NULL,
  `Liraglutide` varchar(25) NOT NULL,
  `Naltroxone_Buporpion` varchar(25) NOT NULL,
  `Orlistat` varchar(25) NOT NULL,
  `Phentermine` varchar(25) NOT NULL,
  `Topiramate` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `userLoginId` int(15) NOT NULL,
  `userLoginName` text NOT NULL,
  `password` varchar(25) NOT NULL,
  `userRole` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`userLoginId`, `userLoginName`, `password`, `userRole`) VALUES
(1000, 'Saad Subhani', '1234', 'Admin'),
(1002, 'Humza Khawar', '1234', 'Admin'),
(1003, 'Afrasiyab', 'gujjar123', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `roleId` int(15) NOT NULL,
  `roleName` varchar(25) NOT NULL,
  `roleAccess` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patientprofile`
--
ALTER TABLE `patientprofile`
  ADD PRIMARY KEY (`patientId`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`userLoginId`),
  ADD UNIQUE KEY `UC_username` (`userLoginName`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patientprofile`
--
ALTER TABLE `patientprofile`
  MODIFY `patientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
