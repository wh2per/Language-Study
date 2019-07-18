Python3 문법

1. 출력
>>> print("결과값은",2*7,"입니다")

2. 변수사용
>>> s='안녕하세요?'
>>> print(s)
안녕하세요?

>>> s="안녕하세요?"
>>> print(s)
안녕하세요?

3. 주석
# 주석입니다

4. 입력받기
x = int(input("첫 번째 정수 : "))

5. 연산
>>> 7/4
1.75
>>> 7//4
1
>>> 2**7
128
>>> 7%4
3

6. 내장함수
>>> value=abs(-3)
3
>>> round(1.2345)
1
>>> max(1,2)
2
>>> min(1,2)
1

>>> form math import *
>>> sqrt(4)
2

7. 자료형
>>> type("Hello")
<class 'str'>
>>> type(3.2)
<class 'float'>
>>> type(17)
<class 'int'>

8. 문자열
>>> a = "Merry"
>>> a
'Merry'
>>> print(a)
Merry

9. 따옴표
>>> message = "철수가 '안녕'이라고 함"
>>> print(message)
철수가 '안녕'이라고 함

10. 특수 문자열
>>> msg = 'doesn\'t'	# \로 특수문자 표현
>>> print(msg)
doesn't

11. 문자열 연결
>>> 'Py' 'thon'
'Python'

12. 문자열 + 정수
>>> "Student" + str(26)	# 큰따옴표 작은따옴표 상관 없음
'Student26'

13. 문자열 반족
>>> line = "="*5
>>> print(line)
=====

14. 문자열안에 변수 출력
>>> price = 10000
>>> print("상품의 가격은 %s원입니다"%price)
상품의 가격은 10000원입니다

15. if문
>>> age = 19
>>> if age >= 19 :
	print("성인");
else :
	print("미성년자")
성인

>>> age = 20
>>> height = 180
>>> if age>=10 and height>=165 :
	print("가능")
else :
	print("불가능")
가능

>>> score = 85
>>> if score >= 90 :
	print("A")
elif score >= 80 :
	print("B")
B

16. 리스트 요소 검사
list = ['김','철','수']
name = '철'
if name in list :
	print("OK")
else :
	print("NO")
OK

17. random
import random;
answer = random.randint(1,100)
print(answer)

18. for문
for 변수 in 시퀀스
	반복문장
	반복문장

for name in ["철수", "영희", "길동"] :
	print("안녕!"+name)
안녕! 철수
안녕! 영희
안녕! 길동

for x in [1,2,3,4,5]
	print(x, end=" ")
0 1 2 3 4 5

19. range()
range(start, stop, step)

sum = 0
for x in range(10) :
	sum = sum + x
print(sum)
45

20. while문
while 조건 :
	반복문장
	반복문장

i = 0
while i<5 :
	print("ㅎㅇ")
	i = i+1
ㅎㅇ
ㅎㅇ
ㅎㅇ
ㅎㅇ
ㅎㅇ

21. 함수
def get_sum(start, end) :
	sum = 0
	for i in range(start, end+1) :
		sum += i
	return sum
print(get_sum(1,10))

22. 전역변수
def sub(x, y) :
	global a
	a = 7
	x,y = y,x
	b = 3
	print(a,b,x,y)
a,b,x,y = 1,2,3,4
sub(x,y)
print(a,b,x,y)
7 3 4 3
7 2 3 4

23. 여러 개 값 반환
def sub() :
	return 1,2,3
a, b, c = sub()
print(a,b,c)
1 2 3

24. 무명 함수
lambda 인수1, 인수2 : 수식

sum = lambda x,y : x+y
print("정수 : ",sum(10,20))
정수 : 30

25. 리스트 값 넣기
list = []
for i in range(10) :
	list.appen(i)
print(list)
0 1 2 3 4 5 6 7 8 9

26. 리스트 순회
list = [1, 2, 3]
for element in list
	print(element)
