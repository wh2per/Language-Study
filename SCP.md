# Overview of Cloud
### SDDC
  - 모든 인프라스트럭처가 가상화 되고 서비스로 제공되며, 데이터센터는 소프트웨어를 통해 자동으로 제어됨

### VM과 Container
  - VM
    * `하이퍼바이저형`
    * H/W 자원 효율성 향상
    * `Guest OS 이미지 사이즈 큼`
    * 수십 초 ~ 수 분
    * 집적도 : 물리서버 당 약 4~20개 VMs
  - Container
    * `컨테이너형`
    * VM의 오버헤드 해소
    * `Guest OS를 중복으로 올리지 않음`
    * 부팅시간 : 수 초 ~ 수십초
    * 집적도 : VM 대비 집적도 높음

### 스토리지 가상화 (SDS)
  - 이기종 스토리지 장비를 하나의 논리적 가상풀로 통합 → `관리포인트 단일화`
  - 스토리지 활용률, 성능, 가용성 측면 향상

### 네트워크 가상화 (SDS)
  - 네트워크 장비의 통신 전송기능과 제어기능을 분리하여 `중앙 컨트롤러로 제어기능 집중`
  - `데이터 전송 경로를 S/W`로 유연하게 변경

### Kubernetes
  - 장점 : 어디서든 실행, 로드밸런싱, 자동 롤백, 자동 복구, 배포자동화
  - Node는 애플리케이션이 작동하는 물리 또는 가상서버
  - Namespace 단위로 리소스를 가상으로 분리
  - Pod 단위로 컨테이너의 생성, 배치, 시작, 정지, 삭제, 장애복구, 복제
  
<hr/>

# Overview of SCP
### Samsung Cluod Platform 서비스
  - SIMPLE (가용성, 확장성, 유연성, 고성능)
  - SMART (Analytics, AI, MLOps)
  - SECURE (보안성, 안정성, 신뢰성)

### Samsung Cluod Platform 인프라  
  - 국내 2개 Region, 4개 Zone, 해외 8개 Region
    * 콘솔에서는 Zone을 '위치'로 씀
  - 논리적 격리 : 외부로부터 접근 제어
    * `프로젝트` : 권한 관리를 통한 접근 제어 경계
    * `VPC, 엔드포인트` : 논리적 네트워크 경계
  - 물리적 격리 : 지리적 위치, 규정 준수, 장애 격리
    * `리전, 위치`
  - Multi-AZ : 고속의 프라이빗 네트워크로 연결
  - `VPC, 서브넷은 Zone 경계를 넘을 수 없음`
  - `GPU, BM server, HPC Cluster는 싱글 AZ에서만 가능`
  - `VM server, VM Auto-Scaling, DBaaS, Kubernetes Engine은 멀티 AZ에서 생성 가능`
  - Object/File Storage, Back-up은  AZ간 복제한 것

### 맞춤형 서비스 오퍼링
  - Enterprise
    * `관리자원, 서비스자원-SDS`
  - Private
    * `관리자원-SDS, 서비스자원-고객`
    * 현장 데이터 실시간 처리, 사내 핵심정보 저장 등 요구
    * 삼성SDS DC와 고객 DC간 전용선 연결
    * 삼성SDS DC내 자원과 Hybrid 구성 가능
    * `서버단위 증설`
  - Dedicated
    * `관리자원, 서비스자원-고객`
    * 규제 대응을 위해 물리적으로 분리된 클라우드 사용
    * 원격 운영을 위해 삼성SDS 운영지원시스템과 연결
    * `Rack단위 증설`

### 금융 클라우드
  - 금융보안원 141개 전체 평가 항목 모두 통과
  - 신규 서비스 개발 시 금융보안원 평가 기간을 대폭 단축
  - 금융보안원의 CSP 안전성 평가 및 국내외 다수의 보안 인증 보유
  - `금감원 기준(Near Zero)을 충족`하는 재난복구(DR) 시스템을 구현
  - 클라우드 상의 인프라 및 애플리케이션 전체 영역에 대한 통합 모니터링으로 `무장애 운영가능`

### 공공 클라우드
  - `DMZ Zone과 Private Zone은 안전하게 물리적으로 분리`
  - 별도 Backup N/W을 통해 재난재해복구(DR)시스템의 원격 백업을 안전하게 수행
  - `인터넷을 통해 삼성SDS 공공 클라우드 플랫폼에 편리하게 접근`
  - 필요한 클라우드 서비스를 찾아 손쉽게 신청, 증설 및 해지가 가능

### SCP 서비스 워크로드 구성 및 청구 단위
  - Account
    * SCP 서비스의 `과금/청구 단위`
    * 계약당 사용 가능한 계약자 입장에서 자원 단위
    * 고객사 정보 + 클라우드 계약 정보 포함
  - Project
    * 사용자가 생성하고 서비스 워크로드 구성 요소의 범위
    * 한 개의 Account로 여러 개의 Project를 생성할 수 있음
    * `계약의 최소 단위인 Project별로 청구가 이루어짐`
    * 사용자는 1개의 Project 아래에 여러 개의 VPC를 구성하고 자원을 생성
  
<hr/>

# Overview SCP Project
### 자원 관리 단위 및 역할
  - 어카운트 관리자
    * 어카운트 생성
    * `어카운트 사용자 등록`
  - 어카운트 사용자
    * 프로젝트 생성
    * `프로젝트 일반 사용자 관리`
  - 일반 사용자
    * 상품 신청
    * `자원 생성 및 관리`
  
<hr/>

# Overview of Cloud & Cloud Migration
### 클라우드 유형
  - `3가지 서비스 모델` : IaaS, PaaS, SaaS
  - `5가지 전개모델` : Public Cloud, Private Cloud, Community Cloud, Hybrid Cloud, Multi Cloud
  - 5가지 특징
    * 사용자 중심 서비스
    * 네트워크 접근
    * 신속한 서비스 제공
    * Computing 자원 공유
    * 계량 가능한서비스

### 클라우드 기대효과
  - Cost Reduction
  - Flexibility
  - Business Continuity
  - Collaboration
  - Business Agility

### 클라우드 전환 유형 6R
  - Re-host
    * Lift-and-shift 방식으로 패키지 S/W, 활성 로드맵이 없는 어플리케이션
  - Re-Platform
    * OS 또는 DB 엔진을 최신의 release로 업그레이드`(코드변경없음)`
    * Lift-tinker-and-shift
  - Re-factor
    * 성능/스케일링/민첩성 등 `Cloud-Native 기능을 활용하기 위한 어플리케이션 아키텍처 재수립`
  - Re-purchase
    * 어플리케이션 `SaaS 또는 COTS 제품으로 교체`
  - Retain
    * 지원되지 않는 OS, 마그레이션 효과/정당성이 없는 `레거시 어플리케이션`
  - Retire
    * `폐기 대상 어플리케이션`
    * M&A, 사업철수 등

