1. null과 undefined는 값이 없다는 의미의 데이터 형

2. NaN은 0/0과 같은 연산의 결과로 만들어지는 특수한 데이터 형인데 숫자가 아니라는 뜻

3. ===는 서로 같은 수를 표현하고 있더라도 데이터 형이 같은 경우에만 같다고 판단
ex) alert(1=='1');              //true
alert(1==='1');             //false

4. !==는 정확하게 같지 않다는 의미

5. prompt() 구문은 사용자가 입력한 값을 가져와서 id 변수의 값으로 대입
ex)
id = prompt('아이디를 입력해주세요.')		// id에 입력값 들어감
if(id=='egoing'){
    alert('아이디가 일치 합니다.')
} else {
    alert('아이디가 일치하지 않습니다.')
}

6. 관습적인 이유로 0는 false

7. 기타 false로 간주되는 데이터 형
ex)
if(!''){
    alert('빈 문자열')
}
if(!undefined){
    alert('undefined');
}
var a;
if(!a){
    alert('값이 할당되지 않은 변수');
}
if(!null){
    alert('null');
}
if(!NaN){
    alert('NaN');
}

8. 웹브라우저는 무한반복을 허용하지 않기 때문에 어느 정도 시간이 흐르면 스크립트를 종료할 것인지 물어봄

9. 변수는 키워드는 var
ex) var i = 0;

10. 함수 정의
function 함수명( [인자...[,인자]] ){
   코드
   return 반환값
}
ex)
function numbering(){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }
}
numbering();

11. 함수 정의2
ex)
var numbering = function (){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }
}
numbering();

12. 배열
대괄호([])는 배열을 만드는 기호
ex)
var member = ['egoing', 'k8805', 'sorialgi']

13. 배열의 조작
크기 : arr.length
삽입1 : arr.push('a');			// push_back
삽입2 : arr.unshift('a');			// push_front
복수삽입 : arr.concat(['a','b']);
중간삽입 : arr.splice(2,0,'A');
// 첫번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 원소의 숫자만큼의 값을 배열로부터 제거한 후에 리턴
// 그리고 세번째 인자부터 전달된 인자들을 첫번째 인자의 원소 뒤에 추가
ex)
var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 0, 'B');
alert(li);
>> abBcde
제거1 : arr.shift();		// pop_front
제거2 : arr.pop();		// pop_back
정렬 : arr.sort()
역순정렬 : arr.reverse()

14. 객체생성1
ex)
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};

15. 객체생성2
ex)
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

16. 객체생성3
ex)
var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

17. 객체접근1		// 배열처럼 접근
ex)
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) {
    document.write("key : "+key+" value : "+grades[key]+"<br />");
}

18. 객체접근2		// 객체처럼 접근
ex)
console.log(grades.sorialgi);
80

19. 객체에는 함수도 담을 수 있다
ex)
var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
grades.show();

20. 모듈화
ex)
* greeting.js			// 외부파일로 분리
function welcome(){
    return 'Hello world';
}

* main.html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="greeting.js"></script>
</head>
<body>
    <script>
        alert(welcome());
    </script>
</body>
</html>

21. node.js 맛보기
ex)
* node.circle.js (로드될 대상)
var PI = Math.PI;

exports.area = function (r) {
return PI * r * r;
};

exports.circumference = function (r) {
return 2 * PI * r;
};

* node.demo.js (로드의 주체)
var circle = require('./node.circle.js');
console.log( 'The area of a circle of radius 4 is '+ circle.area(4));

>> The area of a circle of radius 4 is 50.26548245743669

22. jQuery 맛보기
ex)
* jquery_demo.html
<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    </head>
<body>
    <ul id="list">
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
    </ul>
    <input id="execute_btn" type="button" value="execute" />
    <script type="text/javascript">
     $('#execute_btn').click(function(){			// 항상 $로 시작
        $('#list li').text('coding everybody');		// #태그로 변수 선택
     })
    </script>
</body>
</html>

23. 정규표현식
정규표현식은 두가지 단계로 이루어진다. 하나는 컴파일(compile) 다른 하나는 실행(execution)
* 컴파일
컴파일은 검출하고자 하는 패턴을 만드는 일
ex)
var pattern = /a/;       // 정규표현식 리터럴
ex)
var pattern = new RegExp('a');      // 정규표현식 객체 생성자