1 2 3

27. 리스트 슬라이싱
>>> list = [1,2,3,4,5]
>>> list[2:4]	# 새로운 리스트를 반환
[3,4,5]

28. 리스트 길이
>>> letters = ['a', 'b', 'c']
>>> len(letters)
3

29. 리스트 요소 찾기
list = [1,2,3,4]
index = list.index(2)	#index = 1

30. 리스트 요소 삭제
>>> list = [1,2,3,4]
>>> list.pop(1)
2
>>> list
[1,3,4]
>>> list.remove(3)
>>> list
[1,4]

>>> list = [1,2,3]
>>> del list[0]
>>> print(list)
[2,3]

31. 리스트 일치 검사
>>> list1 = [1,2]
>>> list2 = [1,2]
>>> list1 == list2
true

32. 리스트 최소값과 최대값
>>> list = [1,2,3]
>>> min(list)
1
>>> max(list)
3

33. 리스트 정렬		# sort는 리스트를 직접 정렬시키고 sorted는 리스트를 복사하여 새로 정렬(즉, 리턴값이 존재)
>>> list = [3,2,1]
>>> list.sort()
>>> list
[1,2,3]

>>> list1 = [3,2,1]
>>> list2 = sorted(list1)
>>> list2
[1,2,3]

34. 리스트 복사하기
scores = [1,2,3,4,5]		#둘 이 같은 곳을 가르킴
value = scores

#깊은 복사 : 아예 리스트를 새로 복제
>>> score = [1,2,3,4,5]
>>> value = list(score)
>>> value
[1,2,3,4,5]

35. 리스트 함축
>>> list1 = [3,4,5]
>>> list2 = [x*2 for x in list1]
>>> print(list2)
[6,8,10]

36. 동적으로 2차원 리스트 생성
rows = 3
cols = 5
s = []
for row in range(rows) :
	s += [[0]*cols]
print("s = ",s)
s = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]

37. 튜플은 변경,삭제 불가능
# 튜플은 ()로 만듬
>>> list = (1,2,3)
>>> list[0] = 5	#불가
>>> del list[0] 	#불가

38. 세트
# 중복 불가
# 순서 없음
# 세트는 {}로 만듬
>>> number = {2,1,3}
>>> number
{1,2,3}
>>> len(number)
3

>>> fruit = {"Apple", "Banana", "Pineapples"}
>>> mySet = {1.0, 2.0, "Hello", (1,2,3)}

39. 세트에 요소 추가
# 삭제, 변경, 특정인덱스접근 불가
>>> number = {2,1,3}
>>> number[0] 	#불가
>>> number.add(4)
>>> number
{1,2,3,4}

40. 부분 집합 연산
>>> A = {1,2,3,4,5}
>>> B = {1,2,3}
>>> B.issubset(A)
True

41. 집합 연산
>>> A = {1,2,3}
>>> B = {3,4,5}
>>> A | B
{1,2,3,4,5}
>>> A&B
{3}
>>> A-B
{1,2}

42. 부분집합 검출
>>> partyA = set([1,2,3])
>>> partyB = set([1,4,5])
>>> print(partyA.intersection(partyB))
1

43. 딕셔너리
>>> contacs = dict()

>>> contacts = {'Kim' : '01087654321', 'Park' : '01012345678'}
>>> contacts
{'Kim' : '01087654321', 'Park' : '01012345678'}

>>> contacts['Kim']
'01087654321'

44. 딕셔너리 항목 순회하기
>>> scores = {'a' : 80, 'b' : 70, 'c' : 60}
>>> for item in scores.items() :
	print(item)
('a', 80)
('b', 70)
('c', 60)

45. 딕션너리 함수
>>> if "Kim" in contacts :
	print("OK");
OK

>>> contacts.pop("Kim")
'01087654321'

46. 문자열 split
>>> message = "TX Mr. Park!"
>>> words = message.split()
>>> print(words)
['TX', 'Mr', 'Park']

