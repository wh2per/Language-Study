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

### 네트워크 가상화 (SDN)
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
    * 계량 가능한 서비스

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

# Compute → `약정/무약정`  
### Virtual Server `약정`
  - 오픈소스는 community 버전 제공
  - 서버 사양 변경, Auto Scaling, 사용자 이미지 생성, Multi-AZ, Placement Group 가능
  - VM의 `서브넷/IP는 최초 생성시 설정된 값을 간편하게 변경 가능`
  - 과금 : 무약정(시간단위), 약정(월단위)
  - 미터링 : VM의 on/off 상태에 따라 실사용 시간 산정
  - `Public IP : 시간당 5.6원`
  - Auto Scaling : `무약정에서만 가능`, 자체 요금은 없으나 생성된 자원에 대한 요금 부과

### Bare Metal Server `약정`
  - 오픈소스는 community 버전 제공
  - `Placement Group(물리적인 분산배치)만 가능`
  - 서브넷/IP 설정 및 VPC Firewall 연계 설정 제공
  - 서버간 통신을 위한 로컬 서브넷 설정 제공
  - 외부 인터넷 통신을 위한 NAT IP 설정 제공
  - Hyper-threading On/Off(비활성화시 vCore가 절반으로 줄어듬)
  - 단독 물리서버에 OS 설치
  - 과금 : 무약정(시간단위), 약정(월단위)
  - 미터링 : BM의 on/off 상태에 따라 실사용 시간 산정

### HPC Cluster
  - CPU 기반 상품 : 제조 CAE, 바이오, 금융상품 위험 분석
  - GPU 기반 상품 : AI, IoT, 빅데이터
  - 과금 : 헤드 노드용 서버 on 상태의 `분단위 미터링`(23년 무료)
  - 미들웨어 SW는 오픈소스 무료, 자동 설치(Compiler, MPI Library, Job Scheduler)
  - Head Node Group은 Cluster를 관리하는 Head Node로 구성, Slurm Control 데몬이 설치됨
  - Compute Node Group은 실제 계산이 수행되는 BM기반 Compute Node로 구성, Slurm Compute Node 데몬이 설치됨
  - `File Storage`를 Head Node, Compute Node의 `공유 스토리지로 사용`
  - `IaaS 비용은 사용량 기반 별도 부과`

### FaaS
  - 서버가 없는 게 아니라 서버를 관리하지 않는 것
  - 수정 즉시 코드가 반영
  - 지원 Runtime : Python, Node.js, PHP
  - 코드가 실행되는 시간에 대해서만 과금
  - 과금기준 : `Function 호출 횟수 + 총 컴퓨팅 실행 시간(GB, 초)`
  - 비용 : 요청횟수 `1백만건 당 200원`, 실행시간 `1GB-초 당 0.017원` (400,000GB-초 까지 무료)

<hr/>

# Storage → `무약정`   
### Block storage
  - 직접 서버에 할당하여 사용
  - `대용량의 데이터 저장`이 요구
  - 타 Region에 원본 Block Storage(BM)을 복제하는 DR 복제 기능을 제공
  - VM에서 사용
    * Virtual Server 기본 OS, 추가 스토리지, Database 상품 등에 연결되어 사용
    * 사용자 볼륨 온라인 할당, 증설, 해제
  - BM에서 사용
    * Bare Metal Server 추가 스토리지에 연결
    * `Multi-Attach되어 공유 볼륨 구성 가능`(높은 가용성 보장을 위해 복수의 서버를 적용하는 기능)
    * 암호화 기능 제공
  - 볼륨사이즈 : 168TB(VM), 무제한(BM)
  - 최대 IOPS : 16,000 I/O
  - 최대 처리량 : 250MB/S
  - 암호화 제공
  - 서비스 `신청 용량기준 120원/GB`

### File storage
  - `다수 클라이언트에 대한 접근성을 높여` 데이터 저장/공유
  - 이기종 클라이언트에 데이터 엑세스를 제공하는 파일 수준의 스토리지
  - 웹 콘텐츠 관리, 빅데이터 분석
  - 타 Region에 원본 File Storage를 복제하는 DR 복제 기능을 제공
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
  - Multi-AZ 기능 제공
  - 볼륨사이즈 : 2PB
  - S3 API 제공
  - Amazon S3 관리 키 (SSE-S3) 암호화 사용, 버킷 기본 암호화 제공 (AES-256알고리즘)
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

# DB → `약정/무약정`
### Database Service(DBaaS) `약정`
  - Database를 즉시 사용할 수 있도록 Database 자원과 자원운영을 서비스 형태로 제공
  - `RDB : EPAS, PostgreSQL, MariaDB, MySQL, MS SQL Server, Tibero`
    `NoSQL : Redis`
  - 과금단위 : `VM 일체형 형태`로 제공
  - 과금요건 : 무약정(시간단위) → 시간단위 on 상태값, 약정(월단위) → 할당량 기준 과금
  - Database 라이센스 미포함
    * `Open Source Community : PostgreSQL, MySQL, MariaDB, Redis`
    * `BYOL : EPAS,Tibero, MS SQL Server`
  - Database Managed Service 및 Carepack은 별도 과금

### Installed DB `무료`
  - 가상 서버(VM)에 Database 엔진을 사용자가 `직접 설치`하고 Database 자원 운영
  - `RDB : CUBRID`
    `NoSQL : Cassandra`
  - 과금단위 : Installed DB는 `VM 이용요금 외 별도 추가 없음`

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
  - `Tibero, Redis는 Read Replica 안됨`
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

# Network → `무약정`
### VPC
  - 일반(Public, Private), 로컬 서브넷단위
  - `프로젝별 최대 5개 VPC 생성` 가능
  - 모든 구간에 방화벽&로그관리 가능
  - `Virtual IP` 기능 제공으로 서브넷 내의 `사설IP를 예약`하여 사용 가능
  - `Public IP` 기능으로 `공인IP를 예약`하여 고정으로 사용 가능하며 공인IP 사용 목록 조회 가능
  - 월단위 : `Internet Outbound Traffic, VPC Peering, VPC Endpoint`, 시간단위 : `Public IP, NAT Gateway`

### Transit Gateway
  - 고객 네트워크와 연결 or `여러 VPC들 간` 연결 허브 기능 제공
  - `Peering 연결과 동시 구성 불가`
  - TG는 `프로젝트 당 최대 3개` 생성 가능
  - TG에 `최대 5개 VPC 연결` 가능
  - 요금 : `TG 생성 요금 + VPC 연결 트래픽 요금`(월단위), TG peering 시 `TG 간 전송되는 누적 트래픽량 측정`(월단위)
  - 고객사망과 열결 시 포트요금은 월정액 요금에 추가  

### Direct Connect
  - 고객 네트워크과 연결할 `단일 VPC 선택`
  - Direct Connect Firewall 제공
  - `포트요금 + 데이터 전송요금(월단위)`, 대용량 포트 대역(20 Gbps, 40 Gbps) 생성 가능 * 누적 전송 데이터량(GB단위)

### VPN
  - 외부 네트워크와 클라우드 네트워크를 암호화된 가상 전용망을 통해 연결
  - IPSec : 가상 터널링
  - VPN Gateway : 외부에서 접근이 불가능한 사설망에 고객사 연결이 가능한 Gateway
  - VPN Tunnel : VPN Gateway 당 `최대 5개`, 이중화 구성 가능
  - `IPSec, VPN Gateway 생성 기준 월단위`, `인터넷 Outbound 트래픽 요금 GB당 과금`

### Firewall `무료`
  - Internet Gateway, VPC Peering, Transit Gateway, Direct Connect, Load Balancer
  - `무상 제공`, 보안 로그 저장 시 저장공간에 대한 스토리지 사용료 별도

### Security Group `무료`
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
  - Health Check 요금 : `Health Check 리소스별 사용시간`

### Global CDN
  - 사용자에게 가장 가까운 웹서버를 이용하도록 함
  - 원본 콘텐츠의 유효성 식별을 위해 인증서 설정
  - 캐시 만료 시간 설정
  - HTTPS 프로토콜로 보안 강화
  - `월단위 CDN 사용량에 대한 구간별 요금의 합`

<hr/>

# Security → `약정/무약정`
### WAF `약정`
  - HTTP/HTTPS
  - SQL Injection, XSS, File Include, File Up/Download, Web Scan 등 공격 분류
  - 트래픽을 모니터링하여 보호(IP차단)
  - WAF 서비스는 운영/관제가 포함되서 제공
  - `요금은 처리량에 따라 결정`

### DDos Protection `약정`
  - DDos 공격을 탐지하고 방어
  - DMZ 내부 보호
  - `공인IP 수량 기준(기본료에 1개 IP 포함)`, `초과시 IP당 추가 과금`

### IPS `약정`
  - 실시간으로 탐지/대응하는 서비스
  - 공통 rule 기반 탐지
  - 무약정 및 약정(1년), `VM 인스턴스 타입에 따라 과금`