* 실행
ex)
pattern.exec('abcdef');        // ["a"]
pattern.exec('bcdefg');        // null

ex)
pattern.test('abcdef');        // true
pattern.test('bcdefg');        // false

24. 정규표현식 문자열 메소드 실행
ex) String.match()
'abcdef'.match(pattern);       // ["a"]
'bcdefg'.match(pattern);       // null

ex) String.replace()        // 문자열에서 패턴을 검색해서 이를 변경한 후에 변경된 값을 리턴
'abcdef'.replace(pattern, 'A');    // Abcdef

25. 정규표현식 옵션
* i      // i를 붙이면 대소문자를 구분하지 않음
ex)
var xi = /a/;
console.log("Abcde".match(xi));         // null
var oi = /a/i;
console.log("Abcde".match(oi));         // ["A"];

* g     // g를 붙이면 검색된 모든 결과를 리턴
ex)
var xg = /a/;
console.log("abcdea".match(xg));        // ["a"]
var og = /a/g;
console.log("abcdea".match(og));        // ["a", "a"]

26. 전역변수 생성
ex)
MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

27. 익명함수 생성
ex)
(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())

28. 유효범위
자바스크립트에서는 for문이나 if문 안에서 생성된 변수들은
for문이나 if문 밖에서도 사용 가능!
즉, 함수 안에서 생성된 지역변수들은 함수 안에서 언제든 사용 가능!
ex)
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
alert(name);
>> coding everybody

29. 정적 유효범위 or 렉시컬
자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖음
기준은 사용될 때가 아닌 정의될 때임!
ex)
var i = 5;

function a(){
    var i = 10;
    b();
}

function b(){
    document.write(i);
}

a();
>> 5

30. 메소드
객체의 속성 값으로 담겨진 함수를 메소드(method)라고 부름
ex)
a = {
    b:function(){       // b라는 키의 값이 함수가 될 수 있음
    }
};

31. 자바스크립트에서의 함수는 값이 될 수 있다
function a(){} 는 var a = function(){} 와 같은 의미   !

32. 함수는 값이기 때문에 다른 함수의 인자로 전달 될 수 있음
ex)
function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));

33. 함수는 함수의 리턴 값으로도 사용할 수 있음
ex)
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1));

34. 함수는 배열의 값으로도 사용할 수 있음
ex)
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
alert(input);

35. 콜백
함수의 인자로 함수로 전달할 수 있음
ex)
function sortNumber(a,b){
    // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
    return b-a;
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
alert(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]
sort는 내장메소드이고 인자로 sortfunc를 받을 수 있음!

36. 비동기처리 (Ajax : 비동기 자바스크립트 and XML)
시간이 오래걸리는 작업이 완료된 후에 처리해야 할 일을 콜백으로 지정하면 편리
ex)
* datasource.json.js
{"title":"JavaScript","author":"egoing"}

* demo1.html
<!DOCTYPE html>
<html>
<head>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
</head>
<body>
<script type="text/javascript">
    $.get('./datasource.json.js', function(result){     // jquery에 $객체에 있는 get 메소드를 사용하면
        console.log(result);                            // Ajax 통신을 할 수 있음
    }, 'json');
</script>
</body>
</html>

37. 내부함수
함수 안에서 또 다른 함수를 선언한 것
ex)
function outter(){
    function inner(){
        var title = 'coding everybody';
        alert(title);
    }
    inner();
}
outter();
>> coding everybody

38. 클로저
내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것
ex)
function outter(){
    var title = 'coding everybody';
    function inner(){
        alert(title);
    }
    inner();
}
outter();
>> coding everybody

39. 클로저 특징
외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있음
즉, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않음
ex)
function outter(){
    var title = 'coding everybody';
    return function(){
        alert(title);
    }
}
inner = outter();   // inner라는 객체에 outter의 리턴값인 함수를 저장
inner();            // inner 객체에 있는 함수를 실행
>> coding everybody

40. 클로저 특징 이용 : private variable
Private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드
ex)
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title('공각기동대');

alert(ghost.get_title());
alert(matrix.get_title());
>> Ghost in the shell
>> Matrix
>> 공각기동대
>> Matrix
// factory_movie라는 함수는 return하면서 소멸되었기 때문에
// title이라는 인자 즉, 지역변수는 내부함수인 get_tile이나 set_title로만 접근 가능