### 클라우드 전환 트렌드
  - 클라우드 초기 Re-host 중심 → Re-platforming / Re-factoring 방식 전환 니즈 증가 중
  - Application
    * Re-purchase(SaaS 도입)
    * Re-factor
    * `App. 아키텍처 전체를 재설계하여 클라우드 최적화 달성`
    * 재설계/재개발에 기술역량 및 비용투자 필요
  - M/W(PaaS)
    * Re-platform
    * Application 아키텍처 변경 없음
    * `기존 인프라/미들웨어를 클라우드로 전환`
  - Infra(IaaS)
    * Re-host
    * `기존 인프라를 On-Prem → 클라우드(IaaS)로 재호스팅`
    * Application 아키텍처 변경 없음

### Re-host 전환
  - 현황분석
    * 전환준비
    * 인프라 및 애플리케이션 현황 분석
    * 요구사항 정의
  - 클라우드 설계
    * S/W 전환 방안 수립
    * 전환전략 수립
    * 전환실행 계획 수립
    * 전환설계
  - 전환/이행
    * 전환준비
    * 테스트
  - 운영이관
    * 서비스 운영 이관

### Re-platform 전환
  - `Lift, Tinker and Shift`
  - 어플리케이션의 `핵심 구조는 변경하지 않되` 일부 구성요소 변경으로 클라우드 이점을 활용하는 마이그레이션 전략
  - 현황분석
    * 전환 대상 시스템 현황 분석
    * Re-platform 대상 애플리케이션 선정,  Re-platform 대상 DB 선정
    * 요구사항 정의
  - 전환 설계
    * CSP 선정
    * 플랫폼 설계, 애플리케이션 전환설계
    * 용량 산정
    * 테스트 설계
  - 전환/이행
    * 전환 환경준비
    * 전환 환경구성
    * 애플리케이션 전환 준비
    * 애플리케이션 전환, DB 전환
    * 테스트 수행
  - 운영이관
    * 운영 전환
    * 시스템 사용교육
    * 안정화 지원

### Re-factor 전환
  - Re-factor는 `애플리케이션 재작성`이 필요한 전환 방법론
  - `MSA와 Object Storage 적용`을 통해 클라우드 환경에 최적화된 애플리케이션을 구성
  - MSA 분석
    * 현황분석
    * 요구사항 정의
    * 마이크로서비스 정의
  - MSA 아키텍처 정의
    * 아키텍처 분석
    * 내부 아키텍처 구조 설계
    * 외부 아키텍처 구성 설계
  - MSA 설계
    * 마이크로서비스 설계
    * 마이크로서비스 배포체계 설계
    * 마이크로서비스 개발표준 정의
  - Object Storage 분석
    * 현황분석
    * 요구사항 정의
    * 전환대상 선정
  - Object Storage 설계
    * Object Storage 검증
    * 아키텍처 설계
    * 애플리케이션 설계
    * 테스트 설계
    * 전환계획 수립
  - Object Storage 전환
    * 전환환경 구성
    * 스토리지 전환
    * 애플리케이션 전환
    * 테스트 수행
  - Object Storage 이행
    * 이관계획 수립
    * 스토리지 운영전환
    * 시스템 사용 교육
    * 안정화 지원
  
<hr/>

# Compute
### Virtual Server
  - 오픈소스는 community 버전 제공
  - 서버 사양 변경, Auto Scaling, 사용자 이미지 생성, Multi-AZ, Placement Group 가능
  - 과금 : 무약정(시간단위)
           약정(월단위)
  - 미터링 : VM의 on/off 상태에 따라 실사용 시간 산정
  - `Public IP : 시간당 5.6원`
  - Auto Scaling : `무약정에서만 가능`, 자체 요금은 없으나 생성된 자원에 대한 요금 부과

### Bare Metal Server
  - 오픈소스는 community 버전 제공
  - `Placement Group(물리적인 분산배치)만 가능`
  - 서브넷/IP 설정 및 VPC Firewall 연계 설정 제공
  - 서버간 통신을 위한 로컬 서브넷 설정 제공
  - 외부 인터넷 통신을 위한 NAT IP 설정 제공
  - Hyper-threading On/Off(비활성화시 vCore가 절반으로 줄어듬)
  - 단독 물리서버에 OS 설치
  - 과금 : 무약정(시간단위)
           약정(월단위)
  - 미터링 : BM의 on/off 상태에 따라 실사용 시간 산정

### HPC Cluster
  - CPU 기반 상품 : 제조 CAE, 바이오, 금융상품 위험 분석
  - GPU 기반 상품 : AI, IoT, 빅데이터
  - 과금 : 헤드 노드용 서버 on 상태의 `분단위 미터링`(23년 무료)
  - 미들웨어 SW는 오픈소스 무료, 자동 설치(Compiler, MPI Library, Job Scheduler)
  - Head Node Group은 Cluster를 관리하는 Head Node로 구성, Slurm Control 데몬이 설치됨
  - Compute Node Group은 실제 계산이 수행되는 BM기반 Compute Node로 구성, Slurm Compute Node 데몬이 설치됨
  - File Storage를 Head Node, Compute Node의 공유 스토리지로 사용
  - `IaaS 비용은 사용량 기반 별도 부과`

### FaaS
  - 서버가 없는 게 아니라 서버를 관리하지 않는 것
  - 수정 즉시 코드가 반영
  - 지원 Runtime : Python, Node.js, PHP
  - 코드가 실행되는 시간에 대해서만 과금
  - 과금기준 : `Function 호출 횟수 + 총 컴퓨팅 실행 시간(GB, 초)`
  - 비용 : 요청횟수 `1백만건 당 200원`
           실행시간 `1GB-초 당 0.017원` (400,000GB-초 까지 무료)
  
<hr/>

# Storage
### Block storage
  - 직접 서버에 할당하여 사용
  - `대용량의 데이터 저장`이 요구
  - VM에서 사용
    * Virtual Server 기본 OS, 추가 스토리지, Database 상품 등에 연결되어 사용
    * 사용자 볼륨 온라인 할당, 증설, 해제
  - BM에서 사용
    * Bare Metal Server 추가 스토리지에 연결
    * `Multi-Attach되어 공유 볼륨 구성 가능`(높은 가용성 보장을 위해 복수의 서버를 적용하는 기능)
    * 암호화 기능 제공
  - 볼륨사이즈 : 160TB
  - 최대 IOPS : 16,000 I/O
  - 최대 처리량 : 250MB/S
  - 암호화 제공
  - 서비스 `신청 용량기준 120원/GB`

### File storage
  - `다수 클라이언트에 대한 접근성을 높여` 데이터 저장/공유
  - 웹 콘텐츠 관리, 빅데이터 분석
  - Virtual Server, Kubernetes Worker Node 등 `SCP 자원간 파일 공유`
  - Linux 간 파일 공유(NFS), Windows 간 파일 공유(CIFS)를 위한 프로토콜 지원
  - 볼륨사이즈 : 100TB
  - 최대 처리량 : 2 GB/S
  - 이미지 스냅샷 백업 제공
  - 암호화 제공
  - 서비스 `신청 용량기준 70원/GB`

### Object storage
  - BS와 FS에 저장된 데이터 중 `자주 사용하지 않는 데이터를 보관`
  - Back-up 대비 경제적 비용
  - 웹 기반 파일 업다운로드
  - 볼륨사이즈 : 2PB
  - S3 API 제공
  - SSE-S3 방식 암호화
  - 서비스 `사용량 기준 35원/GB`