### Secured VPN `약정`
  - 고객 네트워크와 SCP는 `암호화된 가상 전용망으로 연결`
  - IPSec과 SSL 환경 모두 제공
  - Virtual Private Gateway 생성
  - Virtual Tunnel 생성
  - IPSec VPN : `대역폭 기준으로 결정`
  - SSL VPN : `기본 사용료와 동록된 ID에 따른 추가요금`

### Secured Firewall `약정`
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
  - 암복호화 및 서명/검증 (RSA-2048)
  - 서명/검증 (ECDSA)
  - 사용자는 KMS를 통해 생성된 마스터키 활용, 데이터를 암호화하는 데이터키를 직접 생성
  - 키 라이크 사이클 관리 (`키 회전(1~730일), 키 삭제(72시간 후), 키 사용이력`)
    * 기본 90일
  - `보유키 개수 + 키 호출 건수` → 과금

<hr/>

# DevOps → `무약정`
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
  - 무약정 : VM on/off 따라 시간 단위, 약정 : 약정 조건에 따라 월단위
    * `OS Disk 기본 100GB 무료 제공, 추가 시 Block Storage 요금 기준 과금`

# Container → `무약정`
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
  - Kubernetes Engine은 경량화 된 가상 컴퓨팅인 컨테이너와 이를 관리하기 위한 `Kubernetes 클러스터를 제공`하는 서비스
  - 기본 제공하는 Kubernetes Control Plane을 통해 별도 구성없이 표준 Kubernetes 환경 사용 가능
  - 다른 표준 Kubernetes 환경의 애플리케이션과 호환
  - `시간당 100원, worker nodes 별도`

### Kubernetes Apps
  - `SW를 이미지화하여 제공`
  - 컨테이너 이미지를 클러스터에 손쉽게 배포
  - 컨테이너 일체형 구동 환경 지원
  - BYOL
  - `Tomcat, Wildfly, NGINX, Apache HTTP Server → 무료`, `상용 SW → BYOL`

### Container Registry
  - `컨테이너 이미지 저장, 관리, 공유`
  - `Object Storage와 연동`하여 효율적 이미지 관리
  - 암호화된 저장, HTTPS 사용, IAM 리소스 기반 접근 권한 관리
  - Registry용 Storage : `GB당 120원`, Container Image Scan : `건당 150원`

<hr/>

# AI → `무약정`
#### Kuberflow
  - `Kubernetes 기반`의 MLOps 환경을 제공하는 `오픈소스 Machine Learning 플랫폼`
  - 자사의 AI 플랫폼과 Kuberflow 연계 상품 제공
  - ML 영역별 최적의 오픈소스 조합을 다양한 인프라에서 제공
  - `재사용 가능한 컴포넌트 기반의 Pipeline으로 End-to-End ML workflow 수행`
  - 모델 개발 → 모델 학습 → 모델 튜닝 → 모델 서빙 → 모델 관리

### AI & MLOps Platform
  - `사용자가 직접 Kuberflow 기반 MLOps 환경을 생성 및 운용 가능한 환경 제공`
  - 머신러닝 모델의 개발, 학습, 배포 과정 전체 파이프라인의 반복적인 작업을 자동화하는 머신러닝 플랫폼
  - Kubernetes 기반으로 다양한 오픈소스와의 연계가 편리
  - `TensorFlow, PyTorch, scikit-learn, Keras` 등 다양한 머신러닝 프레임워크를 지원하는 표준화된 환경을 제공
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
  - JPEG, PNG : `10MB`, PDF : `50MB/150페이지`
  - 추출한 데이터 종류에 따라 `페이지 단위 과금`

### Text API
  - 문장 및 텍스트의 의미를 이해하고 분석
  - `Summary API`(요약), `STS API`(유사도)
  - 생성요약 방식으로 문장 내 중요 정보 포함 및 자연스러운 내용 요약
  - 검색 엔진, VOC, 추천 시스템 등
  - `API 별 호출 건수에 따라 과금(월단위)`

### Vision API
  - 이미지 내 여러 정보들을 인식하고 분석
  - 출입시스템, 스마트 CCTV
  - `Object Storage 활용`
  - JPEG, PNG : 80x80 픽셀 ~ 4096x4096 픽셀
  - Base64 이미지(5MB), Object Storage 이미지(15MB)
  - 최대 인식 얼굴 수 : `1000개`
  - `API 호출 건수에 따라 월단위, 1000건 단위로 올림적용`

<hr/>

# App Service → `무약정`
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

# Analytics → `약정/무약정`
#### Data Analytics 서비스
  - `Data Source + Data Ingestion + Data Processing + Data Discovery + Analytics + Big Data Application`
  - 쉽고 편리한 클러스터 구성 및 관리
  - 고 가용성 및 뛰어난 안정성 보장
    * 스케일 아웃(Apache Kafka)
    * 자체 동기화 복제 방식 클러스터 구성(Elasticsearch)
    * 마스터 노드 이중화 구성(Cloud Hadoop)

### Apache Kafka `약정`
  - 실시간 데이터 사용해야하는 애플리케이션에 실시간 데이터 제공
  - 프로듀서가 write하고 컨슈머가 read, topic을 공유
  - VM 환경에서 동작, VPC 기반으로 단일 인스턴스 or 클러스트 구성 가능
  - VM 일체형, 무약정은 서버 on 상태값 기반으로 시간 단위
  - 인스턴스는 ZooKeeper, AKHQ 생성 시에만 사용 가능

### Elasticsearch `약정`
  - 분산형 RESTful 검색 및 분석 엔진
  - `Beats` : 로그수집
  - `Logstash` : 데이터를 필터를 통해 변환 후 Elasticsearch로 전송
  - `Elasticsearch` : 아파치 루씬 기반의 full text로 검색이 가능한 오픈소스 분석 엔진
  - `Kibana` : 데이터 처리 환경 및 데이터 시각화 플랫폼
  - VM환경에서 동작, VPC 기반의 단일 인스턴스 or 클러스터 구성
  - 무약정(시간단위), 약정(월단위) * `OS는 리눅스 기준`

### Vertica (DBaaS) `약정`
  - Masterless 클러스터의 분산 아키텍처
  - Vertica는 분산 프로세싱을 통해 쿼리를 처리
  - 특정 노드 장애 시 쿼리가 수행되지 않는 `SPOF가 발생하지 않음`
  - 컬럼기반 저장 기술, 빠른 적재 기술 제공
  - `BYOL 적용 제품`
  - 무약정(시간단위), 약정(월단위) * `OS는 레드햇 기준, DB Managed 및 Carepack은 별도 부과`

### SQream `약정`
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

#### Greenplum (DBaaS) `약정`
  - 엔터프라이즈 분석을 위한 `대용량 정형 및 비정형 데이터 분석 플랫폼`
  - `오픈소스`이며 VMware의 데이터 솔루션
  - `PostgreSQL Database 기반`의 대규모 데이터 병렬처리 분석 플랫폼

#### Apache Hadoop
  - 빅데이터 처리를 위하여 클러스터에서 동작하는 자바기반 분산 처리 프레임워크
  - Hadoop Common, HDFS, YARN, MapReduce, 다양한 에코시스템

### Cloud Hadoop `약정`
  - 빅데이터 처리 및 분석에 활용하는 아파치 하둡 클러스터를 관리형으로 제공
    * 초기 설치 : `HDFS, YARN, HBASE, HIVE, TEZ, Hue, Solr, Spark, LIVY`
  - 다양한 오픈소스 에코 시스템 지원
    * 추가 설치 : `ZooKeeper, Atlas, Ranger, KERBEROS, Kafka, Flume, Sqoop, Oozie, Kudu, Impala`
  - `VM과 결합상품, OS는 CentOS와 레드햇 기준, OS 디스크 100GB 기본 제공`
  - 무약정(시간단위), 약정(월단위)

#### Apache NiFi
  - 자바 가상 머신에서 실행되는 자바기반 오픈소스
  - `시스템 간 대용량 데이터 전달을 자동화`

### Date Flow
  - 데이터를 추출, 변환, 전송(ETL)하고 데이터 처리 흐름을 자동화
  - `Apache NiFi 기반`
  - Kubernetes Engine의 `컨테이너 Pod의 CPU 사용시간 단위 과금`
  - `1 vCore 당 54원/시간, 1분단위 과금`

#### Apache Airflow
  - 파이프라인 구성과 관리를 위한 오픈소스 Workflow 관리 플랫폼
  - `Python 기반`으로 작성

### Data Ops
  - 주기적, 반복적으로 발생하는 데이터 처리 작업에 대해 워크플로우 작성후 작업 스케쥴링을 자동화
  - `Apache Airflow 기반`
  - Kubernetes Engine 클러스터 환경 기반
  - Kubernetes Engine의 컨테이너 `Pod의 CPU 사용시간 단위 과금`
  - `1 vCore 당 129원/시간, 1분단위 과금`

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
  - `1 vCore 당 76.2원/시간, 1분단위 과금`

#### Data Catalog `약정`
  - `오픈소스 Apache Atlas와 Ranger를 기반`으로 데이터 자산의 메타데이터를 수집하고 통합 관리하는 서비스는
  - 메타데이터를 항상 최신 상태로 유지