47. 슬라이싱의 예
>>> word = 'Python'
>>> word[0:2]
'Py'

48. 파일 입출력
>>> f = open("C:\\students.txt", "r")
>>> for line in f.readline():
	line = line.strip()	#공백 문자를 제거
	words = line.split(",")	#단어로 분리

49. 클래스
class Counter:
	def reset(self):
		self.count = 0
	def increment(self):
		self.count += 1
	def get(self):
		return self.count

50. 객체 생성
a = Counter()
a.reset()
a.increment()
print("카운터 a의 값으", a.get())

51. 생성자
class Television:
	def __init__(self, channer, volume, on):
		self.channel = channel
		self.volume = volume
		self.on = on
	def show(self):
		print(self.channel, self.volume, self.on)
	def setChannel(self, channel):
		self.channel = channel
	def getChannel(self):
		return self.channel

t = Television(9,10,True)
t.show()
t.setChannel(11)
t.show()

9 10 True
11 10 True

52. 정적 변수(static)
class Televidion:
	serialNumbr = 0 	#정적변수
	def __init__(self):
		Television.serialNumber += 1
	self.number = Televidion.serialNumber

53. 상속
class Truck(Vehicle) :	#(괄호 안에 부모클래스)
	def __init__(self, make) :
		super().__init__(make, model)		#부모 생성자

54. zip			// 동일한 인덱스끼리 짝지어 반환
>>> x = [1, 2, 3]
>>> y = [4, 5, 6]
>>> zipped = zip(x, y)
>>> list(zipped)
[(1, 4), (2, 5), (3, 6)]
>>> x2, y2 = zip(*zip(x, y))
>>> x == list(x2) and y == list(y2)
True

