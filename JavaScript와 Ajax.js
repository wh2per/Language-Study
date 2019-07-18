1.  Ajax는 리로드 없이 웹서버에게 정보를 요청해서 부분적으로 정보를 갱신해주는 기술

2. fetch API 기본사용법
fetch의 매개변수 html에 저장된 값이 text로 넘어감
ex)
<!doctype html>
<html>
  <body>
    <article>

    </article>
    <input type="button" value="fetch" onclick="
      fetch('html').then(function(response){
        response.text().then(function(text){
          document.querySelector('article').innerHTML = text;
        })
      })
    ">
  </body>
</html>

3. fetch
fetch는 첫번째 인자값을 서버로 요청하는 파일읾
ex)
fetch('html');

4. 이후 then부터 끝까지는 응답이 끝나면 인자로 넣은 함수를 실행하도록 약속하는 것
ex)
function callbackme(){
    console.log('response end');
}
fetch('html').then(callbackme);

5. 이것은 비동기실행이다
ex)
fetch('html').then(callbackme);
console.log('1');
console.log('2');
>> 1
>> 2
>> response end

6. 웹서버가 응답하지 않을 경우 처리해주면 좋음
ex)
fetch('html').then(function(response){
        if(response.status == '404'){
          alert('Not found')
        }
      });

7. 현재 페이지에서 #값을 찾는 법
ex)
<script>
      if(location.hash) {
        console.log(location.hash.substr(1));       // URL에서 #값을 찾아줌
      } else {
      // Fragment doesn't exist
      }
</script>

8. 초기페이지 설정 방법
ex)
if(location.hash){
  fetchPage(location.hash.substr(2));   // #!값이 있다면
} else {
  fetchPage('welcome');   // 없다면 welcom을 초기페이지로 설정
}

9.
