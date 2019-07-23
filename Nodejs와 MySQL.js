1. mysql 모듈 설치
해당 프로젝트 경로에서 cmd창에 npm install -S mysql

2. mysql root계정 연결 시 Access Denied 에러 시
새로운 계정을 만들고 권한을 부여하자
ex)
create user 'nodejs'@'%' identified by '111111';    // %를 사용하면 어떤 호스트에서든 접근 가능
select user,host from mysql.user;      // user 목록 확인 쿼리
grant all privileges on opentutorials.* to 'nodejs'@'%';    // opentutorials의 모든 타입의 권한을 줌
flush privileges;       // 위 설정을 데이터베이스에 적용

3. nodejs에서 mysql 연결
ex)
var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'nodejs',
  password : '111111',
  database : 'opentutorials'
});
db.connect();

4. query 던지기
정보가 들어있는 객체가 배열로 형성되어 결과값으로 반환됨
ex)
db.query(`select * from topic`,function(error, topics){
  console.log(topics);
  response.writeHead(200);
  response.end('Success');
});

5. query 던지는 중 에러 발생 처리
throw 를 사용하여 에러메세지를 출력하고 애플리케이션을 즉시 중단할 수 있음
ex)
db.query(`select * from topic`,function(error, topics){
  if(error){
    throw error;
  }
});

6.