41. 클로저 사용시 자주하는 실수
ex)
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;           // 여기서 사용한 i는 이 함수 외부의 변수값이 아니기 때문임
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
>> 5
>> 5
>> 5
>> 5
>> 5

위 함수를 내부함수로 하는 외부함수를 만들고
그 외부함수의 지역변수의 값을 내부함수가 참조하도록 하자
위와 아래의 차이점은 "함수를 즉시 실행 하냐 마냐의 차이가 있음!"
위는 함수를 즉시 실행하지 않고 정의만 하였고 아래는 정의와 동시에 실행
ex)
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
>> 0
>> 1
>> 2
>> 3
>> 4

42. arguments 객체 -> 유사배열(배열과 사용법이 비슷함, 배열은 아님!)
ex)
function sum(){
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++){
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));
>> 0 : 1
>> 1 : 2
>> 2 : 3
>> 3 : 4
>> result : 10

43. 매개변수의 수
arguments.length는 함수로 전달된 실제 인자의 수를 의미
함수.length는 함수에 정의된 인자의 수를 의미
ex)
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length 0 arguments 0
one('val1', 'val2');  // one.length 1 arguments 2
two('val1');  // two.length 2 arguments 1

44. function은 Function이라는 객체의 인스턴스임
따라서 함수.apply나 함수.call을 통해 함수를 호출할 수 있음
* apply
매개변수는 2개이다
첫번째 인자는 함수가 실행될 맥락
(null을 전달하면 apply가 실행된 함수 인스턴스는 전역객체(브라우저에서는 window)를 맥락으로 실행)
두번째 인자는 배열이며 이 배열의 원소가 함수의 인자로 순차적으로 대입
ex)
function sum(arg1, arg2){
    return arg1+arg2;
}
alert(sum.apply(null, [1,2]))

45. apply의 사용
ex)
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
alert(sum.apply(o1)) // 6       // 현재줄이 실행되는 동안 o1이라는 객체의 sum이라는 메소드가 됨
alert(sum.apply(o2)) // 185

46. 자바스크립트의 객체지향 프로그래밍
prototype-based programming
함수형 언어의 특성을 가지고 있음 -> 기존 객체지향 프로그래밍과 좀 다름
자바스크립트에서 객체를 만드는 주체는 함수

47. 생성자와 new
객체의 구조를 재활용할 수 있는 방법
ex)
function Person(){}
var p = new Person();       // p에는 Person{}이라는 객체가 들어있다

생성자 함수는 일반함수와 구분하기 위해서 첫글자를 대문자로 표시
ex)
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name;
    }
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");

var p2 = new Person('leezche');
document.write(p2.introduce());

48. 전역객체
모든 객체는 전역객체의 프로퍼티
객체를 명시하지 않으면 암시적으로 window의 프로퍼티로 간주
전역객체의 이름도 호스트환경에 따라서 다름(웹브라우저에서 전역객체는 window, node.js에서는 global)
ex)
function func(){
    alert('Hello?');
}
func();
window.func();      // 모든 전역변수와 함수는 사실 window 객체의 프로퍼티

49. this
this는 함수 내에서 함수 호출 맥락(context)를 의미
함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라짐
함수와 객체를 연결시켜주는 실질적인 연결점의 역할

* 함수를 호출했을 때 this는 전역객체인 window와 같음
ex)
function func(){
    if(window === this){
        document.write("window === this");
    }
}
func();

*메소드의 this는 그 객체를 가르킴
ex)
var o = {
    func : function(){
        if(o === this){
            document.write("o === this");
        }
    }
}
o.func();

50. apply와 call을 이용하여 this의 값을 제어할 수 있음
ex)
var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;
    }
}
func();
func.apply(o);
func.apply(p);
>> window
>> o
>> p

51. 리터럴
* 함수 리터럴
ex)
function sum(x,y) {return x+y;}

* 객체 리터럴
ex)
var o = {}
var o = new Object()

* 배열 리터럴
var a = [1,2,3]
var a = new Array(1,2,3)

51. prototype
new를 통해 객체를 생성할 때, 객체의 원형(prototype)이 같이 생성 됨
prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결됨
ex)
function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);
>> true

만약 o.ultraProp = 1;을 추가하면 값은 1로 바뀜
직관적으로 먼저 객체에 ultraProp라는 변수가 있는 지 확인한 후
없다면 prototype을 검사하는 순으로 감

* Super.prototype = Ultra.prototype
이렇게하면 Super.prototype의 값을 변경하면 그것이 Ultra.prototype도 변경

