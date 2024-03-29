# 🔥 원티드 프리온보딩 챌린지

![스크린샷 2023-01-13 오후 12 18 11](https://user-images.githubusercontent.com/85052351/212458836-3702ad4e-0394-4d58-b3a3-7be9488dae9b.png)<br/><br/>

[챌린지 과제](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api) | [과제 관련 게시글](https://nicehyun12.tistory.com/category/Project/%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9) | [데모](https://wanted-pre-onboarding-challenge-fe-1-nine.vercel.app/)
<br/><br/>

- [프로젝트 환경](#localEnvironment)
- [클라이언트 구현 과제](#assignment)
- [ToDoList 기능](#function)
- [디자인 / 기능 주안점](#design)
- [ 구조](#folder)
- [라우트](#route)
- [과제 진행 ](#emphasis)


## <span id="localEnvironment">로컬 실행 환경</span>

```bash
> npm i 
> npm start
```
<br/><br/>

### 환경 변수 설정

```bash
REACT_APP_FIREBASE_AUTH_API_KEY = "파이어베이스 Authentication API key"
REACT_APP_FIREBASE_DB_URL = "파이어베이스 리얼타임 데이터베이스 URL"
```
<br/>
로컬 환경에서 실행시 위와 같이 루트 경로에 FireBase RealTime DataBase URL, FireBase Authentication API KEY 설정해야 합니다.

<br/><br/>


## 사용 라이브러리

```plaintext
axios
react-redux
redux-tookit
@emotion-react
@emotion-styled
```
<br/><br/>

## 사용 데이터베이스

```plaintext
FireBase Authentication (사용자 관리 DB)
FireBase Realtime DataBase (ToDo 데이터 관리)
```

# 💁🏻‍♂️ <span id="assignment">클라이언트 구현 과제</span>

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요 ➡️ 토큰 유효 기간 만료 시 로컬 스토리지에서 

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요 ➡️ 별도의 페이지로 구분
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

# 🗒️ 프로젝트 개요
- [원티드 프리온보딩 FE 챌린지](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)의 과제 수행
- 타입스크립트 첫 프로젝트 적용한 todoList
<br/><br/>

# 🖥️ <span id="function">ToDoList 기능</span>

## 🗝️ Auth

FireBase의 Authentication을 사용하여 회원가입 / 로그인 기능을 구현했습니다.<br/
>

- 각각의 입력 유효성 양식을 통과하지 못 할 경우 API 호출을 하지 못 하도록 button의 disable 처리와 그에 맞는 CSS를 적용해주었습니다.
<br/>

### 회원가입

![화면 기록 2023-02-01 오후 2 16 42 mov](https://user-images.githubusercontent.com/85052351/215959536-6b1fe294-e83e-4817-955b-5e03f7a6038c.gif) <br/>

- email의 경우 @과 .이 포함된 8 자리 이상의 입력, password의 경우 영문, 숫자, 특수문자가 포함 된 8 자리에서 20 자리 입력 시 회원가입이 가능합니다.
- 회원가입 시 FireBase에 존재하는 이메일로 회원가입이 불가능하며, 입력 시 피드백을 전달합니다. 
<br/><br/>

### 로그인 

![화면 기록 2023-02-01 오후 2 16 42 mov](https://user-images.githubusercontent.com/85052351/215960824-74cdbeb1-94d6-40b1-9ad0-040da7a633d4.gif)<br/>

- 로그인 시 FireBase에 저장된 이메일 / 비밀번호 조합이 아닌 입력으로 API 호출 시 피드백을 전달합니다.
- 로그인으로 얻은 토큰, 토큰 유효 시간, localId(uId)가 로컬 스토리지에 저장됩니다. 저장된 토큰, 토큰 유효 시간의 경우 로그아웃을 하지 않고 애플리케이션에 접속 시 유효 시간이 남아있다면 별도의 로그인 없이 애플리케이션 사용이 가능하며, 유효 시간 만료 시 자동 로그아웃이 됩니다.
- 저장된 localId(uId)의 FireBase에 저장된 todoList 중 사용자 uId와 일치하는 데이터를 가져오는데 사욥됩니다.
<br/><br/>

### 로그아웃

![화면 기록 2023-02-01 오후 3 19 40 mov](https://user-images.githubusercontent.com/85052351/215966854-8b6cfd0d-c757-498a-bf7b-1679e6c13c15.gif)<br/>

- 로그아웃 시 로컬스토리지에 저장된 토큰, 토큰 유효시간, uId를 삭제합니다.

<br/><br/>
## 📝 CRUD
<br/>

### todo 작성

![화면 기록 2023-02-01 오후 2 29 15 mov](https://user-images.githubusercontent.com/85052351/215962842-ccf7e3bd-cb1b-4db8-8612-57251b3f0c64.gif)<br/>

- todo 작성 시 제목과 내용 최소 5글자 입력 시 저장이 가능합니다.
- 저장한 todo 데이터는 createToDo API를 호출하여 FireBase에 아래의 양식으로 저장합니다. 
```planinText
jeqDmZ8GP59wyJ62vVgq
ㄴcontent : "투두리스트 투두리스트!!!!"
ㄴcreatedAt : "2월 1일 수요일 14 : 49"
ㄴid : "jeqDmZ8GP59wyJ62vVgq"
ㄴtitle : "재미있는 투두리스트 작성"
ㄴuId : "Yuq9U9uqyiREUe4tCjvAHXpoAf73"
ㄴupdatedAt : "2월 1일 수요일 14 : 49"
```
<br/><br/>

### todo 상세보기 / 수정하기

![화면 기록 2023-02-01 오후 3 03 21 mov](https://user-images.githubusercontent.com/85052351/215964494-6cbc2c72-62bd-44ea-962a-cfc27dbf7ed5.gif) <br/>

- todo 상세 보기의 경우 별도의 API 호출 없이 Store에 저장된 데이터를 사용합니다.
- todo 수정 시 updateToDo API를 호출하여 FireBase의 데이터를 수정합니다.
- 수정 유효성의 경우 작성 유효성과 동일합니다.
<br/><br/>

### todo 삭제하기

![화면 기록 2023-02-01 오후 3 10 12 mov](https://user-images.githubusercontent.com/85052351/215965375-538ee759-7489-4d09-812c-47b51cff6844.gif)

- todo 삭제 시 deleteToDo API를 호출합니다.
- 삭제 후 todoList 페이지로 이동 후 getToDo API를 호출하여 최신의 todo 데이터를 유지합니다.
<br/><br/>


# 💄 <span id="design">디자인 / 기능 주안점</span>

### 피드백 전달
<br/>

![스크린샷 2023-02-01 오후 3 33 37](https://user-images.githubusercontent.com/85052351/215971780-f79d1eae-a0eb-4544-9064-4d34ffb10e31.png)
<br/>

![스크린샷 2023-02-01 오후 3 34 15](https://user-images.githubusercontent.com/85052351/215971809-7b2c7c23-8fb4-41a3-b5b4-761a656fcaaf.png)
<br/>

이번 todoList 프로젝트에서는 사용자에게 입력에 대한 피드백 전달에 대한 UI에 대한 고민을 많이 하였으며, 로그인 시 유효하지 않은 입력을 할 경우 input 요소의 색상 변경 및 피드백 문구, 회원가입 시 이미 존재하는 이메일로 회원가입 시도 시 피드백 전달합니다.

### 방어적 / 파괴적 버튼
<br/>

![스크린샷 2023-02-01 오후 3 35 05](https://user-images.githubusercontent.com/85052351/215970409-df208fff-be65-4da3-bba6-b18fdbb8f9fa.png)
<br/>

![스크린샷 2023-02-01 오후 3 35 14](https://user-images.githubusercontent.com/85052351/215970428-a0ac46ba-06d2-4dfe-937f-cd32bcdf0211.png)
<br/>

todo를 삭제하는 파괴적 버튼의 경우 배치는 하되 강조되지 않도록 UI를 구현했으며, 삭제 버튼 클릭 시 사용자에게 한번 더 확인 받도록 구현하였습니다.

<br/><br/>

![스크린샷 2023-02-01 오후 3 35 45](https://user-images.githubusercontent.com/85052351/215970982-1a03f993-5c76-4302-a18b-9c2bdef2bcdb.png)
<br/>
로그아웃의 경우 작은 화면 일때 실수로 클릭하는 일을 방지하고자 사용자의 클릭이 있을 경우만 로그아웃 버튼 사용이 가능하도록 구현하였습니다.


# <span id="folder">📂  구조</span>

```planinText        

├── 📁 assets // 이미지 파일 관리
├── 📁 common // 공통 사용 컴포넌트, 타입, 스타일, 유틸리티 함수 관리
│   ├── 📁 Loading
│   │   └── 📁 components
│   ├── 📁 auth
│   │   ├── 📁 components
│   │   └── 📁 types
│   ├── 📁 element
│   │   ├── 📁 components
│   │   └── 📁 types
│   ├── 📁 empty
│   │   ├── 📁 components
│   │   └── 📁 types
│   ├── 📁 styles
│   ├── 📁 types
│   └── 📁 utils
├── 📁 features // 기능별 분리
│   ├── 📁 auth // auth 관련 컴포넌트, api, 훅, slice, 타입, 유틸리티 함수 관리
│   │   ├── 📁 api
│   │   ├── 📁 components
│   │   ├── 📁 hooks
│   │   ├── 📁 slice
│   │   ├── 📁 types
│   │   └── 📁 utils
│   │   │       ├── LoginView.tsx
│   ├── 📁 toDo // todo 관련 컴포넌트, api, slice, 타입, 유틸리티 함수 관리
│   │   ├── 📁 api
│   │   ├── 📁 components
│   │   ├── 📁 slice
│   │   ├── 📁 types
│   │   └── 📁 utils
│   └── 📁 toDoDetail // todoDetail 관련 컴포넌트, slice, 타입 관리
│       ├── 📁 components
│       ├── 📁 slice
│       └── 📁 types
├── 📁 layout // layout 관련 컴포넌트, 타입 관리
│   ├── 📁 components
│   └── 📁 types
├── 📁 pages // route와 연결하는 페이지 관리
├── 📁 routes // route 관련 코드 관리
└── 📁 store

     
```
가장 많이 고민하고 수정이 많았던 부분입니다. 디렉토리 구조에 대해 고민한 부분은 아래와 같습니다.


* 기존 하나의 파일에서 View 로직, View 렌더링 로직, 비지니스 로직을 모두 관리 <br/> 
    ➡️ HTML, CSS 로직 관리는 View 폴더, View 렌더링 로직 관리는 상위 컴포넌트에서 관리하여 추상화된 Props Object로 전달, 비지니스 로직는 API 폴더에서 관리로 수정하여 비지니스 로직, View 렌더링 로직, View 로직 분리해주어 [관심사를 분리](https://nicehyun12.tistory.com/132)하고자 하였습니다.
* 기존 디렉토리 구조는 코드의 역할을 기준으로 디렉토리를 분리하였습니다. (모든 타입은 types 폴더에서 관리, 모든 유틸리티 함수는 utils 폴더에서 관리)<br/>
    ➡️ 변경 후 디렉토리 구조는 코드가 속하는 기능에 따른 디렉토리를 분리합니다. (auth가 사용하는 type, 유틸리티 함수, 컴포넌트 등 auth 관련 코드를 auth 폴더에서 관리)<br/>
* route 로직 또한 별도의 관심사로 취급하여 별도의 폴더을 구성하여 관리하도록 하였습니다.<br/>
* Empty 컴포넌트 또한 todoList와 별도의 관심사로 취급하여 별도의 폴더를 구성하여 관리하도록 하였습니다.<br/>
* components 폴더에서는 View와 View 렌더링 로직을 구분하여 관리합니다.<br/>

지역성과 관심사 분리에 대한 고민을 통해 위의 디렉토리를 구성하였습니다.


<br/><br/>

# <span id="route">🧭 라우트 관리</span>
```javascript
const AppRoute = () => {
  const isLogin = useSelector((state: Store) => state.login.isLogin);
  return (
    <Routes>
      {isLogin && <Route path="/" element={<HomePage />} />}
      {isLogin && <Route path="toDoDetail/:id" element={<ToDoDetailPage />} />}

      {!isLogin && <Route path="signUp" element={<SignUpPage />} />}

      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};
```
<br/>
라우트 가드를 사용하여 로그인이 되어있을 경우만 todo관련 페이지 이용이 가능하도록 하였으며, 404의 경우 login 페이지로 리다이렉트 되도록 했습니다.
<br/><br/>

# <span id="emphasis">🤔 과제 진행 주안점</span>
- 타입스크립트 타입 단언, any 타입 사용하지 않기
타입스크립트를 배운지 얼마되지 않아 챌린지를 진행했기 때문에 타입 단언과 any 타입을 최대한 사용하지 않기 위해 타입스크립트에 대해 지속적으로 공부하며 타입을 적용했습니다.<br/>
- [VAC 패턴](https://nicehyun12.tistory.com/132) 적용하기
VAC 패턴을 적용하여 View, View 렌더링 로직, 비지니스 로직을 분리 관리하여 관심사를 분리했습니다.<br/>
- [Suspense RFC 톺아보고](https://nicehyun12.tistory.com/135) 사용하기
한번도 사용해본적 없는 Suspense 다른 사람의 게시글이 아닌 RFC 문서를 직접 톺아보고 파악하여 프로젝트에 적용했습니다.<br/>
- [사용자 인증 토큰 관리하기](https://nicehyun12.tistory.com/139)
과제의 요구사항 중 하나인 사용자 토큰 관리 해결을 위해 토큰에 대한 지식이 없었기에 토큰에 대해 공부하고 프로젝트에 적용했습니다.
- [순수함수 사용하기](https://nicehyun12.tistory.com/136) 
미흡하지만 최대한 순수 함수를 사용하고자 많은 고민을 했습니다.
<br/><br/>

# 😭 한계점 및 개선 사항
- 타입스크립트를 온전히 사용하지 못한 것에 대해 아쉬움이 남습니다. 추후 타입스크립트에 대해 공부하여 수정하겠습니다.
- 과제 요구 사항 중 하나였던 리액트 쿼리를 적용하지 못 했습니다. 추후 공부하여 적용하겠습니다.
- [비동기 코드 처리](https://nicehyun12.tistory.com/137)에 대해 공부하고 적용해보았으나, 조금 더 공부 후 수정의 필요성을 느낍니다.