### Back-up
  - Object Storage를 사용한 백업 저장소
  - VM 이미지 스냅샷, NAS 이미지 스냅샷, DB 백업
  - `사용량 기준`
  - `55원/GB (보관주기 4주)`
  - `40원/GB (보관주기 2주)`

#### 할인체계
  - Block : 신청 용량 기준, File/Object : 사용량 기준
  - `50TB 미만 : 0%`
  - `50 ~ 100TB : 10%`
  - `100 ~ 200TB : 20%`
  - `200 ~ 500TB : 30%`
  - `500TB 이상 : 50%`
  
<hr/>

# DB
### Database Service(DBaaS)
  - Database를 즉시 사용할 수 있도록 Database 자원과 자원운영을 서비스 형태로 제공
  - `RDB : EPAS, PostgreSQL, MariaDB, MySQL, MS SQL Server, Tibero`
    `NoSQL : Redis`
  - 과금단위 : `VM 일체형 형태`로 제공
  - 과금요건 : 무약정(시간단위) → 시간단위 on 상태값
               약정(월단위) → 할당량 기준 과금
  - Database 라이센스 미포함
    * `Open Source Community : PostgreSQL, MySQL, MariaDB, Redis`
    * `BYOL : EPAS,Tibero, MS SQL Server`
  - Database Managed Service 및 Carepack은 별도 과금

### Installed DB
  - 가상 서버(VM)에 Database 엔진을 사용자가 `직접 설치`하고 Database 자원 운영
  - `RDB : CUBRID`
    `NoSQL : Cassandra`
  - 과금단위 : Installed DB는 `VM 이용요금 외 별도 추가 없음`
  - 과금요건 : 무약정(시간단위)
               약정(월단위)

#### 업무 유형별 Database
  - `RDB(OLTP형)`: MS SQL Server, MySQL, EPAS, PostgreSQL, MariaDB, Tibero, CUBRID
    * 범용 MIS
    * 다수 사용자 데이터 변경, 조회
    * 업무 요건 다양하고 복잡
  - `RDB(OLAP형)` : Vertica, SQream
    * 데이터 분석
    * 분석을 위한 대량의 데이터 통합
  - `NoSQL` : Redis, Cassandra
    * 비정형 데이터 처리
    * 초 단위 대량 데이터 발생
    * 실시간성 대량 데이터 쓰기
    * 설비/단말기/웹로그/메시지 관리 등의 업무

#### Database 별 제공 기능 리스트
  - 대부분 High Availability, Read Replica, Minor Patch, 파라미터 설정, Audit 설정 가능    
  - `Tibero,Redis는 Read Replica 안됨`
  - `Redis는 Audit 안됨`

#### RDB Database의 HA 구성
  - 오픈소스 기반 이중화 지원
  - Primary/Secondary `이중화 구성`
  - 동일 VPC 내에 구성
  - `최대 5개의 Read Replication`으로 비동기 복제로 읽기 성능 제고

#### NoSQL의 HA 구성
  - Read Replication 기술로 DB 트랜잭션 분산을 통해 읽기 성능 제고
  - 동일 VPC 내에 구성
  - `Sentinel과 Read Replication 기능` 활용
  - `최대 2개의 Read Replication`으로 읽기 성능 제고
  
<hr/>

# Network
### VPC
  - 일반(Public, Private), 로컬 서브넷단위
  - `프로젝별 최대 5개 VPC 생성` 가능
  - 모든 구간에 방화벽&로그관리 가능
  - `Virtual IP` 기능 제공으로 서브넷 내의 `사설IP를 예약`하여 사용 가능
  - `Public IP` 기능으로 `공인IP를 예약`하여 고정으로 사용 가능하며 공인IP 사용 목록 조회 가능
  - 월단위 : `Internet Outbound Traffic, VPC Peering, VPC Endpoint`
    시간단위 : `Public IP, NAT Gateway`

### Transit Gateway
  - 고객 네트워크와 연결 or `여러 VPC들 간` 연결 허브 기능 제공
  - `Peering 연결과 동시 구성 불가`
  - TG는 `프로젝트 당 최대 3개` 생성 가능
  - TG에 `최대 5개 VPC 연결` 가능
  - 요금 : `TG 생성 요금 + VPC 연결 트래픽 요금`(월단위)
           TG peering 시 `TG 간 전송되는 누적 트래픽량 측정`(월단위)
  - 고객사망과 열결 시 포트요금은 월정액 요금에 추가  

### Direct Connect
  - 고객 네트워크과 연결할 `단일 VPC 선택`
  - Direct Connect Firewall 제공
  - `포트요금 + 데이터 전송요금(월단위)`  * 누적 전송 데이터량(GB단위)
    대용량 포트 대역(20 Gbps, 40 Gbps) 생성 가능

### VPN
  - 외부 네트워크와 클라우드 네트워크를 암호화된 가상 전용망을 통해 연결
  - IPSec : 가상 터널링
  - VPN Gateway : 외부에서 접근이 불가능한 사설망에 고객사 연결이 가능한 Gateway
  - VPN Tunnel : VPN Gateway 당 `최대 5개`, 이중화 구성 가능
  - `IPSec, VPN Gateway 생성 기준 월단위`
    `인터넷 Outbound 트래픽 요금 GB당 과금`

### Firewall
  - Internet Gateway, VPC Peering, Transit Gateway, Direct Connect, Load Balancer
  - `무상 제공`, 보안 로그 저장 시 저장공간에 대한 스토리지 사용료 별도

### Security Group
  - VM의 트래픽을 제어하는 가상 방화벽
  - Virtual Server, GPU Server, Auto-Scaling Group, Database, Elasticsearch, Kubernetes Engine
  - `프로젝트 당 1000개` 정책 가능
  - `무상 제공`

## Load Balancer
  - 트래픽 수신하는 서비스IP와 부하분산할 대상 서버 등록
    대상서버 : LB인스턴스 내 서버그룹 or VPC Auto Scaling Group
  - Round Robin, Least Connection, Hash 알고리즘 방식
  - `LB size 별 요금과 서비스 수 만큼의 요금 합`(시간단위)
    * small, medium은 VPC 당 1개
    * large는 프로젝트 당 1개

### DNS
  - 인터넷상의 도메인 이름 등록과 관리
  - public 도메인 : 인터넷을 통해 어디서든 조회 가능
  - private 도메인 : 지정된 네트워크 환경에서만 접속 가능
  - 사용자 개입 없이도 대규모 쿼리 볼륨 처리
  - `호스팅 영역을 사용한 일단위 과금`
  - 최초 생성 후 `12시간 테스트 기간은 무료`
  - 도메인 비용은 WHOIS 도메인별 요금 적용(연간)

### GSLB
  - `지역별 트래픽 증가시 트래픽을 분산`
  - SCP와 On-Premises를 `Hybrid Cloud로 구성하는 서비스에 부하 분산`
  - Ratio, Round Robin 알고리즘 방식
  - 도메인 요금 : `도메인 레코드별 사용시간`
    Health Check 요금 : `Health Check 리소스별 사용시간`

