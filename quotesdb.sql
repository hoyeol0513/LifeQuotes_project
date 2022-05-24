DROP DATABASE IF EXISTS exam1;
CREATE DATABASE exam1;
USE exam1;
DROP TABLE IF EXISTS lifequotes;
CREATE TABLE lifequotes(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    reg_Date DATETIME NOT NULL,
    content VARCHAR(200) NOT NULL,
    writer VARCHAR(100) NOT NULL
 );
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-01 12:12:12",
 content = "삶이 있는 한 희망은 있다.",
 writer = "키케로";
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-02 12:12:12",
 content = "산다는 것 그것은 치열한 전투이다.",
 writer = "로망로랑";
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-03 12:12:12",
 content = "언제나 현재에 집중할 수 있다면 행복할 것이다.",
 writer = "파울로 코엘료";
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-04 12:12:12",
 content = "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해.",
 writer = "찰리 채플린";
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-05 12:12:12",
 content = "신은 용기있는 자를 결코 버리지 않는다.",
 writer = "켄러";
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-06 12:12:12",
 content = "피할 수 없으면 즐겨라",
 writer = "로버트 엘리엇";
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-07 12:12:12",
 content = "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
 writer = "엘사 맥스웰";
 
  INSERT INTO lifequotes
 SET reg_Date = "2022-10-08 12:12:12",
 content = "먼저 핀 꽃은 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다.",
 writer = "채근담";
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-09 12:12:12",
 content = "절대 어제를 후회하지 마라. 인생은 오늘의 내안에 있고 내일은 스스로 만드는 것이다.",
 writer = "L.론허바드";
 
 INSERT INTO lifequotes
 SET reg_Date = "2022-10-10 12:12:12",
 content = "한번의 실패와 영원한 실패를 혼동하지 마라.",
 writer = "F.스콧 핏제랄드";
 
 SELECT * FROM lifequotes;

ALTER TABLE lifequotes ADD COLUMN hit INT NOT NULL;