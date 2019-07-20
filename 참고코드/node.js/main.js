var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = requeir('path');
var template = require('./lib/template.js');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){       // 기본화면
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = template.List(filelist);
          var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href = "/create">create</a>`
          );
          response.writeHead(200);
          response.end(html);
        });
      } else {              // 글 목록 불러오기
        fs.readdir('./data', function(error, filelist){
          var filteredId = path.parse(queryData.id).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = queryData.id;
            var sanitizedTitle = sanitizeHtml(title);
            var sanitizedDescription = sanitizeHtml(description);
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
      }
    } else if(pathname === '/create'){      // 글 생성 입력 받기 폼
      fs.readdir('./data', function(error, filelist){
        var title = 'Web - create';
        var list = template.List(filelist);
        var HTML = template.HTML(title, list, `
          <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder = "title"></p>
            <p>
              <textarea name="description" placeholder = "dscription"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `, '');
        response.writeHead(200);
        response.end(HTML);
      });
    }else if(pathname === '/create_process'){   // 클라이언트로부터 데이터 받기
      var body = '';
      request.on('data',function(data){
        body = body + data;
      });
      request.on('end',function(){
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });
      });
    }else if(pathname === '/update'){     // 글 수정 입력 받기 폼
      fs.readdir('./data', function(error, filelist){
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = template.List(filelist);
          var HTML = template.HTML(title, list,
            `
            <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
              <p><input type="text" name="title" placeholder = "title" value="${title}"></p>
              <p>
                <textarea name="description" placeholder = "dscription">${description}</textarea>
              </p>
              <p>
                <input type="submit">
              </p>
            </form>
            `,
            `<a href = "/create">create</a> <a href = "/update?id=${title}">update</a>`
          );
          response.writeHead(200);
          response.end(HTML);
        });
      });
    }else if(pathname==='/update_process'){     // 글 수정 처리
      var body = '';
      request.on('data',function(data){
        body = body + data;
      });
      request.on('end',function(){
        var post = qs.parse(body);
        var id = post.id;
        var title = post.title;
        var description = post.description;
        fs.rename(`data/${id}`,`data/${title}`,function(error){
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          });
        });
      });
    }else if(pathname==='/delete_process'){     // 파일 삭제 처리
      var body = '';
      request.on('data',function(data){
        body = body + data;
      });
      request.on('end',function(){
        var post = qs.parse(body);
        var id = post.id;
        var filteredId = path.parse(id).base;
        fs.unlink(`data/${filteredId}`,function(error){
          response.writeHead(302, {Location: `/`});
          response.end();
        });
      });
    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
});

app.listen (3000);