55. enumerate				# 각 요소에 인덱스번호를 붙여서 반환
>>> seasons = ['Spring', 'Summer', 'Fall', 'Winter']
>>> list(enumerate(seasons))
[(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
>>> list(enumerate(seasons, start=1))
[(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]

56. key
key 파라미터는 함수여야 하고, 하나의 입력값과 반환값을 가진다.
>>> sorted("This is a test string from Andrew".split(), key=str.lower)
['a', 'Andrew', 'from', 'is', 'string', 'test', 'This']

>> student_objects = [
...     Student('john', 'A', 15),
...     Student('jane', 'B', 12),
...     Student('dave', 'B', 10),
... ]
>>> sorted(student_objects, key=lambda student: student.age)   # sort by age
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]

57. operator
import operator
>>> sorted(student_tuples, key=itemgetter(2))
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
>>> sorted(student_objects, key=attrgetter('age'))
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
>>> sorted(student_tuples, key=itemgetter(1,2))
[('john', 'A', 15), ('dave', 'B', 10), ('jane', 'B', 12)]
>>> sorted(student_objects, key=attrgetter('grade', 'age'))
[('john', 'A', 15), ('dave', 'B', 10), ('jane', 'B', 12)]

# 위의 예제에서도 볼 수 있듯이 itemgetter(), attrgetter() 는 복잡한 자료형내(객체나)에 있는 특정 값을 가져오는 함수
# 하나 뿐만 아니라 여러개의 값을 가져오게 할 수도 있다.

>>> f = methodcaller('name')
>>> class B():
...   def name(self):
...     print("test")
...
>>> b = B()
>>> f(b)
test
# methodcaller() 는 말 그대로 어떤 메소드를 호출해 주는 역할을 하는 함수이다.

58. Sort Stability and Complex Sorts
# stable, unstable 정렬은 같은 키의 기준일떄 기존의 순서를 보존하느냐의 차이이다.
>>> data = [('red', 1), ('blue', 1), ('red', 2), ('blue', 2)]
>>> sorted(data, key=itemgetter(0))
[('blue', 1), ('blue', 2), ('red', 1), ('red', 2)]
# 처음 들어가 있던 순서 ('blue', 1), ('blue', 2) 가 정렬후에도 보장되는 것을 볼 수 있다.

59. join
>>> ",".join('abcd')
'a,b,c,d'

60. isdigit()
# 문자열이 숫자로 이루어져있는지 확인
# isdigit()는 음수나 소숫점이 포함된 숫자는 False를 리턴한다
>>> "123".isdigit()
True
>>> "-123".isdigit()
False
>>> "1.23".isdigit()
False

61. isalpha()
# isalpha함수는 문자열이 문자인지 아닌지를 True,False로 리턴
>>> "a123".isalpha()
False
>>> "abc".isalpha()
True

62. permutation
# itertools.permutation를 이용하면, for문을 사용하지 않고도 순열을 구할 수 있음
>>> import itertools		# num에서 2개를 고르는 순열
>>> num = [1,2,3,4]
>>> for sum3 in itertools.permutations(num,2):
...     print(sum3)
...
(1, 2)
(1, 3)
(1, 4)
(2, 1)
(2, 3)
(2, 4)
(3, 1)
(3, 2)
(3, 4)
(4, 1)
(4, 2)
(4, 3)

63. combination
>>> import itertools		# num에서 2개를 고르는 조합
>>> num = [1,2,3,4]
>>> for sum3 in itertools.combinations(num,2):
...     print(sum3)
...
(1, 2)
(1, 3)
(1, 4)
(2, 3)
(2, 4)
(3, 4)

64. 최대공약수
>>> import fractions
>>> a = 6
>>> b = 4
>>> print(fractions.gcd(a,b))
2

65. 최소공배수
>>> import fractions
>>> a = 6
>>> b = 4
>>> print(fractions.gcd(a,b))
2

66. 최소힙
>>> import heapq
>>> pq = []
>>> heapq.heappush(pq,1)		# 원소추가
>>> heapq.heappush(pq,4)
>>> heapq.heappush(pq,7)
>>> heapq.heappop(pq)		# 원소삭제

# 기존 리스트를 힙으로 변환
>>> list = [4, 1, 7, 3, 8, 5]
>>> heapq.heapify(list)
>>> print(heap)
[1, 3, 5, 4, 8, 7]


67. 최대힙
>>> import heapq
>>> nums = [4, 1, 7, 3, 8, 5]

>>> heap = []
>>> for num in nums:
>>>   heapq.heappush(heap, (-num, num))  # (우선 순위, 값)

>>> while heap:
>>>   print(heapq.heappop(heap)[1])  # index 1
8
7
5
4
3
1

68. 얇은 복사와 깊은 복사
# 얇은 복사
>>> import copy
>>> a = [[1,2],[3,4]]
>>> b = copy.copy(a)
>>> a[1].append(5)
>>> a
[[1, 2], [3, 4, 5]]
>>> b
[[1, 2], [3, 4, 5]]

# 깊은 복사
>>> import copy
>>> a = [[1,2],[3,4]]
>>> b = copy.deepcopy(a)
>>> a[1].append(5)
>>> a
[[1, 2], [3, 4, 5]]
>>> b
[[1, 2], [3, 4]]

69. 이진수로 변환
>>> print(bin(4))
0b100

70. 리스트 뒤집기
>>> list = [1,2,3]
>>> list = list.reverse()

71. 문자열 뒤집기
>>> s = abcd
>>> s = s[::-1]

72. custom comparator 만들기
# key=functools.cmp_to_key(cmp)를 사용
>>> import fuctools
>>> def cmp(a,b ):
>>>	t1 = a+b
>>>	t2 = b+a
>>>	return (int(t1) > int(t2)) - (int(t1) < int(t2))
>>> n = [3, 30, 34, 5, 9]
>>> n = sorted(n, key=functools.cmp_to_key(cmp),reverse=True)
>>> print(n)
['9','5','34','3','30']

73. 2차원 배열 초기화
matrix = [[0 for col in range(10)] for row in range(10)]