### Global CDN
  - 사용자에게 가장 가까운 웹서버를 이용하도록 함
  - 원본 콘텐츠의 유효성 식별을 위해 인증서 설정
  - 캐시 만료 시간 설정
  - HTTPS 프로토콜로 보안 강화
  - `월단위 CDN 사용량에 대한 구간별 요금의 합`
  
<hr/>

# Security
### WAF
  - HTTP/HTTPS
  - SQL Injection, XSS, File Include, File Up/Download, Web Scan 등 공격 분류
  - 트래픽을 모니터링하여 보호(IP차단)
  - WAF 서비스는 운영/관제가 포함되서 제공
  - `요금은 처리량에 따라 결정`

### DDos Protection
  - DDos 공격을 탐지하고 방어
  - DMZ 내부 보호
  - `공인IP 수량 기준(기본료에 1개 IP 포함)`
    `초과시 IP당 추가 과금`

### IPS
  - 실시간으로 탐지/대응하는 서비스
  - 공통 rule 기반 탐지
  - 무약정 및 약정(1년)
    `VM 인스턴스 타입에 따라 과금`

### Secured VPN
  - 고객 네트워크와 SCP는 `암호화된 가상 전용망으로 연결`
  - IPSec과 SSL 환경 모두 제공
  - Virtual Private Gateway 생성
  - Virtual Tunnel 생성
  - IPSec VPN : `대역폭 기준으로 결정`
    SSL VPN : `기본 사용료와 동록된 ID에 따른 추가요금`

### Secured Firewall
  - `IP 필터링, Port 필터링`, 접근제어, 로깅 및 감사추적, 인증, 무결성 체크, 업데이트 제공
  - `IP, 프로토콜, 포트 기반의 ACL 정책을 기반`으로 탐지 및 차단
  - VM spec(vCore, Memory) 및 수량 기준

### Certificate Manager
  - SSL/TLS 보안 인증서를 등록하여 보호
  - 외부기관에서 발급한 SSL/TLS 조회, 등록
  - Load Balancer와 DevOps Service 상품의 인증서 연계 서비스
  - `인증서 등록 무료`
  - 심사수준 : DV > OV > EV

### Key Management Service
  - 암호화/복호화 (AES 256)
    암복호화 및 서명/검증 (RSA-2048)
    서명/검증 (ECDSA)
  - 사용자는 KMS를 통해 생성된 마스터키 활용
    데이터를 암호화하는 데이터키를 직접 생성
  - 키 라이크 사이클 관리
    `키 회전(1~730일), 키 삭제(72시간 후), 키 사용이력`
  - `보유키 개수 + 키 호출 건수` → 과금
  
<hr/>

# DevOps
### DevOps Service
  - `클러스터 대상 뿐만 아니라 VM 서버 대상 배포 자원으로 통합 관리 가능`
  - Artifact Repository 내 방화벽이 외부로 오픈되어 있어 `별도 저장 없이 인터넷 라이브러리 사용 가능`
  - DevOps Console : `1500원/월`
    * 최초 5명 무료
  - Release Management : `1000월/활성화, workflow/월`
    * `매월 workflow 1개 무료`
    * 활성화 workflow : 1개월간 코드를 1회 이상 변경한 것

### Github Enterprise
  - 보안 : Code Sacnning, Secret Scanning
  - 협업을 위한 wiki 및 작업 도구
  - java, javascript, .NET, ruby
  - BYOL
  - `요금체계는 VM일체형`, Virtual Server 상품에 SW로 제공
  - DevOps Service와 연계 가능
  - 무약정 : VM on/off 따라 시간 단위
    약정 : 약정 조건에 따라 월단위
    * `OS Disk 기본 100GB 무료 제공, 추가 시 Block Storage 요금 기준 과금`

# Container
#### Virtual Machines vs Containers
  - Virtual Machines
    * 높은 격리 레벨에 따른 `보다 높은 보안 수준`
    * 다양한 OS를 동시에 사용 가능
    * 특정 시점의 데이터 복구가 가능한 Rollback 기능 제공
  - Containers
    * 수초 내에 빠른 애플리케이션 배포
    * `Host OS Kernel을 공유하여 효율적인 자원 공유`
    * 핵심 기술이 오픈소스로 라이선스 비용 절감
    * 이미지로 만들고 공유하여 재활용

#### Kubernetes
  - `컨테이너의 분산 배치`, 상태 관리 및 구동 환경을 관리해 주는 컨테이너 런타임을 통해 컨테이너를 다루는 도구
  - 서비스 검색과 로드밸런싱
  - 스토리지 오케이스트레이션
  - 자동화된 롤아웃과 롤백
  - 자동화된 빈 패킹
  - 자동화된 복구 및 시크릿 구성 관리    

### Kubernetes Engine
  - `Kubernetes Cluster 제공`
  - 기본 제공하는 Kubernetes Control Plane을 통해 별도 구성없이 표준 Kubernetes 환경 사용 가능
  - 다른 표준 Kubernetes 환경의 애플리케이션과 호환
  - `시간당 100원, worker nodes 별도`

### Kubernetes Apps
  - `SW를 이미지화하여 제공`
  - 컨테이너 이미지를 클러스터에 손쉽게 배포
  - 컨테이너 일체형 구동 환경 지원
  - `Tomcat, Wildfly, NGINX, Apache HTTP Server → 무료`
    `상용 SW → BYOL`

### Container Registry
  - `컨테이너 이미지 저장, 관리, 공유`
  - Object Storage와 연동하여 효율적 이미지 관리
  - 암호화된 저장, HTTPS 사용, IAM 리소스 기반 접근 권한 관리
  - Registry용 Storage : `GB당 120원`
    Container Image Scan : `건당 150원`
  
<hr/>

# AI
#### Kuberflow
  - `Kubernetes 기반`의 MLOps 환경을 제공하는 `오픈소스 Machine Learning 플랫폼`
  - 자사의 AI 플랫폼과 Kuberflow 연계 상품 제공
  - ML 영역별 최적의 오픈소스 조합을 다양한 인프라에서 제공
  - `재사용 가능한 컴포넌트 기반의 Pipeline으로 End-to-End ML workflow 수행`
  - 모델 개발 → 모델 학습 → 모델 튜닝 → 모델 서빙 → 모델 관리

### AI & MLOps Platform
  - `사용자가 직접 Kuberflow 기반 MLOps 환경을 생성 및 운용 가능한 환경 제공`
  - Kuberflow Mini : vCPU 24, Memory 96G 이상
    AI & MLOps Platform : vCPU 36, Memory 128G 이상
  - `모델 개발환경 및 튜닝`
    * Jupyter Lab, Rstudio, Visual Studio Code
    * Katib(하이퍼파라미터 최적화 기능 지원)
  - `모델 서빙 및 파이프 라인`
    * KServe
    * Pipeline
  - `자원 최적화 및 효율화`
    * 분산 Job 실행 및 관리
    * GPU Job Scheduling
  - `편리하고 안정적인 관리`
    * 추론 결과 로깅 및 분석
    * SCP 사용자 인증 연동 및 관리자 환경 제공
  - `Mini(0원)와 Platform(300원/시간) 중 선택한 요금 + vCore당 라이센스 요금(15원/시간) 합`

