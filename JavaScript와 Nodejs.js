1. 웹서버 만들기 기본코드
ex)
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){   // request : 웹브라우저가 보낸 정보
    var url = request.url;                                // response : 웹브라우저에게 전송할 정보
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);

2. 템플릿 리터럴
스트링 리터럴처럼 \n\n을 하지 않아도 직관적으로 사용하기 편함
* 작은 따옴표가 아닌 ``을 사용!!!
ex)
var name = 'k8805';
var letter = `Dear ${name}

asdfasdf
`;
console.log(letter);
>> Dear k8805

asdfasdf

3. 쿼리스트링
http://127.0.0.1:3000/?id=HTML에서 ?뒤의 문자열을 쿼리스트링이라고 한다
ex)
var http = require('http');
var fs = require('fs');
var url = require('url');       // 모듈 URL

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);      // 이것이 쿼리스트링
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);

});
app.listen(3000);

4. response.end();
인자로 넣은 값이 출력됨
fetch에서 쓰는 innerHTML 같은 느낌
ex)
var template = `
<!doctype html>
<html>
<head>
<title>WEB1 - ${title}</title>
<meta charset="utf-8">
</head>
<body>
<h1><a href="/">WEB</a></h1>
<ol>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
</ol>
<h2>${title}</h2>
<p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
<img src="coding.jpg" width="100%">
</p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
</p>
</body>
</html>
`;
response.end(template);

5. 파일에 본문을 저장하고, Node.js의 파일 읽기 기능(fs.readFile)을 이용해서 본문을 생성하는 방법
readFile();
파일읽기를 통해 동적페이지를 구현할 수 있다
여러 HTML파일의 본문을 한 폴더에 모아두고 파일을 읽어오도록 하자
ex)
var fs = require('fs');
fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${description}</p>     // description에는 읽은 HTML 값이 들어있음
    </body>
    </html>
    `;
    response.end(template);
  })

6. 콘솔 환경에서 앱을 실행할 때 입력 값을 전달하는 방법
node ex.js wh2per
ex)
var args = process.argv;
console.log(args);
>> [ 'C:\\Program Files\\nodejs\\node.exe',
'C:\\Bitnami\\wampstack-7.3.7-0\\apache2\\htdocs\\nodejs\\ex.js',
'wh2per' ]
// nodejs 런타임의 위치, 실행시킨 파일의 경로, 입력한 입력값 순으로 배열형태로 반환
// 즉 2번째 값부터가 입력값이 됨!!

7. url.parse(_url,true)
ex)
Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: null,
    query: [Object: null prototype] {},
    pathname: '/',
    path: '/',
    href: '/' }

8. 존재하지 않는 정보에 대한 요청이 들어왔을 때 Not found 오류 메시지를 전송하는 방법
ex)
var pathname = url.parse(_url,true).pathname;
if(pathname === '/'){
  // HTML 출력
  response.writeHead(200);   // 파일을 성공적
}else{
  response.writeHead(404);  // 파일을 찾을 수 없을때
  response.end('not found');
}

9. 조건문을 활용해서 홈페이지를 표현하는 방법
queryData.id 가 undefined 인지 조건문으로 검사하여 홈페이지를 표현
ex)
if(pathname === '/'){   // path가 없는 경우라면
  if(queryData.id === undefined){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    // HTML 출력
    response.writeHead(200);   // 파일을 성공적
  }else{
    // HTML 출력
    response.writeHead(200);   // 파일을 성공적
  }
}else{
  response.writeHead(404);  // 파일을 찾을 수 없을때
  response.end('not found');
}

10. 특정 디렉토리 하위에 있는 파일과 디렉토리의 목록 출력
ex)
var testFolder = './data';
var fs = require ('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})

11. 디렉토리에 있는 파일들의 이름을 이용해서 글 목록을 생성하는 기능
ex)
fs.readdir('./data', function(error, filelist){
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
  var template = `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}                         // 생성한 리스트 HTML코드를 삽입
    <h2>${title}</h2>
    <p>${description}</p>
  </body>
  </html>
  `;
  response.writeHead(200);
  response.end(template);
})

12. nodejs 비동기 처리 방식
* 동기
ex)
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
>> A
>> B
>> C

* 비동기
ex)
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
>> A
>> C
>> B

13. nodejs callback 함수
ex)
var a = function(){
  console.log('A');
}
function slowfunc(callback){
  callback();
}
slowfunc(a);
>> A

13. PM2(패키지 매니저) 사용법
서버 시작 : pm2 start main.js
모니터 : pm2 monit
서버 목록 : pm2 list
서버 중지 : pm2 stop main.js
서버 재시작 : pm2 restart main.js
서버 삭제 : pm2 delete main.js

14. POST 방식으로 전송된 데이터를 받아서 파일로 저장하는 방법
* request.on('data',function(data){});
데이터가 엄청나게 많으면 데이터를 쪼개서 수신하여 콜백함수 실행
ex)
var body = '';
request.on('data',function(data){
    body = body + data;
});

* request.on('end',function(data){});
데이터 수신이 끝나면 콜백함수 실행
ex)
var qs = require('querystring');

request.on('end',function(data){
  var post = qs.parse(body);
  console.log(post);
});
>> { title : 'A', description : 'B'}

15. 전송된 POST 데이터를 받아서 파일에 저장