* Super.prototype = new Ultra();
Ultra.prototype의 원형으로 하는 객체가 생성되기 때문에
new Ultra()를 통해서 만들어진 객체에 변화가 생겨도 Ultra.prototype의 객체에는 영향을 주지 않음

52. 상속 (기능 물려 받기)
Programmer이라는 생성자를 만들었다
이 생성자의 prototype과 Person의 객체를 연결하면 Programmer 객체도 메소드 introduce를 사용 가능
ex)
function Person(name){      // 생성자 함수
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name;
}

function Programmer(name){      // 생성자 함수
    this.name = name;
}
Programmer.prototype = new Person();

var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");

53. 상속 (기능 추가 하기)
Programmer는 Person의 기능을 가지고 있으면서 Person이 가지고 있지 않은 기능인 coding을 가짐
ex)
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name;
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}

var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");
>> My name is egoing
>> hello world

54. 표준 내장 객체의 확장
* 표준 내장 객체
자바스크립트가 기본적으로 가지고 있는 객체들을 의미
Object, Function, Array, String, Boolean, Number, Math, Date, RegExp

ex) Array에 rand기능 함수를 추가하기
Array.prototype.rand = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
console.log(arr.rand());
// 이렇게하면 마치 배열에 내장된 메소드인 것처럼 위의 기능을 사용할 수 있음

55. Object
아무것도 상속받지 않는 순수한 객체
값을 저장하는 기본적인 단위로 Object를 사용
자바스크립트의 모든 객체는 Object 객체를 상속 받음
즉, 모든 객체는 Object 객체의 프로퍼티를 가지고 있음

56. Object 객체 API
* Object.keys()와 Object.prototype.toString()
Object.keys()는 객체의 키값을 배열로 만들어 리턴(배열에서는 인덱스)
Object.prototype.toString()은 객체의 값을 String으로 출력

ex)
// Object.keys()
var arr = ["a", "b", "c"];
console.log('Object.keys(arr)', Object.keys(arr)); // will alert "0, 1, 2"

// Object.prototype.toString()
var o = new Object();
console.log('o.toString()', o.toString());
var a = new Array(1,2,3);
console.log('o.toString()', a.toString());

57. Object 객체의 확장
ex)
Object.prototype.contain = function(needle){
    for(var name in this){
        if(this[name] === needle)
            return true;
    }
    return false;
}
var o = {'name' : 'egoing', 'city' : 'seoul'};
console.log(o.contain('egoing'));
var a = ['egoing', 'leezche', 'grapittie'];
console.log(a.contain('leezche'));

58. 원시 데이터 타입
객체가 아닌 것을 원시 데이터 타입이라고 함
숫자, 문자열, 불린, null, undefined

* 문자열은 프로퍼티와 메소드(str.length, str.charAt())가 있는데 왜 객체가 아닐까?
자바스크립트는 임시로 문자열 객체를 만들고 사용이 끝나면 제거하기 때문
ex)
var str = 'coding';
str.prop = 'everybody';
console.log(str.prop);      // undefined

59. 래퍼 객체
문자열과 관련해서 필요한 기능성을 객체지향적으로 제공해야 하는 필요 또한 있기 때문
원시 데이터 형을 객체처럼 다룰 수 있도록 하기 위한 객체 제공
Sring, Number, Boolean

60. 복제
ex)
var a = 1;
var b = a;
b = 2;
console.log(a); // 1

61. 참조
위에는 데이터형이 숫자이고 아래는 객체
객체는 다른 말로 참조 자료형이라고 부름
원시 데이터형은 복제되지만 참조 데이터형은 참조됨
ex)
var a = {'id':1};
var b = a;
b.id = 2;
console.log(a.id);  // 2

62. 함수 참조
* 원시 데이터 타입을 인자로 넘겼을 때
ex)
var a = 1;
function func(b){
    b = 2;
}
func(a);
console.log(a);     // 1

* 참조 데이터 타입을 인자로 넘겼을 때
ex)
var a = {'id':1};

function func(b){       // b = a;
    b = {'id':2};       // b = {'id' : 2} 이기 때문에 a와의 링크가 끊김
}
func(a);
console.log(a.id);  // 1

ex)
var a = {'id':1};
function func(b){       // b = a;
    b.id = 2;
}
func(a);
console.log(a.id);  // 2
