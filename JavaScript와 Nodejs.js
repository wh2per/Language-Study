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

3. 쿼리스트링 (get 방식)
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
에러 로그 : pm2 log
서버 목록 : pm2 list
서버 중지 : pm2 stop main.js
서버 재시작 : pm2 restart main.js
서버 삭제 : pm2 delete main.js
* 소스코드 수정 시 자동 재시작 : pm2 start main.js --watch

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
POST 데이터를 title과 description 변수에 저장한 후 fs.writeFile() 실행
첫번째 인자는 저장할 경로(파일이름), 두번째 인자는 내용
ex)
fs.writeFile(`data/${title}`, description, 'utf8', function(err){
  response.writeHead(200);
  response.end('success');
});

16. 페이지 리다이렉션
response.writeHead()의 첫번째 인자를 302 // 다른 페이지로 보낸다는 신호
두번째 인자에는 보낼 페이지의 주소
ex)
response.writeHead(302, {Location: `/?id=${title}`});

17. 기존 파일 이름 및 내용 수정
기존 파일 이름(id)를 새로운 이름(title)로 수정할 때는 fs.rename() 사용
파일의 내용은 fs.writeFile()로 수정
ex)
fs.rename(`data/${id}`,`data/${title}`,function(error){
  fs.writeFile(`data/${title}`, description, 'utf8', function(err){
    response.writeHead(302, {Location: `/?id=${title}`});
    response.end();
  });

18. 글 삭제 버튼
delete 기능은 get 방식으로 구현하면 안됨!
form 태그를 이용하여 post 방식으로 구현하자
ex)
<form action="delete_process" method="post">
  <input type="hidden" name = "id" value = "${title}">
  <input type="submit" value="delete">
</form>>

19. 파일 삭제
fs.unlink()에 파일 경로와 콜백함수를 넣어서 실행
ex)
fs.unlink(`data/${id}`,function(error){
  response.writeHead(302, {Location: `/`});
  response.end();
});

20. 객체 모듈화
객체를 모듈화 하여 다른 파일에서 사용할 수 있다
ex)
* mpart.js
var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}
module.exports = M;   // M이라는 객체를 이 모듈 바깥에서 사용할 수 있도록 export한다는 뜻

* muse.js
var part = require('./mpart.js');
part.f();

21. 입력정보 보안 방법
readFile()에 첫 번째 인자를 var filteredId = path.parse(queryData.id).base; 로 대체
path.parse().base 를 이용해 쿼리스트링을 숨기자!
ex)
var path = requeir('path');
var filteredId = path.parse(queryData.id).base;
fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
  // 파일 읽기
});

22. 출력정보 보안 방법
sanitizeHtml() 을 이용하여 출력 시 스크립트 부분을 제거한다
게시판에 강제로 스크립트를 적어서 submit해도 걸러진다
HTML 태그는 거르고 내용은 살려준다
ex)
fs.readdir('./data', function(error, filelist){
  var filteredId = path.parse(queryData.id).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
    var title = queryData.id;
    var sanitizedTitle = sanitizeHtml(title);
    var sanitizedDescription = sanitizeHtml(description, {allowedTags:['h1']});
    var list = template.List(filelist);
    var HTML = template.HTML(sanitizedTitle, list,
      `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
      `<a href = "/create">create</a>
      <a href = "/update?id=${sanitizedTitle}">update</a>
      <form action="delete_process" method="post">
        <input type="hidden" name = "id" value = "${sanitizedTitle}">
        <input type="submit" value="delete">
      </form>`
    );
    response.writeHead(200);
    response.end(HTML);
  });
});

* 허용할 태그는 객체로 만들어 sanitizeHtml() 함수의 두 번째 인자로 넘겨준다
ex)
var sanitizedDescription = sanitizeHtml(description, {allowedTags:['h1']});

* sanitize-html 설치 방법
해당 프로젝트 경로에 간후 cmd창에 npm init을 입력
npm install -S sanitize-html    // -S는 해당 프로젝트만 적용, -g는 전역으로 설치