#### CloudML
  - `CloudML Notebook`
    * Kubernetes 기반으로 Jupyter Notebook 환경 제공
    * 인터프리터 형식의 Python을 사용하는 개발에 최적화
  - `CloudML Rstudio`
    * Kubernetes 기반으로 머신러닝 모델을 생성하고 학습시키기 위한 IDE 워크플로우 제공
    * 분석 환경을 시각화
    * AutoML 함수 제공(데이터 클렌징, 의사결정 나무, 분류, 회귀모델 등)
  - `CloudML Pipeline`
    * Kubernetes 기반으로 머신러닝 모델의 학습 및 실행을 파이프라인 형태로 관리
    * 각 단계별 분석과 학습 실행이 가능
    * 파이프라인 각 실행 단계를 Kubernetes Pod로 정의
  - `CloudML Experiments`  
    * Kubernetes 기반으로 머신러닝 모델 학습의 실험 정보를 기록 및 비교하여 챔피언 모델을 관리
    * 오픈소스 MLflow 기반 실험 관리 및 비교

### AICR
  - 딥러닝 기반 이미지 인식 기술
  - 97개국 언어, 영수증/물류 관련 문서 등 인보이스 분석 제공
  - `API 호출 방식`
  - `Object Storage 활용`
  - JPEG, PNG : `10MB`
    PDF : `50MB/150페이지`
  - 추출한 데이터 종류에 따라 `페이지 단위 과금`

### Text API
  - 문장 및 텍스트의 의미를 이해하고 분석
  - `Summary API`(요약), `STS API`(유사도)
  - 생성요약 방식으로 문장 내 중요정보 포함 및 자연스러운 내용 요약
  - 검색 엔진, VOC, 추천 시스템 등
  - `API 별 호출 건수에 따라 과금(월단위)`

### Vision API
  - 이미지 내 여러 정보들을 인식하고 분석
  - 출입시스템, 스마트 CCTV
  - `Object Storage 활용`
  - JPEG, PNG : 80x80 픽셀 ~ 4096x4096 픽셀
    Base64 이미지(5MB), Object Storage 이미지(15MB)
    최대 인식 얼굴 수 : `1000개`
  - `API 호출 건수에 따라 월단위, 1000건 단위로 올림적용`
  
<hr/>

# App Service
### API Gateway
  - 여러 서비스의 API를 통합하고 관리
  - API Collection별 Key 발급을 통한 사용자 접근 제어
  - `사용량 정책 등록으로 과도한 트래픽 인입 방지`
  - 버전 관리 및 `Swagger Import`로 리소스 등록 가능
  - Load Balancer와 Kubernetes Engine과 같이 씀
  - `API 호출 성공 건수에 따라 월단위 0.004월/건`

### Notification
  - mail : 발송 성공 `1건 당 0.5원`
  - sms : 수신 1건 당 `sms 10원, lms 30원, mms 100원, 국제sms 1500원`, 080수신거부는 `월정액 30000원`
  - push : 발송 `1건 당 0.04원`
  
<hr/>

# Analytics
#### Data Analytics 서비스
  - `Data Source + Data Ingestion + Data Processing + Data Discovery + Analytics + Big Data Application`
  - 쉽고 편리한 클러스터 구성 및 관리
  - 고 가용성 및 뛰어난 안정성 보장
    * 스케일 아웃(Apache Kafka)
    * 자체 동기화 복제 방식 클러스터 구성(Elasticsearch)
    * 마스터 노드 이중화 구성(Cloud Hadoop)

### Apache Kafka
  - 실시간 데이터 사용해야하는 애플리케이션에 실시간 데이터 제공
  - 프로듀서가 write하고 컨슈머가 read, topic을 공유
  - VM 환경에서 동작, VPC 기반으로 단일 인스턴스 or 클러스트 구성 가능
  - VM 일체형, 무약정은 서버 on 상태값 기반으로 시간 단위
    인스턴스는 ZooKeeper, AKHQ 생성 시에만 사용 가능

### Elasticsearch
  - 분산형 RESTful 검색 및 분석 엔진
  - `Beats` : 로그수집

    `Logstash` : 데이터를 필터를 통해 변환 후 Elasticsearch로 전송

    `Elasticsearch` : 아파치 루씬 기반의 full text로 검색이 가능한 오픈소스 분석 엔진

    `Kibana` : 데이터 처리 환경 및 데이터 시각화 플랫폼

  - VM환경에서 동작, VPC 기반의 단일 인스턴스 or 클러스터 구성
  - 무약정(시간단위)
    약정(월단위)
    `OS는 리눅스 기준`

### Vertica (DBaaS)
  - Masterless 클러스터의 분산 아키텍처
  - 컬럼기반 저장 기술, 빠른 적재 기술 제공
  - `BYOL 적용 제품`
  - 무약정(시간단위)
    약정(월단위)
    `OS는 레드햇 기준, DB Managed 및 Carepack은 별도 부과`

### SQream
  - 컬럼기반 저장기술을 적용한 DB로서, `OLAP를 효율적으로 수행`
  - `GPU 코어를 활용하여 병렬 처리`
  - 빅데이터 분석에 특화된 GPGPU 기반의 데이터 베이스
  - 설치형 Database 상품
  - `NVIDIA CUDA 프레임워크 활용한 MPP 기능`
  - `VM 이용요금 외에 별도의 추가 요금 없이 제공`
  - SQream DB 라이센스 요금은 마켓플레이스에서 제공

#### Quick Query
  - `Object Storage에 저장된 데이터를 빠르게 분석하는 대화형 쿼리 서비스`
  - `표준 SQL`을 사용
  - 대규모 병렬 처리(MPP) 기반의 쿼리 엔진(`Trino 엔진`)

#### Greenplum (DBaaS)
  - 엔터프라이즈 분석을 위한 `대용량 정형 및 비정형 데이터 분석 플랫폼`
  - `오픈소스`이며 VMware의 데이터 솔루션
  - `PostgreSQL Database 기반`의 대규모 데이터 병렬처리 분석 플랫폼

#### Apache Hadoop
  - 빅데이터 처리를 위하여 클러스터에서 동작하는 자바기반 분산 처리 프레임워크
  - Hadoop Common, HDFS, YARN, MapReduce, 다양한 에코시스템

### Cloud Hadoop
  - 아파치 하둡 클러스터를 관리형으로 제공
    * 초기 설치 : `HDFS, YARN, HBASE, HIVE, TEZ, Hue, Solr, Spark, LIVY`
  - 다양한 오픈소스 에코 시스템 지원
    * 추가 설치 : `ZooKeeper, Atlas, Ranger, KERBEROS, Kafka, Flume, Sqoop, Oozie, Kudu, Impala`
  - `VM과 결합상품, OS는 CentOS와 레드햇 기준, OS 디스크 100GB 기본 제공`
  - 무약정(시간단위)
    약정(월단위)

#### Apache NiFi
  - 자바 가상 머신에서 실행되는 자바기반 오픈소스
  - `시스템 간 대용량 데이터 전달을 자동화`

### Date Flow
  - 데이터를 추출, 변환, 전송(ETL)하고 데이터 처리 흐름을 자동화
  - `Apache NiFi 기반`
  - Kubernetes Engine의 `컨테이너 Pod의 CPU 사용시간 단위 과금`
    `1 vCore 당 54원/시간, 1분단위 과금`