<hr/>

# Management
### Logging & Audit `무료`
  - 별도 설정없이 `90일간` 활동로그 저장
  - `Object Storage 연동 → 별도 과금`
  - 활동 내역 조회 무료, 사용자가 생성하는 `Trail은 로그건수 당 0.02원`

### Cloud Monitoring `무료`
  - 운영 중인 인프라 리소스의 사용현황/변경 정보 로그 수집
  - 로그 모니터링 (`저장공간 1GB 기본 제공`)
  - `기본 모니터링 무료 제공`

### VM Migration `무료`
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
    * 시간당 요금 정의
    * 적용단위 : `Project ID`, `Account`
    * 적용대상 : `Compute`(VM, BM), `Database`(DB Service)
    * 무약정 대비 최대 할인율 1년 35%, 3년 40%
  - EDP
    * 고객사 단위 계약
    * 연간 사용료 약정에 따른 SCP 사용료 총액 할인 제공

### SLA 정책
  - 서비스 업체가 이용자에게 제공하는 서비스에 대한 수준을 기술한 문서
  - 제공 서비스에 대한 월 가용률과 이를 지키지 못한 경우에 대한 배상기준 명시
  - 배상기준
    * 단일 인스턴스 : `99% ~ 99.9% → 10%`, `95% ~ 99% → 25%`, `95% 미만 → 100%`
    * 2개 인스턴스 : `99.9% ~ 99.99% → 10%`, `95% ~ 99.9% → 25%`, `95% 미만 → 100%`
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
  - `Virtual Server는 최대한 프라이빗 서브넷에 배치`하여 보호
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

<hr/>

# 아키텍처 사례
### 1. On-premises 고객 네트워크의 클라우드 확장
  - VPN을 통해 SCP 네트워크를 암호화된 가상 전용망으로 연결
  - `표준 IPsec으로 암호화`된 가상 터널링을 제공
  - `Direct Connect를 통해 전용 회선 연결`을 제공하고 On-premises 사설 네트워크를 SCP로 연장하여 구성
  - 사용사례
    * 인터넷을 통한 `VPN 연결`로 네트워크 확장
      + `빠른 구축 일정`을 필요로 하거나 `사용 기간이 짧을 것`으로 예상되는 `소규모 프로젝트`의 경우
      + 기존 시스템의 IP 변경이나 추가적인 전용 회선에 대한 비용 부담 없이 민첩한 확장이 가능
    * 전용 회선을 통한 `Direct Connect`로 네트워크 확장
      + `안정성과 보안성이 중요`한 프로젝트의 경우 On-premises 라우터와 SCP 간의 전용 회선 연결을 통해 네트워크를 확장
      + SLA 제공하지 않는 인터넷 연결 대비 엄격한 SLA를 제공하는 전용 회선 연결을 통해 연결 안정성을 확보
    * 인터넷 연결이 제공되는 VPC에서 고객 사설 네트워크 사용
      + 고객 사설 서브넷을 사용하는 동시에 SCP를 통한 인터넷 연결이 필요 할 때 사용
      + Virtual Server에는 고객 IP가 설정되며 NAT를 통해 SCP 인터넷 연결이 제공

### 2. Direct Connect를 활용한 고객 전용 네트워크 구성
  - 고객은 Direct Connect를 통해 기존 시스템의 내부 사설 네트워크 대역을 SCP 자원에 할당하여 사용
  - 사용사례
    * `시스템의 세부 사항에 대한 변경 없이 SCP로 이전`
      + Direct Connect는 이전 과정에서 서비스 연속성을 보장하고 연계를 위한 시스템 세부사항의 변경을 최소화

### 3. GSLB를 활용한 서버 부하 분산
  - 사용자가 도메인 URL을 입력하면 Local DNS는 상위 DNS로 질의를 요청하고 최종적으로 GSLB에 DNS 질의가 전달
  - GSLB는 On-premises 데이터센터와 SCP의 양측 `Load Balancer에 대해 헬스 체크`, `응답시간 파악 등 상태 정보를 종합 판단`하여 저장
  - GSLB는 위 판단 정보를 기반으로 사용자 설정 또는 정책에 맞는 IP 주소를 반환
  - 사용자는 Local DNS를 통해 전달받은 Load Balancer IP 주소로 접속하여 서비스를 제공받음
  - 사용사례
    * 장애 혹은 재난시 사이트 복구(DR)와 비즈니스 연속성 보장
      + `GSLB는 트래픽 경로에 대한 최적화`를 통해 `사용자의 환경 변경 없이 서비스 연속성`을 제공

### 4. VPC Peering을 통한 VPC간 통신
  - `VPC Peering`은 `사설 IP 주소 기반의 통신 서비스로 네트워크를 이용하여 서로 다른 VPC를 연결하는 서비스`
  - 동일 프로젝트의 경우, VPC Peering을 생성하여 요청 VPC, 승인 VPC를 각각 선택한 뒤 승인 VPC에서 Peering 승인
  - 다른 프로젝트에 위치한 VPC와 사설 통신이 필요한 경우, 승인이 필요한 VPC ID와 해당 VPC가 위치한 프로젝트 ID를 확인하여 상품 신청
  - 사용사례
    * VPC Peering 구성을 통한 VPC 간 통신 경로의 최적화
      + Direct Connect 상품을 통한 VPC 간 통신도 가능하지만 고객사에 위치한 Customer Router 장비를 경유하여 상호 통신 되는 구조로 네트워크 경로상 비효율적
      + `VPC Peering을 구성하게 되면 VPC 간 직접 연결 가능`하게 되어 `통신 경로가 최적화` 되며 VPC 간 원하는 리소스에 바로 액세스 가능

### 5. Transit Gateway를 활용한 네트워크 확장
  - `Transit Gateway`는 `고객이 원하는 네트워크를 SCP과 연결`하거나, `다수의 VPC 연결을 제공`해주는 상품
  - 동일 프로젝트에 생성 되었으나 `다른 리전에 위치한 다수의 VPC 간 통신은 Transit Gateway을 이용`
  - 프로젝트 내 위치한 특정 VPC가 고객사에 위치한 On-premises 시스템과의 통신이 필요한 경우, Transit Gateway를 이용
    * `Transit Gateway Uplink 신청`을 통해 고객사 네트워크와 SCP를 연결하고 `고객의 기존 시스템에서 활용 중인 사설 IP 주소를 SCP 자원에 할당`하여 확장
  - Transit Gateway는 `최대 5개까지의 VPC와 연동`, 프로젝트 내 VPC 간의 멀티 통신은 외부 경유 없이 내부 연결을 통해 수행
  - VPC는 프로젝트에 생성 가능한 `최대 개수인 3개의 Transit Gateway`와 연결이 가능
  - 사용사례
    * 고객 네트워크와 SCP 내 다수의 VPC간 네트워크를 연결
      + Transit Gateway을 이용해 고객 네트워크와 SCP VPC를 `1:N 허브 구성`으로 연결 가능
    * 다른 위치나 서로 다른 프로젝트에서 생성된 VPC 네트워크와 연동 구성
      + 기 구성 된 Transit Gateway와 다른 프로젝트의 Transit Gateway를 `Peering 기능`을 사용하여 서로 연결하고 라우팅 및 보안정책을 설정

### 6. Cloud WAN 기반 Cloud Integrated Network 서비스
  - `Cloud WAN`은 `글로벌 네트워크 백본 인프라를 활용`하여 `국내외 SCP Region 또는 사용자 거점 간 Multi-point N:N 연결을 트래픽 사용량 기반으로 제공`하는 상품
  - `Project 단위로 Cloud WAN Network를 신청`하고 Cloud WAN Network에 용도별 Segment를 생성한 뒤 국내외 서비스를 사용할 거점 위치를 선택
  - `Transit Gateway를 구성`하여 다수의 VPC를 연결하고 VPC 간, VPC와 On-premises 네트워크 통신에 필요한 라우팅과 방화벽 정책을 설정
  - Cloud WAN Segment에 Transit Gateway를 Attach하여 VPC에 존재하는 인프라 자원의 통신경로를 설정
  - `On-premises 데이터센터에서 통신 필요시 Cloud WAN 백본으로 전용회선`을 연결
  - Cloud WAN 백본 Segment에 Site connect를 Attach 및 Customer Router에서 필요한 네트워크 설정을 입력
  - 다른 Segment 간 연결을 위해 Segment Sharing 설정
  - 사용사례
    * Inter Region 간 Multi-point로 구성한 Transit Gateway Peering
      + 기 구성된 Transit Gateway를 다른 Region/Project의 Transit Gateway들과 Cloud WAN 백본에 Full mesh 또는 Partial Mesh 형태로 연결하고 라우팅을 설정
    * Inter Region 간 고객 네트워크와 VPC 네트워크 연결
    * Multi-segment 기반 Site to Site Global WAN 통신

