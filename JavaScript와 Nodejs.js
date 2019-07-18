1. 웹서버 만들기 기본코드
ex)
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
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