#### Apache Airflow
  - 파이프라인 구성과 관리를 위한 오픈소스 Workflow 관리 플랫폼
  - `Python 기반`으로 작성

### Data Ops
  - 주기적, 반복적으로 발생하는 데이터 처리 작업에 대해 워크플로우 작성후 작업 스케쥴링을 자동화
  - `Apache Airflow 기반`
  - Kubernetes Engine 클러스터 환경 기반
  - Kubernetes Engine의 컨테이너 `Pod의 CPU 사용시간 단위 과금`
   ` 1 vCore 당 129원/시간, 1분단위 과금`

#### Data Preparation Tools
  - `데이터 전처리 공정을 효율적으로 수행할 수 있도록 도와주는 도구`
  - 데이터 정제 : 중복과 노이즈 제거
  - 탐색적 데이터 분석 : EDA
  - 변환 : 연결, 정형화, 거버넌스, 결측치 처리

### Data Wrangler
  - 쉽고 빠르게 데이터 탐색, `원하는 형태로 재구성`
  - 신청 시 Kubernetes Engine까지 한번에 신청 가능
  - 다양한 데이터 분석 함수 제공 : Group 함수, Window 함수
  - Kubernetes Engine의 컨테이너 `Pod의 CPU 사용시간 단위 과금`
    `1 vCore 당 76.2원/시간, 1분단위 과금`

#### Data Catalog
  - `오픈소스 Apache Atlas와 Ranger를 기반`으로 데이터 자산의 메타데이터를 수집하고 통합 관리하는 서비스는
  - 메타데이터를 항상 최신 상태로 유지
  
<hr/>

# Management
### Logging & Audit
  - 별도 설정없이 `90일간` 활동로그 저장
  - `Object Storage 연동 → 별도 과금`
  - 활동 내역 조회 무료
    사용자가 생성하는 `Trail은 로그건수 당 0.02원`

### Cloud Monitoring
  - 운영 중인 인프라 리소스의 사용현황/변경 정보 로그 수집
  - 로그 모니터링 (`저장공간 1GB 기본 제공`)
  - 기본 모니터링 무료 제공

### VM Migration
  - Migration Tool : `상용 Zconverter 활용`, `SW 라이센스 및 기술 지원료 별도 과금`
  - Migration Image : `VMWare 자체 기능인 OVA import 기능`, Image 생성/저장에 따른 `스토리지 사용료 과금`
  - Zconverter : VM to VM, BM to VM, 타 Cloud to SCP
  - 암호화 기반 데이터 전송 지원
  
<hr/>

# SLA
### 클라우드 서비스의 특징
  - `On-demand` : 필요시 언제나 신속하게 사용
  - `Pay-as-you-go` : 사용한 만큼 유연하게 과금

### SCP 할인 프로그램
  - Cost Savings
    시간당 요금 정의
    적용단위 : `Project ID`, `Account`
    적용대상 : `Compute`(VM, BM), `Database`(DB Service)
    * 무약정 대비 최대 할인율 1년 35%, 3년 40%
  - EDP
    고객사 단위 계약
    연간 사용료 약정에 따른 SCP 사용료 총액 할인 제공

### SLA 정책
  - 서비스 업체가 이용자에게 제공하는 서비스에 대한 수준을 기술한 문서
  - 제공 서비스에 대한 월 가용률과 이를 지키지 못한 경우에 대한 배상기준 명시
  - 배상기준
    단일 인스턴스 : `99% ~ 99.9% → 10%`
                   `95% ~ 99% → 25%`
                   `95% 미만 → 100%`
    2개 인스턴스 : `99.9% ~ 99.99% → 10%`
                   `95% ~ 99.9% → 25%`
                   `95% 미만 → 100%`
  - 회사 책임이 아닌 경우
    * `천재지변`, 전쟁, 폭동, 테러 등 불가항력 사유
    * `회사가 관리하지 않은` 통신회선의 장애 등 `외부요인`
    * `제 3자`가 소유 또는 공급한 `소프트웨어, 하드웨어 오작동`
    * `사전 공지` 후 서비스를 중단한 경우
  - 고객 책임인 경우
    * 고객이 제공한 정보의 문제 또는 `고객 소속 직원 등의 오조작` 등
    * 고객의 입력에 의해 발생한 장애 또는 `사용 정책을 위반`하여 장애가 발생
    * `이용요금이 발생하지 않는` 경우, `이용요금을 연체`하고 있는 서비스를 이용하는 기간에 장애/오류
    * `회사가 사전에 위험보고` 하였으나 고객이 필요한 조치를 수행하지 않음
  - 배상절차
    * 발생한 월의 `익월 말일`까지 회사에 배상 청구해야 함
    * 계정정보, 대상상품, 과제명, 장애시간, 로그자료 첨부
    * 장애로 확인된 경우 `익월 내 배상`을 진행
    * 배상금액은 익월 내 `SLA 크레딧을 지급`하여 배상함
  
<hr/>

# Well Architected 설계원칙 : 보안
### 1. 역할기반의 권한 정책 구현
  - `최소한의 권한` 부여
  - 그룹 기반 사용자 권한 관리
  - 인증키 만료 기간 설정 및 `접속 IP 제한 설정`
  - 사용자 활동 로깅 활성화

### 2. 저장 중 데이터 보호, 전송 중 데이터 보호
  - 중요 데이터는 암호화 저장
  - 백업/스냅샷을 통한 데이터/애플리케이션 보호
  - 온프레미스와 안전한 통신을 위해 `VPN, Direct Connect 연결로 전송 암호화`
  - SSL/TLS 인증서 통합 관리(1년 주기로 갱신)

### 3. 가능한 모든 자원에 보안 적용
  -` Virtual Server는 최대한 프라이빗 서브넷에 배치`하여 보호
    * 프라이빗 서브넷에서는 NAT IP 비할당
    * 외부 요청 앤드포인트는 로드밸런서가 담당
  - Bastion Server로 프라이빗 자원을 관리(`지정된 외부 IP접근`)
  - `보안 서비스, Security Group, Firewall 정책`을 서버 및 네트워크 기능에 적용
    * Security Group 포트 설정을 통해 네트워크 트래픽 제어
    * 외부에서 데이터베이스 직접 접근 차단
  - `다층 방어`를 통한 계층별 트래픽 제어

### 4. 지속적인 보안 관제와 추적 수행
  - 워크로드의 특성에 따른 보안 서비스 적용
  - `Security Monitoring`을 통한 통합 보안 관제
  - 추적 기능 활성화

### 5. 지속적으로 취약점 개선 및 운영
  - `Virtual Server Image Hardening`
  - 웹취약점 점검을 통한 웹 애플리케이션 취약점 개선

### 6. 보안 이벤트에 신속 대응
  - `Auto Scaling`을 통해 부하에 대응
  - 확장이 시작되면 관리자에게 알림 전송
  - `Firewall에서 발신지 IP 차단`
  
<hr/>