### 7. Endpoint를 활용한 외부 네트워크에서 VPC로의 Private 연결
  - `Endpoint`는 `Direct Connect`, `Transit Gateway`, `VPC peering`으로 VPC와 연결된 외부 네트워크에서 Private 연결을 통해 `SCP 서비스에 접근할 수 있는 진입점을 제공`하는 역할
  - On-premises 환경과 SCP 간 전용회선 연결을 준비하여 Direct Connect에 연결
  - SCP의 다른 프로젝트 VPC에서 접근하는 경우 VPC Peering 사전 구성을 통해 Endpoint가 구성된 VPC와 연동
  - 사용사례
    * `Object Storage에서의 데이터 전송 보안 강화`
      + VPC에 Endpoint를 생성하고 Object Storage에 접근 제어 설정을 추가
    * 클라우드 전환 단계에서의 `File Storage 병행 사용`
      + Direct Connect로 확장된 고객사 On-premises의 서버에서 `자체 File Storage와 Cloud 환경에 구축되어 있는 File Storage를 동시에 마운트`

### 8. Auto-Scaling을 통한 서버 자동 확장
  - 부하가 많지 않은 상황에서 Auto-Scaling Group은 초기 설정 자원만큼만 가동되어 운영
  - 서비스 요청량이 증가하여 시스템의 사용률이 운영자가 사전 설정한 임계값(CPU, MEM, Network, Disk I/O)에 도달하면, Auto-Scaling Instance는 사전 정의된 단위만큼 추가 Virtual Server를 프로비저닝
  - `Load Balancer에 새로 기동된 Virtual Server Instance의 IP가 추가`되어 부하 분산에 포함
  - Multi-AZ에서 Auto-Scaling 멤버인 Virtual Server의 위치는 Multi-AZ에 고르게 배포하거나 특정 AZ에 배포하도록 설정 할 수 있음
  - Multi-AZ에 걸쳐 분배되어 있는 멤버 Virtual Server들은 동일한 Load Balancer에서 부하 분산 받으며, AZ 장애 시 가용한 AZ를 통해 서비스를 지속 할 수 있음
  - 사용사례
    * 온라인 쇼핑몰 구축
    * 미디어 서비스 front-end 구축

### 9. Placement Group을 활용한 Virtual Server의 Rack 분산 배치
  - `Placement Group`은 `사용자가 지정한 Virtual Server 그룹을 서로 다른 Rack으로 분산 배치`하여, Rack 전원이나 TOR(Top of Rack) 등 장애에 대비해 Application 가용성을 보다 강화하는 서비스
  - 서비스 가용성을 우선적으로 고려해야하는 Application의 경우 `Placement Group을 사용하여 장애 도메인을 분산`하여 추가 가용성을 확보
  - Redis, Elasticsearch 와 같이 과반수에 의해 Fault Tolerance 보장이 필요한 서비스들은 `Multi-AZ와 함께 Placement Group을 사용`하면, `Zone과 Rack을 나눠서 안정적으로 운영 가능`
  - Virtual Server는 `메모리 사용률이 낮은 Rack 배치 그룹 순서로 분산 배치`
  - Virtual Server 숫자가 Zone내 분산 배치 가능한 Rack 수량을 초과할 경우에 중복 배치됨
  - 사용사례
    * Database 노드 분산 배치를 통한 가용성 확보
      + 다양한 DB 종류에 따라 Active-Standby 노드(2개) 또는 Active-Standby-Quoram 노드(3개) 구성 시 Placement Group 사용을 권장
    * Kubernetes 클러스터 분산 배치를 통한 고가용성 보장 및 성능 향상
      + Kubernetes Master Node를 하나의 Placement Group으로 지정하여 Kubernetes 클러스터의 Control Plane과 etcd 분산 데이터 저장소의 고가용성을 보장
    * Data Analytics 노드 분산 배치를 통한 추가 인프라 가용성 제공
      + 데이터 분석 Application은 대부분 Master Node와 Worker(Data) Node로 구성
    * Multi-AZ와 함께 사용하여 AZ별 Rack분산 배치
      + Application에 따라 Active-Active 서비스가 필요하거나, Fault Tolerance 보장이 필요한 서비스의 경우 Multi-AZ와 함께 Placement Group을 사용

### 10. 고가용성 3-Tier 아키텍처
  - `Multi-AZ`는 여러 가용 영역에 걸쳐 서비스를 배포함으로써, `인스턴스의 SPOF를 제거하고 Downtime을 최소화하는 아키텍처`
  - 3-Tier 아키텍처는 `Presentation tier`, `Application tier`, `Database tier`로 구성된 구성된 아키텍처로, 각 tier는 고유한 Infrastructure에서 구동되므로 `다른 Tier에 영향을 주지 않고` 업그레이드 되거나 자원을 확장/축소 가능
  - `WEB 또는 WAS 서버간의 파일 공유`에 대한 요건이 있을 경우 `File Storage`를 생성
  - `Database나 Virtual Server 스냅샷`에 대한 백업을 위해 `Object Storage`를 생성
  - 사용사례
    * MES(Manufacturing execution system)

### 11. Object Storage를 활용한 멀티 Web Instance간 컨텐츠 공유
  - Block Storage나 File Storage와는 달리 `접속 URL과 key만 획득하면 어디서나 Amazon S3 API를 사용하여 파일 업/다운로드가 가능`
  - SCP 내의 `다른 Tenant가 Tenant` A에서 사용하고 있는 Object Storage 내 Bucket을 사용하고자 하는 경우 Bucket 오너에게 요청하여 `Endpoint URL과 Key를 획득해 해당 Bucket에 접근`
  - 다른 CSP는 물론이고 네트워크 경로만 확보된다면 `On-premises에서도 접근이 가능`
  - 사용사례
    * S3 API 사용 애플리케이션과의 연계
    * CDN과 Object Storage를 사용한 컨텐츠 연계
      + CDN을 통해 컨텐츠를 배포할 때 정적인 컨텐츠(html, css 등)의 원본 서버로 Static Website hosting 이 활성화 된 Object Storage의 bucket을 지정하여 사용 할 수 있음

### 12. Multi-AZ 환경에서 File Storage, Object Storage 활용
  - Multi-AZ가 적용된 File Storage, Object Storage는 별도의 소프트웨어 설치나 인프라 구축 없이 AZ간 데이터를 실시간 동기화를 제공
  - `Multi-AZ 사용 여부는 최초 생성 시에만 설정이 가능`
  - 평상시에는 AZ1에 위치한 Active Storage를 사용하고 재해시에는 AZ2에 위치한 Standby Storage로 경로가 전환
  - 사용사례
    * 주요 인프라 구성 요소의 고가용성 확보

### 13. On-Premises 환경의 File Storage Offloading
  - SCP의 Direct Connect/Transit Gateway 상품과 VPC Endpoint 기능을 활용하여 `On-Premises 내부 서버에서 SCP 내부의 File Storage 볼륨을 마운트하여 사용`하도록 구성할 수 있음
  - On-Premises 환경에서 시스템 내 `NAS 볼륨과 SCP File Storage 볼륨을 동시에 연결`하여 마이그레이션 하거나 사용
  - SCP 내부의 Virtual Server에서 On-Premises와 연결된 SCP의 File Storage 볼륨을 연결하여 On-Premises의 서버와 동시에 사용
  - 사용사례
    * SCP File Storage로 고객사 NAS 대체
    * On-Premises 서버의 Hybrid NAS 활용

### 14. 데이터 장기보관을 위한 Archive Storage 활용
  - `Archive Storage는 장기 보관 데이터를 위한 저가형 스토리지 서비스`로 Object Storage에 저장된 데이터를 보다 저렴한 스토리지로 전송
  - 사용자는 아카이빙을 수행할 폴더 또는 파일을 선택하고 이에 대한 `스케줄(최소 1일 ~ 최대 3,650일)`을 설정
  - Archive Storage에 저장된 데이터 중 `복구가 필요한 경우`, 사용자가 지정한 `Object Storage의 버킷으로 복구`를 수행
  - 사용사례
    * 저장기한 만료 데이터에 대한 아카이빙
      + Archive Storage을 이용하면 저장 후 특정 기한이 지난 데이터에 대해 설정한 스케줄링으로 아카이빙 할 수 있음
    * 빠른 복구 기능을 통한 장기 보관 데이터로의 용이한 접근

### 15. VPC를 활용한 Virtual Server 기반 DMZ 웹 서비스
  - DNS서비스로 해당 공인IP에 대한 Domain name을 손쉽게 등록
  - 사용사례
    * VPC를 통한 퍼블릭 웹 서비스 제공
      + VPC에서 제공하는 `공인IP를 이용해 퍼블릭 웹 서비스`를 구성
    * `서비스형 보안솔루션과 보안그룹 적용`을 통한 웹보안성 확보
      + 최소한의 허용정책으로 보안그룹을 설정하여 외부 공격으로부터 인프라를 보호    

