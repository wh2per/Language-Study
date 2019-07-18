1. <script> 태그
자바스크립트가 시작됨을 알리는 태그
ex)
<script>
  document.write(1+1);
</script>

2. document.write();는 정적이고 HTML 동적이다
ex)
document.write(1+1);
1+1
>> 2
>> 1+1

3. input 태그
버튼, 텍스트 등등을 넣을 수 있음
ex)
<input type="button" value="hi" onclick="alert('hi')">
<input type="text" onchange="alert('changed')">
<input type="text" onkeydown="alert('key down!')">

4. 변수는 가급적 var를 넣어주자

5. document.querySelector('');
제어할 태그를 선택할 수 있음
ex)
<input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    ">

6. 함수
script 태그 안에 함수를 만들자
ex)
<script>
    function two() {
        document.write('<li>2-1</li>');
    }
</script>