# Well Architected 설계원칙 : 가용성
#### 클라우드 가용성 고려 요소
  - `사업자 영역`
    * 데이터센터 수준 장애 또는 재해
    * 호스트 또는 기능 수준 장애
    * 정기 유지보수
  - `사용자 영역`
    * 부적합한 설계 또는 운영
    * 보안 공격
    * 네트워크 연결
    * 예상치 못한 사용자 폭증

### 1. 관리형 서비스로 고가용성 아키텍처를 구현
  - Virtual Server에 솔루션을 탑재해서 서비스를 하는 것보다 `고가용성 아키텍처를 구현 가능`
  - IaaS : 사용자가 가용성 관리
  - PaaS : 클라우드 사업자가 가용성 관리

### 2. Auto Scaling으로 유연하게 클라우드 자원을 제공
  - Virtual Server가 정지하거나 정지하려고 할 때 자동 방지를 위한 즉시 대응 조치 필요
  - `Auto Scaling으로 서버 수를 늘려 부하 증가에 대응`할 수 있음
  - 클라우드 제한을 고려해 확장을 설계
    * `생성 가능한 최대 서버수는 10대`
  - 장애를 고려해 서버 수량을 결정
    * `작은 서버 타입을 여러 개 배포`
  - 커플링된 구조(웹, 애플리케이션이 서버 IP 주소로 통신)에서는 확장성 있는 인프라 구현 곤란
  - `애플리케이션 결합 해제(디커플링)`
    * 결합 구조 분리를 위해 웹, 애플리케이션 티어 사이에 로드밸런서 배치
    * Auto Scaling으로 서버 늘어도 요청을 보내는 지점은 한 개의 로드밸런서
  - `상태 비저장 서버를 구현`
    * 상태관리 DB에 수신 요청 메세지 저장 시 CPU 처리 여력이 생길 때 해당 DB에서 추출, 처리
    * 상태관리 DB : NoSQL DB 주로 사용, 높은 처리 속도 필요 시 Redis 인메모리 DB 사용

### 3. 마이크로 서비스 아키텍처를 고려
  - 대규모 서비스의 기능 간 `병목 해결`
  - `쉽게 확장 가능`한 컨테이너로 서비스 배포, 데이터베이스도 서비스별 분리
  - Front End와 서비스, 서비스와 서비스는 `API 통신`을 통해 요청 전달

### 4. 서버리스 아키텍처를 고려
  - `Object Storage` : 서버리스 컴퓨팅에 최적화된 서비스
    * REST API로 접근
    * 디스크 개수, RAID 구성 여부 확인 불필요
    * API 데이터를 제공하는 왭서버
  - 웹서버를 API Gateway, 서버리스 Functions, Object Storage로 대치 시 `가용성 부담 경감`
  - `정적 컨텐츠는 Object Storage`, `동적 컨텐츠는 서버리스 Functions 기능`을 사용 하여 DB에 읽고 쓰기       

### 5. 온프레미스에서 클라우드로 확장
  - `온프레미스 클라우드 부하 분산`
    * 온프레미스 서버를 Virtual Server로 생성, Auto Scaling 구현
  - `GSLB`
    * 온프레미스 사용률이 임계치 초과 시 임계치 이하로 내려올 때까지 GSLB 가중치 조정(Ratio 알고리즘)
    * 하이브리드 클라우드를 통해 온프레미스 신규 투자 절감
  
<hr/>

# Well Architected 설계원칙 : 안정성
#### 안정성 목표 수준 지표
  - `RTO : 복구 목표 시간`
    * 장애/재해 발생으로 서비스가 중단되었을 때, 얼마 만에 `서비스를 재개`해야 하는가에 관한 복구 목표 시간
  - ` : RPO복구 목표 지점`
    * 장애/재해 발생했을 때, 얼마 동안의 `데이터 손실을 감수`할 수 있을지 정하는 복구 지점 목표
    * 원본 저장소와 동일한 장비를 만들어 데이터가 생성, 변경되면 그대로 데이터를 복제(복제) → `투자 비용↑`
    * 일정 주기로 원복 데이터를 복사해서 저장(백업) → `투자 비용↓, 성능↓`

#### 클라우드 안정성 구현 방안
  - 백업(비용 최소화)을 통한 데이터 보호 설계
  - `Cold DR 사이트 설계`
    * `클라우드에서만 가능`한 모델
    * WEB, WAS는 각 주사이트의 운영 서버의 용량과 유사한 서버 타입을 선택한 후 정지 상태로 대기
    * 주사이트 용량보다 `작은 서버 타입을 선택`하고, `비동기식 복제 구성`
    * 사내데이터센터와 이스트 리전 간에 배치하고, Round Robin 알고리즘, Health Check 설정
    * RTO : Virtual Server 시작 시간, GSLB 전환 작업시간
      RPO : 데이터베이스 복제 지연 시간
  - `Warm DR 사이트 설계`
    * 온프레미스의 DR 방식 + 클라우드 특성
    * 작은 서버 타입으로 배포 → 원래 필요했던 서버 타입으로 확장
    * `재해 시 GSLB에서 요청 전환`
    * RTO : 장애발생 감지 및 GSLB 전환시간
      RPO : 데이터베이스 복제 지연 시간

### 1. 기능의 분산 및 이중화로 복원력, 가용성 증대
  - 단일 기능 장애가 전체 장애로 이어지는 것 방지
  - `이중화로 SPOF 개선` 또는 가용성 높은 관리형 서비스 사용

### 2. 모든 자원을 백업
  - Virtual Server 보호
    * Custom Image를 최신 상태로 유지 및 관리
    * Backup 서비스로 정기적 백업(Object Storage)
  - 저장소 데이터 보호
    * Database 서비스로 `정기적 백업`
    * File Storage에서 `스냅샷 통해 백업`
    * Object Storage에서 `버전 관리 및 복제`

### 3. 템플릿으로 자원 관리 및 자동화
  - CLI, Open API를 통해 자원 생성, 수정, 삭제를 `스크립트화`

### 4. 가용 영역에 자원 분산
  - 가용용역 : `Region 내에서 물리적으로 격리`되어 있으면서 `고속 프라이빗 네트워크로 연결`되어 있는 데이터센터 집합

### 5. 주기적으로 Game Day 수행
  
<hr/>

# Well Architected 설계원칙 : 성능효율성
#### 성능 개선 영역
  - `지연 시간 단축`
    * Virtual Server 메모리 용량 검토
    * 데이터베이스 지연 시간 개선
  - `처리량 개선`
    * 네트워크 대역폭
    * API 방식 애플리케이션 연결
    * 스토리지 디스크 처리량에
    * 가상 머신으로 처리량 확보가 어려울 경우 Bare Metal Server
  - `캐싱 적용`
    * 아키텍처 설계에 CDN 적용 시 성능 효과 기대 (서버 부하 분산, 지연 속도 절감)
    * 데이터베이스에 Redis를 배치하면 더 낮은 지연 속도로 성능 향상

### 1. 컴퓨팅 선택
  - `컨테이너 선택`
    * Kubernetes 기반 컨테이너 오케이스트레이션 서비스가
    * DevOps 서비스
  - `Bare Metal Server`
    * 클라우드 애플리케이션 중 `단위 서버`의 성능이 필요한 경우 사용
  - `HPC Cluster`
    * 시뮬레이션 애플리케이션 가동을 위해 높은 컴퓨팅 성능이 필요한 경우 사용
  - `GPU Server`
    * 대규모 기계 학습이 필요한 경우 사용