### 16. 서로 다른 VPC에 생성된 자원의 Load Balancer 구성
  - VPC#1에 생성된 Load Balancer에 VPC#2 서버 자원을 추가하기 위해 `VPC#1과 VPC#2를 VPC Peering으로 연결`
  - WEB 서비스는 L7 HTTP로 선택하여 URL 기반으로 HTTP 트래픽에 대해 분산 처리하도록 서비스를 생성
  - WAS 서비스는 L4 TCP로 IP와 Port 기반으로 동작하도록 서비스를 생성
  - 사용사례
    * Load Balancer를 활용한 웹 서비스 가용성 확보
    * `다른 VPC에 생성된 서버 자원 Load Balancer 서버 그룹에 추가 가능`
      + VPC Peering 된 다른 VPC 내 생성된 서버 자원을 LB Link IP를 이용하여 서버 그룹에 추가하여 확장된 부하 분산 서비스를 제공 가능

### 17. 3rd party 제품을 활용한 Load Balancer 아키텍처
  - On-premises 환경에서 적용 중인 특별한 부하 분산 기능을 SCP 전환 후에도 유지해야 하는 경우
  - VM 기반으로 기 운영 중인 Load Balancer가 있어 해당 라이선스를 재활용하고자 하는 수요가 발생
  - `Transit Gateway를 구성`하여 3rd Party Load Balancer가 위치한 VPC와 타 서버가 위치한 VPC가 통신할 수 있는 라우팅 경로와 방화벽 정책을 설정
  - 사용사례
    * 별도 Load Balancer 구성을 통한 기존 서버 부하 분산 방식 유지

### 18. Object Storage를 활용한 데이터 백업
  - Virtual Server의 `OS 이미지`, `Database`, `사용자의 폴더/파일`에 대한 백업을 손쉽게 가능
  - Object Storage를 활용할 경우 `데이터를 즉시 액세스 가능`하고 `비용적인 효율성`뿐만 아니라 `안정성`도 동시에 확보 가능
  - 생성된 Snapshot은 Backup Master를 통해 Object Storage로 저장
  - 다른 Region의 Object Storage에 복제
  - 사용자가 Object storage 상품을 통해 백업 bucket을 생성하고, 접속 URL, access key, secret key를 발급 받음
  - 사용사례
    * Virtual Server OS 이미지 백업
      + 중요 업무에 해당하는 경우 OS Snapshot을 백업
    * Database 백업
      + Database 데이터와 변경 로그를 기반으로 백업
    * 사용자 데이터 백업
      + Virtual Server 또는 Bare Metal Server의 디렉토리와 파일을 백업

### 19. 재해 복구
  - `Region 사이의 복제 회선`을 통해 `Object Storage 데이터를 동기화`
  - 재난 상황이 발생하면 Virtual Server 자원을 신청하고 Object Storage에 백업된 OS 이미지를 활용해 해당 서버를 복구해 서비스를 재개
  - Region 사이의 복제 회선을 통해 서버를 동기화
  - `DB Service는 비동기 복제 솔루션을 이용해 데이터를 동기화`
  - 사용사례
    * SCP West Region 장애 상황에서 서비스 복구
      + RPO가 낮은 수준의 경우에는 별도의 Virtual Server 자원을 운영하지 않고, 저가형의 Object Storage를 활용
    * 퍼블릭 클라우드 서비스 서울 Region 장애 상황에서 서비스 이전
      + `서울 Region만으로 서비스를 제공`하는 퍼블릭 클라우드 사업자를 선택한 고객의 경우, 서비스 사업자 내에서는 `국내에 DR Site를 구성할 수 없음`
      + SCP East Region은 서울 Region과 지리적으로 충분히 떨어져 있고 지진과 같은 재난상황에서도 DR Site로 운영 가능

### 20. Global CDN을 활용한 웹 콘텐츠 전송
  - `Global CDN`은 SCP 또는 On-premises에 구성된 웹 서버 또는 Object Storage를 통해 `제공된 정적 콘텐츠를 글로벌 콘텐츠 전송 네트워크를 통해 보다 빠른 전송이 가능하도록 하는 서비스`
  - Global CDN 상품을 통해 `사용자와 가까운 곳에서 정적 콘텐츠를 전송`함으로써 전송 속도를 향상
  - 사용사례
    * 고성능 웹 서비스

### 21. Cross-Region 복제를 활용한 DR 아키텍처
  - 별도의 소프트웨어 설치나 인프라 구축 없이 `SCP 내에서 리전 간 DR 복제 환경을 구축`하는 방식
  - Backup 상품을 통해 `저장된 VM 백업본`을 DR 복제 기능을 사용하여 `타 리전에 있는 저장소로 전송`
  - 사용사례
    * 일반적인 운영/DR 환경 구성
      + 기존 On-premises 환경과 동일하게 운영/DR 아키텍처를 구축하고자 하는 경우
    * 주요 인프라 구성 요소의 복제본 확보
      + File Storage / Object Storage DR 복제 기능을 사용하여 워크로드 재가동을 고려하지 않고 별도의 물리적 공간에 필요 데이터 복제본만 확보

### 22. HPC Cluster 서비스
  - 고객은 `File Storage를 클러스터 전체에 마운트하여 공유 볼륨으로 사용 가능`
  - 효율적으로 작업을 배치하고 관리하기 위해 오픈소스 Job Scheduler인 `Slurm을 자동으로 설치 및 제공`
  - 병렬 시뮬레이션 작업을 위해 기본적인 `GCC 컴파일러`와 `Open MPI`도 함께 제공
  - 클러스터의 관리를 도와주는 `Cluster Shell`, `Environment Module`, `Spack` 등의 미들웨어들도 같이 제공
  - 사용사례
    * Bursting 용도 HPC 시뮬레이션 작업 수행
    * 고객사 전용 HPC 환경 구축
    * 대규모 RAM 메모리 필요 시뮬레이션 용도
      + `HPC Cluster 상품은 Bare Metal Server를 계산 노드로 이용`

### 23. Container기반 Web Application
  - Kubernetes는 수많은 컨테이너 애플리케이션을 자동화하여 관리하기 때문에 `분산 시스템 환경을 탄력적으로 실행 및 관리`할 수 있도록 제공되는 플랫폼
  - Kubernetes는 애플리케이션의 확장과 장애 조치의 용이성을 제공하고, `쉽고 빠르게 지속적으로 배포`할 수 있는 환경을 제공하여, 웹 애플리케이션 시스템을 성공적으로 구축/운영
  - 클러스터 외부로 내부 서비스의 HTTP와 HTTPS 경로를 노출하기 위해서 Kubernetes의 Ingress Controller가 필요
  - 사용사례
    * 경영 정보 시스템의 컨테이너 전환
      + 컨테이너로 전환함으로써, 중`복 개발을 최소화`하고, `전환 기간을 단축`
    * 사용자의 폭증에 의한 자원 증설이 필요한 시스템의 컨테이너 전환
      + 사용자 폭증을 예측할 수 없는 경우를 대비하여 Kubernetes의 Auto-Scaling을 적용

### 24. 컨테이너 애플리케이션 환경의 DMZ 네트워크 구성
  - `Kubernetes`는 다수의 컨테이너 애플리케이션을 자동화 하여 관리한다는 점에서 `분산 시스템 환경을 탄력적으로 실행 및 관리할 수 있는 개방형 플랫폼`
  - DMZ 역할로 구성한 VPC 영역에는 `Reverse Proxy를 구성`하여 보안 요구사항을 충족
  - `DMZ 용도의 VPC`와 `Private Network 용도의 VPC` 2개를 신청한다. 두 개의 VPC 간의 연결은 `VPC Peering을 통해서 연결`
  - DMZ 용도의 VPC는 `인터넷 연결을 위해 Internet Gateway을 신청`하고 해당 VPC 내에 Private Subnet 및 Security Group을 신청
  - Private Network 용도의 VPC 내에 `Subnet, Security Group을 신청`하고, 컨테이너 런타임 관리와 오케스트레이션을 위해 `Kubernetes Engine을 프로비저닝`
  - 클러스터 외부로 내부 서비스의 HTTP와 HTTPS 경로를 노출하기 위해서는 Kubernetes의 Ingress Controller가 필요
  - 사용사례
    * 모바일 웹 기반의 물류 운송 추적 시스템 적용
    * `높은 보안 수준`의 컨테이너 애플리케이션 구성
      + VPC로 네트워크를 구분하고 Reverse Proxy를 활용하여 외부 위협으로부터 Private Network 자원을 보호

### 25. Microservice with Kubernetes
  - 클라이언트의 요청은 Load Balancer를 통해서 VM/Container Workload 및 API Gateway 서비스에 전달
  - API 요청을 제외한 클라이언트의 요청은 `Kubernetes engine에서 제공되는 ingress에 전달`
  - 클라이언트의 API 요청 처리를 위해 `API Gateway는 최전방에 위치`하여 외부로부터 들어오는 모든 API 호출에 대해 인증 및 서비스 라우팅 처리를 수행
  - Microservice Architecture는 구조화된 서비스 단위로 분리된 DB를 구성
  - Microservice 구성 요소간의 네트워크를 제어하기 위해 Service Mesh 기술을 사용 가능
  - 사용사례
    * 물류 시스템 Microservice 적용
    * 글로벌 제조사의 개발 플랫폼 사례
      + Microservice 기반의 Application 개발을 위한 API Gateway, DevOps, Kubernetes 기반 컨테이너 서비스를 제공

