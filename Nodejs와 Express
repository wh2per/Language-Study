1. Express란?
익스프레스(Express.js)는 노드(NodeJS) 상에서 동작하는 웹 개발 프레임웍입
미들웨어(Middleware) 구조 때문에 가볍고 유연하게 웹 프레임웍을 구성할 수 있는 장점

2. Express 설치 방법
해당 프로젝트 경로에 간후 cmd창에 npm init을 입력
npm install -S express   // -S는 해당 프로젝트만 적용, -g는 전역으로 설치

3. express의 route방식
query string을 사용하지 않는 pretty url(clean url, semantic url..)로 라우트 기능을 구현
* app.METHOD(PATH, HANDLER)
app은 express의 인스턴스
METHOD는 HTTP 요청 메소드
PATH는 서버에서의 경로
HANDLER는 라우트가 일치할 때 실행되는 함수

4. 간단한 route의 정의
* 홈 페이지에서 Hello World!로 응답
ex)
app.get('/', function (req, res) {
  res.send('Hello World!');
});

* 애플리케이션의 홈 페이지인 루트 라우트(/)에서 POST 요청에 응답
ex)
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

* /user 라우트에 대한 PUT 요청에 응답
ex)
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

* /user 라우트에 대한 DELETE 요청에 응답
ex)
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

5. express를 통해 코드의 모듈화가 가능
기존 http.createServer(request, response) 함수 안에 한번에 짰던 코드를 잘게 쪼갠 함수 형태로 바꿀 수 있음
ex)
app.get('/', function (request, response) {       //  기존 pathname == '/' 의 queryData.id == undefined일 때
  fs.readdir('./data', function(error, filelist){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`
    );
    response.send(html);
  });
});

6. Route Parameters
route.get() 함수의 파라미터를 통해 사용자가 입력한 값들을 req.params 객체에 담을 수 있다
ex)
// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
app.get('/users/:userId/books/:bookId', function (req, res) {       // users/ 다음에 나온 수를 userId라는 이름을 붙인다는 뜻. bookId도 마찬가지
  res.send(req.params)
})

7. URL path 방식으로 파라미터를 전달하는 것을 처리하는 routing 기법
routing은 URI 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것
기존 상세보기 페이지 구현을 URL path 방식으로 전달
ex)
* main.js
app.get('/page/:pageId',function(request, response){
  fs.readdir('./data', function(error, filelist){
    var filteredId = path.parse(request.params.pageId).base;        // queryData.id를 request.params.pageId로 수정
    ...
  });
});

* template.js
module.exports = {
  list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;   // 기존 ?=id를 /page/로 구성
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}

8. express의 리다이렉션 기능
ex)
// response.writeHead(302, {Location:`/`});
// response.end();
response.redirect('/');

9. 미들웨어(Middleware)란?
응용 소프트웨어가 운영체제로부터 제공받는 서비스 이외에 추가적으로 이용할 수 있는 서비스를 제공하는 컴퓨터 소프트웨어
* third-party Middleware
express에서 만들지 않은(남들이 만든) Middleware
ex) body-parser, compression, cookie-parser, ...

10. body-parser
사용자가 전송한 post 데이터를 내부적으로 분석해서 쉽게 가공해주는 파서
app.use() 함수를 통해 미들웨어를 실행하면 main.js가 실행될때마다 bodyParser가 만드는 미들웨어가 실행됨
app.post()의 콜백함수 첫번째 파라미터인 request에 body라는 객체가 추가됨. ex) request.body
ex)
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