### 2. 스토리지 선택
  - Block, File, Object
    * Block : 액세스 패턴 `무작위`
    * File, Object : 액세스 패턴 `순차적`

### 3. 데이터베이스 선택
  - 최선의 선택은 `데이터베이스 서비스 이용`
  - `관리형 데이터베이스`
    * EPAS, MS SQL, PostgreSQL, Tibero, MariaDB, Vertica, MySQL
    * Redis, Elasticsearch, Cassandra
  - `PostgreSQL, MySQL`
    * 읽기 복제본을 지원하여 데이터베이스의 읽기 부하 분산

### 4. 네트워킹 선택
  - `프라이빗 네트워크 연결`
    * VPN
    * Direct Connect
    * Transit Gateway
  - `클라우드 내부 네트워크`
    * Load Balancer
    * VPC Peering

### 5. 성능 모니터링
  - `Clound Monitoring`    
  
<hr/>

# Well Architected 설계원칙 : 운영우수성
#### 클라우드 특징과 운영
  - 소프트웨어로서의 인프라 → `코드로서 운영`
  - 언제나 확장 및 축소 가능 → `운영 자동화`
  - 언제나 삭제 가능한 인프라 자원 → `실험을 통해 패턴 축적`
  - 개발과 운영의 통합 → `DevOps (배포 신속성 + 안정성)`
  - 운영 자동화 수준 : 온프레미스 < Bare Metal Server < Virtual Server < Container
  - 애플리케이션 수준 : 코딩, 빌드, 통합, 릴리즈, 배포 단계의 파이프라인 구현
  - 인프라 수준 : 컨테이너로 자동화 구현

### 1. 코드로 운영 작업 수행
  - 수작업 오류 방지
  - 클라우드 자원간 종속관계 이해
  - 코드 문서화 및 최신 상태로 관리

### 2. 모니터링, 추적, 알림 활성화
  - 성능 및 장애, 보안 이벤트, 과거 이벤트 추적 및 분석

### 3. 소규모 변경을 통한 점진적 개선
  - 클라우드는 테스트해 보기 좋은 환경
  - 테스트 환경을 구성해서 적용해보고 대체
  - 모든 변경은 되돌릴 수 있도록 설계

### 4. 장애에 대비, 일어난 장애로부터 개선
  - 장애 발생 시 우선 중간 시간 최소화, 이후 장애 원인 파악 및 조치 계획 수립
  - 모니터링 및 추적 기록 → 장애 원인 파악 및 대응에 중요한 자료
  - 장애 발생 조건에 대해 알림 조성, 조치작업 코드화

### 5. 운영 자동화
  - 운영 작업 수행 조건 지표화
  - 운영 작업 패턴화 및 코드 구현
  - 이벤트 기반 프로세스 구현을 통한 운영 자동화
  
<hr/>

# Well Architected 설계원칙 : 비용최적화  
#### 비용최적화 vs 비용절감
  - `비용최적화` : 투자 수익률(ROI)을 극대화하여 비즈니스의 위험을 줄이는 활동
  - `비용절감` : 제품, 서비스의 원가를 줄이기 위한 활동

#### 온프레미스 IT 투자비용 구조 
  - 초기 투자비용 : 애플리케이션 개발비, IT 자원 구매비
  - 누적 투자비용 : 유지보수비, 운영비
  - 매몰비용 : 이미 투자된 비용(기구축된 백본 네트워크, 냉공조 비용, 시설 경비 등)

#### 클라우드 IT 투자비용 구조
  - 온프레미스 대비 자원 구매비용 차이
  - 클라우드 사용료 : IT 자원 구매비용 및 매몰비용, 유지보수비 포함
  - 누적비용 : IT 자원 구매비용을 나누는 것보다 훨씬 증가
    * 일정 시점에서 클라우드 누적 비용이 온프레미스 투자 비용을 추월 → `CTLP(클라우드 경제성 한계점)`

#### 클라우드 비용최적화
  - CTLP 대비 사용자 정보 시스템 `내용연수가 빠르면 클라우드 사용`
  - CTLP 대비 사용자 정보 시스템 `내용연수가 느리면 온프레미스 사용`

#### 클라우드 가격 경쟁력 방법
  - 초기 투자 비용 낮추기
    * 클라우드 `PaaS 서비스 이용`해서 어플리케이션 개발 비용 경감
  - 누적비용 기울기 낮추기
    * `약정 요금제`, `수요에 맞게 자원 운영` 등  

#### 클라우드 비용 누수 유형
  - 사용되지 않는 클라우드 자원
  - Virtual Server 타입 과대 프로비저닝
  - 부적합 스토리지 유형 사용

### 1. 비즈니스 요구 사항과 예산의 절충점을 결정하여 설계
  - 가용률 향상을 위한 `중복 배치`
  - 장애,재해 시 `RTO(복구시간목표), RPO(복구지점목표) 수준을 결정`
  - 주 사이트와 동일하게 `보조 사이트 구축`
  - 주기적 백업하여 장애, 재해 발생 시 복구
  - Direct Connect : `안정적 속도 필요, 보장된 속도`
  - VPN : `안정적 속도 불필요, 비용 절감`

### 2. 적합한 컴퓨팅 자원 선택
  - SCP 컴퓨팅 자원 서비스
  - `PaaS`는 SW 운영 비용을 절감 가능
  - 향후 조정 가능하므로 `수요에 적합한 서버 선택`
  - 워크로드 성격에 맞는 `요금제 선택`
  - 소프트웨어 라이선스 검토
  - `최대한 소형 Virtual Server로 분산 및 배치`
  - 온프레미스 라이선스 보유하고, 퍼블릭 사용 권리가 있다면 `BYOL 활용`
  
### 3. 확장성을 감안한 컴퓨팅 아키텍처 설계
  - Pass를 활용한 `컴퓨팅 아키텍처 설계`
  - 사용량 증가를 예측할 수 없는 경우 `Auto Scaling 사용`
    * 일상적 워크로드는 약정, `특정 기간 부하는 무약정` 서버로 처리
    * `하이브리드 버스팅 구현`을 통한 온프레미스 투자 절감
    * Virtual Server의 시작 속도가 늦으면 대응이 늦으므로 `미리 확장해서 부하 대비`
    * 천천히 축소(Scale-in), Cooldown Time 조절(기본설정 300초)
  - `Job Scheduling`
    * 지정한 시간에 Virtual Server 시작/종료
    * 예) 주간 매출 보고서 취합 서버

### 4. 데이터 유형 및 요청 패턴에 따라 스토리지를 선택
  - Object Storage는 용량이 큰 문서, 미디어 파일 저장에 효율적
  - 데이터 수명 주기 관리를 통해 `사용량이 적은 데이터는 저렴한 스토리지로 이동`

### 5. 지속적인 운영 비용 추적 구현
  - 클라우드 자원에 대한 `태그 연결 규칙 수립`
  - Cloud Monitoring 지표에 대한 관리 정책 수립