### 26. Container기반 CI/CD Pipeline
  - Container 기반의 CI/CD Pipeline은 `개발 생산성을 높이기 위하여 애플리케이션` 개발 편리성과 협업 효율성을 지원하는 통합 개발 환경을 제공
  - 사용사례
    * 불량 분석 시스템의 개발 환경
    * 경영 정보 시스템을 컨테이너로 전환하기 위한 개발 환경

### 27. DevOps Service를 활용한 개발계, 검증계, 운영계 CI/CD 환경
  - 개발, 검증, 운영계 아키텍처 구성을 위해 DevOps Service를 이용하여 `DevOps의 주요 툴을 통합 연계`하고, 빌드/배포 파이프라인 자동 구성 및 다양한 배포 방식 등의 편의 기능을 사용
  - 사용사례
    * 물류 통합단말 시스템 빌드/배포환경 구축시간 단축

### 28. Legacy Container의 Migration
  - Kubernetes를 통하여 컨테이너 배포, 관리, 확장 등 `컨테이너 기반 애플리케이션에 대한 다양한 작업을 자동화하여 구축/운영 가능`
  - Kubernetes Engine은 `컨테이너화된 애플리케이션을 배포/관리할 수 있는 플랫폼`
  - 기존 Kubernetes 환경에서 사용중인 Storage를 SCP 환경으로
  - Migration 된 Storage 기반으로 Kubernetes Engine 상품을 신청하고 Node pool을 생성
  - 사용사례
    * Kubernetes Manifest 파일을 관리하는 환경에서의 이관 작업
      + 기 관리하던 Kubernetes Manifest 파일을 이용하여 Kubernetes Engine 클러스터에 배포하여 이관 작업을 진행
      + 이관된 Storage의 기존 데이터를 기반으로 Kubernetes 서비스를 생성할 경우 PV, PVC Object에 대해서는 CD 툴이 아닌 manifest 파일 기반으로 수동생성이 필요할 수 있음
    * Kubernetes Manifest 파일을 관리하고 있지 않는 환경에서의 이관 작업
      + 기존 Kubernetes 클러스터 환경에서 Manifest 파일을 추출하여 SCP의 Kubernetes Engine 클러스터에 이관 작업을 진행

### 29. Cloud기반 고가용성 DBMS 구성
  - 클라이언트는 VIP(Virtual IP) 또는 DNS질의를 통해 Database서비스를 신청
  - VIP나 DNS는 이중화된 Database 구성에서 현재 Active Node 정보를 알고 있으며, Active Node로 사용자의 요청을 전달
  - Active Database 에서 `생성되거나 변경된 Database 정보는 Block Storage에 쓰여`지게 되며 쓰여진 데이터는 Standby Node로 동기화되어 저장
  - `동기화된 Block Storage 데이터를 통해` Active 또는 Standby Node에 문제가 발생했을 때 서비스 전환 시 `데이터 유실 없이 서비스를 연속성 있게 제공`
  - 사용사례
    * 다양한 기업 솔루션(물류, RPA, 업무 자동화)에서 Database 활용
    * 인프라, DB 장애 시 DB서비스 연속성 보장

### 30. Database Replica를 활용한 DR 구성
  - `MariaDB(DBaaS)`, `MySQL(DBaaS)`, `PostgreSQL(DBaaS)`, `EPAS(DBaaS)`에 대해 Replica 기능을 활용
  - Replica는 DB가 가진 자체 데이터 복제 기능을 통해 `별도의 노드를 활용하여 읽기 전용 DB를 생성`해 주는 기능
  - 운영환경은 DB 이중화 구성 또는 단일 구성에서 모두 Replica 구성이 가능
  - DR 구성을 위해서는 사전에 `VPC Peering과 같은 Multi-Region간 네트워크 구성이 필요`
  - 사용사례
    * 재해, 재난 발생시 서비스 연속성 보장
    * DB 데이터의 소산, 보관

### 31. 대용량 데이터처리 아키텍처
  - 분석 전용 Database인 `Vertica(DBaaS)`를 활용하여 DW형 Database Service를 제공
  - 서비스 지속성을 위해서 `RDB는 HA`, `NoSQL은 Cluster`로 구성하여 사용자가 원하는 다양한 데이터를 저장
  - Cache서비스인 `Redis(DBaaS)를 이용하여 콘텐트를 사용자에게 빠르게 제공`하고, 세션 정보를 저장하여 처리시간을 단축
  - 메시지서비스인 `Apache Kafka(Managed)를 이용하여 실시간 또는 배치로 목적에 맞는 Target 저장소로 데이터를 전송`
  - `Elastic Stack을 활용하여 여러 시스템에서 데이터를 수집`(Logstash)하고, `분석 및 검색`하며(Elasticsearch(Managed)), `시각화 기능(Kibana)을 활용하여 다양한 정보를 제공` 받음
  - RDB 및 NoSQL등에 저장된 데이터를 배치를 통해서 Vertica(DBaaS)로 전송하여 저장
  - `Vertica(DBaaS)에 저장된 다양한 데이터를 활용하여 분석`
  - Object Storage 또는 HDFS에 저장된 데이터 또한 Vertica(DBaaS)로 연계하여 데이터 분석이 가능
  - 사용사례
    * 모니터링 시스템 구축
    * 데이터 중심 병원

### 32. AI/ML을 활용한 MLOps 구축
  - `Kubeflow`는 ML Workflow를 지원하는 `Kubernetes 기반 오픈 소스 Machine Learning 플랫폼`
  - Kubeflow는 ML Workflow 각 영역을 Kubernetes 기반의 여러 오픈 소스들(istio, knative, argo 등)을 적절히 조합하여 확장성 있게 제공
  - AI&MLOps Platform 상품 설치를 위해서 `Kubernetes Cluster가 필요`
  - Kubernetes Cluster의 `Persistent Volume(PV)는 File Storage 상품에서 생성`
  - 사용자는 VPC의 Kubernetes Cluster를 선택하여 AI&MLOps Platform을 배포
  - 사용사례
    * AI&MLOps Platform 기반 생산 공정 불량 판정 시스템 구축
    * MLOps 기반 모델 개발 및 운영 배포 체계 개발

### 33. CloudML 기반 AI 분석환경 구성
  - `CloudML`은 `자동화 된 모델 라이프사이클 관리`를 위해 Kubernetes 기반으로 모듈화된 서비스를 제공하는 SCP 상품의 명칭
  - CloudML은 `Notebook`, `Studio`, `Pipeline`, `Experiments` 상품으로 구성되어 있으며 각 상품을 설치하여 연동하기 위해서는 `Kubernetes Cluster가 필요`
  - CloudML 상품에서 분석 데이터 셋, 모델 파일 활용 및 저장 용도로 Object Storage를 연계 가능
  - 사용사례
    * No-Code AI 기반 시각화된 협업 분석 시스템 구축
    * 분석 플랫폼 도입을 통한 모델 최적화 자동화

### 34. 실시간 Data Streaming 서비스
  - `Data Stream Source`
    * 대량의 Data Stream이 발생하는 원천으로 모바일을 비롯한 IoT Device, 제조 설비의 Sensor, SNS Application, System Server의 Log와 같은 다양한 사례 존재
  - `Data Stream Ingestion`
    * Kafka 서비스는 다양한 Data connector를 제공하기 때문에 쉽게 다양한 원천 Data Source와 연결 할 수 있고, 하나의 Data Source로부터 수집된 Data를 여러 서비스에서 활용 가능
  - `Real-time Processing`
    * Spark Streaming과 Storm은 In-Memory 기반의 데이터 처리 오픈소스들로 실시간 처리에 적합한 솔루션
  - `Raw Dataset Storage`
    * 저비용으로 확장(Scale Out) 가능하고, 안정적인 저장소로 Object Storage, Hadoop(HDFS)서비스를 제공
  - `Real-time NoSQL`
    * Elasticsearch 서비스를 활용해서 다양한 형식의 로그 및 Metric을 수집하고, 저장(색인)
    * Kibana를 통해 실시간으로 데이터를 분석하고 시각화
  - `Data Warehouse(DW)`
    * 클라우드 환경에서 대용량의 정형 데이터를 분석하기 위한 서비스로 상용솔루션인 Vertica서비스를 제공
  - `활용 Application`
    * 실시간 Data Stream, 또는 가공된 Batch Data를 최종적으로 활용하는 솔루션에는 실시간 Dashboard, Monitoring, Analytics, BI Tool, AI/ML 솔루션 등
  - 사용사례
    * 제조업 설비관리 실시간 이상 모니터링
    * 이상 금융거래 실시간 탐지(Real-time Fraud Detection)

### 35. Cloud Hadoop 기반 데이터 플랫폼
  - `Cloud Hadoop`은 `Hadoop 에코시스템의 주요 컴포넌트들을 패키징하여 제공`하며, 관리 기능을 위한 Manager를 제공
  - `대용량 데이터 적재·활용`을 위한 다양한 Data Storage를 지원
  - `Data Processing`: Hive, Spark 와 Impala를 이용하여 대용량 데이터를 분산 처리, 정제(Refine), 준비(Preparation)
  - `Data Discovery`: 대용량 데이터를 평가하여 새로운 통찰(Insight)을 얻기 위해 데이터를 탐색
  - `Data Security`: 클러스터 내 모든 서비스에 사용자 및 서비스 인증
  - `Data Governance`: 데이터 표준·정책에 따라 데이터를 생성·변경하고 생성된 데이터의 가용성·유용성·무결성과 보안을 관리
  - 사용사례
    * 빅데이터 통합 플랫폼 구축
    * 데이터 레이크 구축
    * 데이터 플랫폼 구축

### 36. Quick Query 기반 대화형 쿼리 서비스
  - `Quick Query`는 `대용량 데이터를 표준 SQL을 사용하여 간편하고 빠르게 분석`할 수 있는 `대화형 쿼리 서비스`
  - `Kubernetes Engine 클러스터 환경`에서 단독으로 사용하거나, 다른 애플리케이션 S/W와 함께 사용 가능
  - Quick Query를 통해 다양한 데이터소스(RDB, Cloud Hadoop, Object Storage 등)의 데이터를 조회하거나 이 기종간 데이터 조인을 수행
  - Quick Query를 통해서 표준 SQL 데이터를 손쉽게 정제, 변환, 병합 가능
  - `Trino 엔진 기반 대규모 병렬 분산 처리 방식`을 통해 사용자의 쿼리를 빠르게 처리
  - 쿼리가 완료된 데이터는 기본적으로 `Object Storage에 저장`되며 SQL 문법에 따라 원본 데이터 소스 영역에 다시 저장 가능
  - 사용사례
    * 데이터 수집이 필요 없는 실시간 이 기종 데이터 조인
      + 데이터를 통합 저장소에 적재하는 과정 없이 Quick Query를 통해 데이터 조인이 가능
      + `메모리 기반으로 이 기종의 데이터를 실시간으로 조인/변환 `후 결과 데이터를 통합 저장소나 다른 Data Source에 적재 가능
    * 설비 공정 로그데이터의 조회 및 변환
      + 설비 공정에서 생성된 CSV 포맷의 로그 데이터가 Object Storage에 저장되어 있는 경우 별도의 데이터 수집 작업 없이 Quick Query에서 SQL로 바로 조회가 가능

### 37. Data Catalog 기반 데이터 자산 통합관리 시스템 구축
  - `Data Catalog`는 `기업 내 모든 데이터 자산의 메타데이터를 수집하여 통합 관리`함으로써 다양한 사용자들이 데이터를 더욱 효과적으로 활용할 수 있도록 지원하는 서비스
  - 수집된 메타데이터를 체계적으로 관리할 수 있도록 `통합검색 API를 제공`
  - `Apache Ranger`와 `Apache Atlas`의 `데이터 분류 및 계보 기능을 활용`하여 사용자에게 일관된 접근 및 보안체계를 제공
  - 사용사례
    * 다양한 데이터 소스로부터 메타데이터 수집을 통한 통합관리 시스템 구축
    * 통합검색 API를 통한 데이터 분석 플랫폼 구축
    * 데이터 분류 및 Policy 기능을 활용한 데이터 자산관리 시스템 구축

### 38. Data Warehouse Database 기반 분석
  - `VMWare Greenplum 기반의 DW형 Database Service`를 제공
  - DW DB 데이터 외 필요한 데이터들에 대해 `추출/변환/적재 및 스케줄링`을 수행
  - DW DB(Greenplum) 내에서 데이터를 조회하고 분석
  - `AI&MLOps Platform 등의 다른 분석도구에서 DW DB의 데이터를 탐색하여 분석에 활용`
  - 사용사례
    * 제조업 데이터 분석
    * 금융 데이터 분석

### 39. Data Ops 기반 워크플로우 작성 및 관리
  - `System Manager`는 주기적, 반복적으로 발생하는 데이터 처리 작업에 대해 `워크플로우를 작성`하고 작업 스케줄링을 자동화하는 `Apache Airflow 기반의 관리형 워크플로우 오케스트레이션 서비스`
  - `Ops Manager`는 주기적, 반복적인 데이터 처리 작업(추출/적재/변환/정제)의 `워크플로우 관리`를 위해 Data Ops 상품을 신청
  - Data Ops 서비스는 Apache Airflow를 기반, DAG (Directed Acyclic Graph) 형식으로 Workflow 를 작성, 스케줄링 및 모니터링
  - 사용사례
    * 데이터 기반 (data driven) 워크플로우 오케스트레이션
      + `Spark을 통해 실행 후 결과를 Cloud Hadoop에 저장`하는 시나리오로 사용
    * 배치 워크로드
      + `ETL 파이프라인 또는 ELT 작업`에서 여러 소스에서 데이터를 가져오고 변환하는 작업을 수행하는 파이프라인으로 사용
    * 엔터프라이즈 스케줄링
      + Command shell, API, 엔터프라이즈 실행 컨테이너와 연계함으로써, `기존 어플리케이션 도구와 함께 스케줄링`

### 40. Data Flow 기반 시스템간 대용량 데이터 전송 자동화
  - `Data Flow`는 `다양한 데이터 소스로부터 데이터를 추출`하고, 스`트림/배치 데이터의 변환/전송에 대한 처리 흐름을 시각적으로 작성하는 데이터 처리 흐름 도구`로, 오픈소스 Apache NiFi를 제공
  - Data Flow 서비스는 `Apache NiFi를 기반`으로 GUI를 통해 다양한 프로세서들의 Flow의 작성 및 스케줄링이 가능하고 데이터 처리 흐름을 시각적으로 확인 가능
  - 수집, 변환된 데이터는 `Cloud Hadoop`, `PostgreSQL(DBaaS)`, `Object Storage` 등에 전송되어 저장
  - 사용사례
    * `다양한 데이터 소스간의 데이터 전송`
      + File, NoSQL, RDB, HDFS, JMS, FTP, SFTP, Kafka, HTTP(s) REST 등
    * `실시간 데이터흐름 제어`
      + 데이터 처리과정에 대하여 Flow 파일로 실시간 데이터처리단계를 확인
    * `GUI 기반 데이터 처리 Flow 작성`
      + 이미 정의된 데이터 처리 프로세서를 사용
      + 데이터 추출/변환/전송 작업을 코딩 없이 작성
    * `Gallery 기반 Flow Template 관리`
      + Flow Manager 내 사용성이 높은 Flow Template을 초기 제공
      + 사용자가 추가로 Custom Flow Template을 등록, 배포 가능

### 41. KMS를 활용한 키 관리 및 암복호화
  - `고객이 암호화 키를 안전하게 생성, 보관, 관리할 수 있도록 제공하는 Managed Service 상품`으로, 안정적인 `중앙 집중 암호화 키 관리 방식`의 서비스
  - KMS 관리자에 의해 생성된 마스터키는 폐쇄된 별도 네트워크 망에 구성된 안전한 HSM에 저장하여 관리
  - `사용자`는 애플리케이션에서 `평문 데이터`를 저장
  - 암호화 API가 KMS에 암호화를 위한 데이터 키를 요청하고, KMS 에서 마스터키를 통해 데이터 키를 발급
  - 애플리케이션 암호화 로직에서 `데이터 키를 통해 평문 데이터를 암호화 하여 암호화된 데이터를 Database에 저장`
  - 사용사례
    * 개인정보 저장을 위한 암호화
    * 디지털 서명 및 검증
      + `KMS는 비대칭 키를 지원`
      + `공개키 방식의 암호화`를 이용하여 인증을 위한 서명/검증 값을 쉽게 얻을 수 있음
      + 대칭키 사용 대비 기밀성이 높으며 탈취로 인한 문제도 해결 가능

### 42. Serverless를 활용한 Backend API 개발
  - Cloud Functions와 SCP의 서비스들을 조합
  - `Cloud Functions`는 클라우드에서 `함수 형태의 애플리케이션을 빠르게 만들어서 실행하기 위한 서비스 `     
  - `PostgreSQL(DBaaS)` 상품 서비스를 신청하여 애플리케이션을 위한 Data를 구성
  - 애플리케이션 데이터를 빠르게 조회할 수 있도록 메모리 DB인 `Redis(DBaaS)` 서비스를 신청하여 구성
  - 정적 파일을 저장할 수 있는 `Object Storage` 상품 서비스를 신청하여 구성
  - 애플리케이션 개발을 위한 서버 구성 필요 없이 개발 코드로만 개발하여 PostgreSQL(DBaaS), Redis(DBaaS), Object Storage로 사용자가 요청한 데이터를 처리할 수 있도록 Cloud Functions으로 개발하여 서비스
  - `API Gateway` 상품 서비스를 신청하여 구성하고 Cloud Functions에서 개발된 API를 API Gateway에 등록
  - 사용사례
    * Mobile Backend
      + 서버를 프로비저닝하거나 관리할 필요가 없이, 코드를 작성하고 등록하는 것 만으로 즉시 실행 가능하여 빠르게 API 개발이 가능
    * 이벤트 알림 기능 개발
      + Cloud Functions 서비스를 활용하면 알림 기능에 필요한 이벤트 처리(Trigger, Process, Send)를 손쉽게 개발 가능

### 43. Data Wrangler 서비스 기반 데이터 가공
  - `Data Wrangler`는 `SQL 또는 데이터 엔지니어링의 지식과 경험이 부족한 비전문가가 분석을 위한 데이터를 쉽고 빠르게 준비 할 수 있도록 데이터 정제, 변환, 병합(Join)` 등의 기능을 제공
  - Data Wrangler는 `Apache Spark을 기반`으로 하고 있으며, Spark on Kubernetes를 통해 사용자 마다 별도의 Spark Engine을 기동하여 할당
  - 정제가 끝난 데이터는 `Cloud Hadoop, RDBMS 등에 저장`할 수 있으며, `저장된 데이터를 다시 추출하여 사용 가능`
  - 사용사례
    * GUI를 통한 데이터 정제 및 변환
      + 사용자가 수행한 모든 과정은 Recipe로 저장되며, 재활용이 가능
      + Apache Spark를 이용해 빠르게 결과를 확인
    * 이기종 데이터 병합
      + Data Wrangler는 서로 다른 Data Source에서 추출한 데이터를 병합(Join) 하여 정제, 변환 가능

### 44. Text API를 활용한 요약 및 유사도 분석 수행
  - `Text API`는 `사전 학습된 언어 모델을 기반으로 문장 및 텍스트의 의미를 이해하고 분석해주는 API`를 제공하는 서비스
  - `Summary API`, `STS(Semantic Textual Similarity) API`와 같은 자연어 처리 관련 API를 제공
  - 로컬 개발환경 혹은 기존 `On-premises 시스템에서도 Direct Connect, Transit Gateway를 통해` SCP와 연결되어 있다면 SCP 사용자 인증키 관리 기능에서 인증키 (AccessKey, SecretKey) 생성 후, Text `API를 호출 가능`
  - AI&MLOps Platform 상품에서 노트북을 생성하여 사용자 인증키를 활용하여 Text API 호출이 가능
  - Virtual Server 상품을 활용한 애플리케이션에서도 사용자 인증키 생성 후, Text API와 연동 가능
  - Cloud Functions 상품에서 AI 애플리케이션 코드를 바로 작성하여 호출이 가능
  - 사용사례
    * Text API를 활용한 VoC 자동 분류 시스템 구축
      + Text API를 활용하면 기존 VoC들을 Summary API로 요약 후, STS API를 활용하여 유사 VoC 검색을 통해 업무를 보다 효율적으로 수행하는 시스템 구축
    * Text API로 텍스트 데이터를 전처리 후 AI&MLOps Platform을 활용해 모델 확장 개발

### 45. Vision API를 활용한 얼굴 인식 수행
  - `Vision API`는 `삼성SDS의 AI 영상 분석 솔루션을 기반으로 이미지 내의 여러 정보들을 인식하고 분석하는 API`를 제공하는 서비스
  - 사전에 `Object Storage 상품을 활용`하여 분석 대상 파일을 업로드한 후 Vision API에 이를 분석 요청 가능
  - 로컬 개발환경 혹은 기존 `On-premises 시스템에서도 Direct Connect, Transit Gateway를 통해` SCP과 연결되어 있다면 SCP 사용자 인증키 관리 기능에서 인증키 (AccessKey, SecretKey) 생성 후, Vision `API를 호출 가능`
  - AI&MLOps Platform 상품에서 노트북을 생성하여 사용자 인증키를 활용하여 Vision API 호출이 가능
  - Virtual Server 상품을 활용한 애플리케이션에서도 사용자 인증키 생성 후, Vision API와 연동 가능
  - Cloud Functions 상품에서 AI 애플리케이션 코드를 바로 작성하여 호출이 가능
  - 사용사례
    * Vision API를 활용한 Self 체크인 시스템 구축
    * Vision API로 인물 이미지를 전처리 후 AI&ML Platform을 활용한 모델 개발

### 46. 웹 호스팅
  - `Virtual Server와 MySQL(DBaaS), Redis(DBaaS) 등을 이용`하여 쉽고 빠르게 `WordPress 환경을 구성`하고 `웹사이트를 구축 및 호스팅`
  - 최신 버전의 WordPress, Apache web server, PHP 7, OPcache를 설치
  - 데이터베이스의 읽기 부하가 큰 경우, `데이터베이스 앞 단에 Redis(DBaaS) 서비스를 구성`하여 자주 호출되는 데이터를 `캐시로 제공`
  - `MySQL(DBaaS)를 신청해 Database를 구성`
  - `Object Storage 서비스를 활용`하여 Virtual Server들이 `WordPress 데이터(php 파일, 설정, 플러그인 등)을 공유` 할 수 있도록 구성
  - 사용사례
    * 하드웨어 투자에 대한 부담 없이 웹 호스팅을 빠르게 시작
      + 사용한 만큼만 지불
    * 사용량 변화에 유연한 대응이 가능한 웹 서비스 인프라

### 47. WAF를 활용한 웹 서비스 보호
  - `웹 사이트의 트래픽을 모니터링 하여 방화벽 및 IDS가 차단하지 못한 공격으로부터 웹 애플리케이션을 안전하게 보호하는 서비스`
  - 웹 사이트의 취약점을 노리는 HTTP(S) 기반 보안 위협을 신속하게 탐지하고 차단
  - SQL Injection 또는 Cross-Site Scripting(XSS)과 같은 일반적인 공격 패턴을 차단하는 보안 Rule 그리고 사용자가 정의한 특정 트래픽 패턴을 필터링하는 Rule을 생성
  - `Load Balancer에 SSL 인증서를 설치해 SSL Offloading을 처리`하도록 설정
  - Load Balancer는 사용자로부터 수신된 Web 트래픽에 대해 SSL Termination 처리하고 `WAF로 복호화된 HTTP 트래픽을 전송`
  - WAF 솔루션은 VE(Virtual Edition) 형태로 설치하는데, 트래픽 처리 용량에 부합하는 specification을 산정하고 해당 BYOL 라이선스로 구성
  - 사용사례
    * 기업용/고객용 Web 서비스 보호

### 48. Private Cloud를 활용한 고객 전용 클라우드 아키텍처
  - `빠른 응답 속도가 필요하거나 강력한 데이터 보안 통제가 필요한 고객 On-premises 애플리케이션의 서비스 및 확장에 활용`
  - SCP의 데이터 센터와 고객 On-premises 데이터 센터 간 `전용선 연결`을 통해 고객 현장에 구성된 클라우드 자원을 SCP Console과 연동
  - 고객 On-premises 데이터 센터의 legacy system과 On-site Zone 간 `Direct Connect 구성을 통해 네트워크를 확장`
  - 사용사례
    * 강력한 데이터 보안 통제를 요구하는 업무 환경
    * 고객 기존 시스템과의 빠른 응답 속도를 요구하는 애플리케이션
      + 고객의 Legacy 시스템은 Direct Connect를 통해 손쉽게 On-site Zone에 배포된 클라우드 환경으로 확장되어 하이브리드 형태의 클라우드 구성이 가능

### 49. AICR을 활용한 문서 분석
  - `딥러닝 기반의 이미지 인식 기술을 바탕으로 문서 형태의 이미지로부터 데이터를 추출하는 서비스`
  - `Object Storage 상품`을 신청하여 분석 대상 파일을 업로드한 후, AICR API에 분석 요청을 하고 결과를 파일로 저장하여 확인 가능
  - 로컬 개발환경 혹은 `기존 Legacy 시스템에서도` SCP에 접근할 수 있다면 SCP 사용자 인증키 관리 기능에서 인증키(AccessKey, SecretKey)를 생성 후, `AICR API를 호출 가능`
  - AI&MLOps Platform 상품에서 노트북을 생성하고 만들어둔 사용자 인증키를 활용하여 AICR API 호출 가능
  - Virtual Server을 활용한 애플리케이션에서도 사용자 인증키를 생성한 후, AICR API와 연동 가능
  - Cloud Functions에서 AI 애플리케이션 코드를 바로 작성하여 호출이 가능
  - 사용사례
    * AICR를 활용한 물류 인보이스 자동 인식 시스템 구축
    * AICR로 문서 이미지를 전처리 후 AI Platform을 활용한 모델 개발

### 50. Terraform을 활용한 클라우드 서비스 배포
  - `인프라 자원을 구성 및 관리 할 수 있도록 지원하는 IaC(Infrastructure as a Code) 도구`
  - Terraform 작업을 위한 인증키를 생성하고 환경설정을 진행  
  - 배포환경에 대한 Provider를 외부 저장소로부터 가져온다 ($terraform init)
  - Terraform 명령어를 수행하여 SCP에 자원을 배포 ($terraform apply)
  - 사용사례
    * `Multi Region에 동일한 작업 환경 구성`
      + 코드를 사용한 배포 방식을 통하여 작업자는 작업 시간을 단축할 수 있으며, 배포/관리 간 발생 가능한 인적 실수를 최소화
    * Landing zone 구성
