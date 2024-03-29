# React - Crypto Coin Tracker

### React를 사용해 암호화폐 목록과 시세를 보여주는 사이드 프로젝트입니다.

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/> <img src="https://img.shields.io/badge/ApexCharts-00e396?style=flat-square"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white"/>

---

**✨ 결과물 : https://dition0221.github.io/react-crypto_coin_tracker/**

![image](https://github.com/dition0221/dition0221/assets/129196812/8c30dc0a-a194-4157-bf74-deb8504e6ac4)

> **React**와 **TypeScript**와 **Styled-Components**를 사용하고, **암호화폐 API**로부터 데이터를 가져와 화면에 보여주는 '**암호화폐 코인 트래커 서비스**'입니다.  
> 홈에서 100가지의 암호화폐를 Rank 순으로 보여주며, 클릭 시 해당 암호화폐의 상세페이지로 이동합니다.
>
> - 일부 UI에 **반응형 디자인**을 적용해 모바일에서도 잘 보이게끔 설정.
> - 테마 변경 버튼을 이용해 즉각적으로 **다크모드/라이트모드** 설정을 변경 가능.
> - 우측 하단 Anchor 버튼을 통해 현재 페이지의 최상단으로 이동 가능.
> - 자동으로 현재 페이지에 알맞는 웹 페이지 Head Title 사용.

![image](https://github.com/dition0221/react-crypto_coin_tracker/assets/129196812/20ea9e7c-e5da-4dc7-9418-b23a9a5f88df)

> [ 상세페이지 ]  
> 해당 코인의 상세 정보를 확인할 수 있습니다.  
> **Nested Routes**를 이용해 시각화한 'Chart'와 'Price' 페이지를 볼 수 있습니다.  
> **ApexChart.js**를 사용해 API로부터 가져온 데이터를 시각화 하였습니다.
>
> - **React-Query**사용으로 페이지를 되돌아가도 이미 불러온 API를 re-fetch하지 않음.
> - URL 경로가 홈이 아닐 때, 우측 하단에 Home으로 가는 버튼 생성.

---

- **23-08-17 : #1.0 ~ #2.2 / Styled-Components(1)**
  - 패키지 : 'styled-components'
    - React 애플리케이션에서 컴포넌트 기반 스타일링을 위한 라이브러리
    - JavaScript 코드 안에서 스타일을 정의하고, 컴포넌트와 함께 사용 가능
    - 사용법
      - import구문 : import styled from "styled-components";
      - 기본형 : const 컴포넌트명 = styled.HTML태그명\`CSS코드\`;
      - props 사용
        - CSS : ${(인자명) => 인자명.prop명}
          - 인자명은 아무거나 상관없으나, 주로 'props'로 사용
        - 컴포넌트 : <컴포넌트명 prop명=prop값 />
      - 이미 만들어진 컴포넌트로부터 확장 가능
        - 기본형 : const 컴포넌트명 = styled(기존컴포넌트명)\`...\`;
    - 자동 완성 기능 'vscode-styled-components' 확장프로그램 사용
- **23-08-18 : #2.3 ~ #3.1 / Styled-Components(2) & Set up TypeScript**
  - styled-components
    - 컴포넌트의 스타일은 그대로 사용하되, HTML태그만을 바꾸고 싶을 때
      - 컴포넌트에서 'as="HTML태그명"' 속성을 사용
    - 컴포넌트 생성 시 속성값을 설정할 수 있음
      - 기본형 : const 컴포넌트명 = styled.HTML태그명.attrs({속성값들})\`...\`;
      - 'attrs'도 props를 사용해 커스텀마이징 가능
    - 애니메이션
      - import문 : import { keyframes } from "styled-components";
      - 기본형 : const 변수명 = keyframes\`...\`;
      - 애니메이션 적용은 기존 CSS 방식과 동일
    - 선택자(pseudo selector)
      - 하위 선택자가 일반 HTML태그 이더라도 선택 가능 (SCSS와 구문이 비슷함)
      - 하위 선택자가 컴포넌트('as'를 사용하더라도) 사용 가능
        - '${컴포넌트명}'으로 사용
      - '&' 기호는 자기 자신을 가리킴
    - theme : 기본적으로 모든 색상들을 가지고 있는 object
      - 모든 색상들을 하나의 object 안에 넣어놨기 때문에 매우 유용함
      - 추후 색상들을 바꿀 때 해당 object만 바꿔주면 되기 때문
      - 설정법
        1. 'index'파일에서 'import { ThemeProvider } from "styled-components";'
        2. 사용할 컴포넌트를 '&lt;ThemeProvider&gt;'로 감싸주기
        3. '&lt;ThemeProvider&gt;'에 'theme' 속성 부여하기
      - 사용법
        - 'styled-components'에서 'props.theme' 객체를 이용하여 사용
        - 'theme'에서 사용한 프로퍼티명을 사용해야 함
        - 'theme' 교체 시 '&lt;ThemeProvider&gt;'의 'theme' 속성값만 교체하면 됨
  - TypeScript : JavaScript를 기반으로 한 프로그래밍 언어, compile하여 평범한 JavaScript가 됨
    - 설치법
      - 새로운 프로젝트 생성 : 'npx create-react-app 폴더명 --template typescript'
      - 기존 프로젝트에 TS 추가 : 'npm i --save typescript @types/node @types/react @types/react-dom @types/jest'
    - TS가 패키지를 알지 못할 때
      - 몇몇 패키지는 JS로 만들어졌기 때문
      - 'npm i -D @types/패키지명'을 실행해 설치
    - 'index.tsx'에서 root 코드가 error 날 시 아래의 코드로 수정 (+ as HTMLElement)
      - const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
- **23-08-21 : #3.2 ~ #4.2 / TypeScript + React-Router-V6(1)**
  - TypeScript
    - React Component
      - Component가 필요로 하는 prop을 TS에게 설명해야 함
      - interface : 객체 모양(object shape)을 TS에게 설명해주는 TS의 개념
        - 선언 기본형 : interface 인터페이스명 { ... }
        - 사용 기본형 : ':타입명'
        - 'styled-components'에서 prop을 받으려면, 타입을 선언해 주어야 함
          - 기본형 : const 컴포넌트명 = styled.HTML태그명<타입명>\`...\`;
    - 선택적(optional) props
      - '?'기호를 사용해 선택적 prop 설정 가능
      - 병합연산자 '??' : 'null' 또는 'undefined'일 때 기본값 지정 가능
    - React State
      - TS가 'useState'의 초깃값을 보고, 자동적으로 타입을 추론함
      - 가끔 2개 이상의 타입을 사용하는 경우, 직접 타입을 선언해 주어야 함
        - 기본형 : const [변수명, 함수명] = useState<타입명>(초깃값);
    - React Event
      - 'addEventListener'에 인자로 사용하는 'event'에 타입을 설명해야 함
- **23-08-22 : #5.0 ~ #5.3 / React-Router + createGlobalStyle + fetchAPI**
  - React-Router v6
    - 설정법
      1. '/src/routes' 폴더에 화면에 보여줄 컴포넌트 파일들을 생성하기
      2. '/src/Router.tsx' 라우터 파일 생성 및 설정하기
         - { BrowserRouter, Routes, Route } 등
      3. 라우터 파일을 렌더링하기
         - 'App.tsx'에서 &lt;Router /&gt;를 return하여 렌더링
    - 'useParams()' : URL 파라미터 값(object)을 받을 수 있음
    - &lt;Link&gt; : React-Router 내에서 페이지를 이동하는 태그
      - 기본형 : &lt;Link to="이동할URL"&gt;내용&lt;/Link&gt;
      - CSS에서는 'Link' 대신 'a'태그로 사용 가능
  - 'styled-components'에서의 전역 스타일링
    - 'createGlobalStyle' 프로퍼티를 사용해 렌더링 시 전역 스코프에 스타일 사용
      - 기본형 : const 컴포넌트명 = createGlobalStyle\` ... \`;
    - '&lt;컴포넌트명 /&gt;'을 사용해 return
      - 폰트 사용 시 '@import'문이 제대로 적용되지 않으므로, 'index.html'의 &lt;head&gt;에 넣은 후 사용
  - &lt;Fragment&gt; : 일종의 유령 컴포넌트
    - 부모 element 없이 서로 붙어있는 많은 컴포넌트들을 return할 수 있게 해줌
      - &lt;div&gt; element 사용 없이 렌더링
      - 무수한 &lt;div&gt;가 사용되는 것을 방지함
    - 주로 빈 태그(<></>)로 사용함
  - fetch API
    - API를 통해 데이터를 가져올 때 TS에게 데이터의 타입을 알려주어야 함 (interface)
    - 'axios'패키지 사용 시 json 형식으로 바로 가져옴
      - 기본형 : const 변수명 = await axios("URL주소");
  - 즉시 실행 함수 표현 (IIFE; Immediately Invoked Function Expression)
    - 정의되자마자 즉시 실행되는 함수 (선언 후 실행할 필요 없음)
    - 기본형 : (함수선언)();
- **23-08-23 : #5.4 ~ #5.8 / Link state + Nested Routes + useMatch**
  - &lt;Link&gt; state : 화면에 보이지 않는 방식으로 다른 페이지에 데이터를 보내는 방법
    - 'state' 속성을 사용해 object 형식으로 데이터 전송 가능
    - 'useLocation()'을 사용해 데이터를 수신
      - 받은 데이터의 타입을 TS에게 설명해주어야 함
      - react-router-dom v6부터 'useLocation()'의 제네릭을 지원하지 않음
        - 'as 인터페이스명' 방식으로 사용
  - '?.' 옵셔널체이닝
    - 객체의 프로퍼티에 접근 시 해당 프로퍼티가 존재하지 않는 경우, Error를 발생시키지 않고 'undefined'를 반환함
  - Nested Routes : route 안에 존재하는 또 다른 route
    - 웹사이트에서 탭을 사용할 때 유용함 (스크린 안에 섹션이 많을 때 등)
    - 생성법 (자식 route를 라우터 파일에 작성하는 방법)
      1. 라우터 파일에서 부모 &lt;Route&gt;에 감싸서 사용하기
         - 상대경로 URL을 지원하므로, 자식 route의 path는 상대경로를 사용
      2. 자식 route가 어디에 render가 될지 부모 route 컴포넌트에서 '&lt;Outlet /&gt;'으로 표시하기
  - useMatch() : 현재 URL 위치를 기준으로 지정된 경로에 대한 일치 데이터를 반환
    - 기본형 : const 변수명 = useMatch("URL주소");
      - import { useMatch } from "react-router-dom";
      - 상대경로 URL 사용 불가능
    - 사용자가 선택한 URL에 위치하면 object를 반환, 그렇지않으면 null을 반환
- **23-08-26 : #5.9 ~ #5.11 / React-Query**
  - React-Query
    - 편리한 방식으로 데이터를 fetch 할 수 있는 패키지
      - 기존 방식인 useEffect와 useState를 활용한 fetch API를 하지 않아도 됨
    - 설치법 : 'npm i @tanstack/react-query'
    - 설정법
      1. 'index.tsx'에서 'queryClient' 객체 생성하기
      2. '&lt;QueryClientProvider&gt;' 생성 후 감싸주기
    - 사용법
      1. fetcher 함수 생성하기
         - 무조건 fetch promise(json)를 return 해주어야 함
      2. 'useQuery' Hook을 사용해 API 데이터 가져오기
         - 기본형 : const { isLoading, data } = useQuery&lt;제네릭&gt;([쿼리키명], fetcher함수, ?옵션);
           - queryKey : (string[]) query의 고유식별자
           - fetcher함수 : 매개변수 필요 시 익명화살표함수로 작성
           - 옵션 : (object)
             - refetchInterval : (number) 자동으로 refetch하는 시간 주기를 설정
           - isLoading : 로딩에 대한 boolean값을 return
           - data : fetch가 끝난 후 데이터를 넣어줌
    - [핵심] 다른 페이지에 갔다가 다시 돌아와도 API를 재요청하지 않음
      - React-Query가 데이터를 캐시에 저장해두기 때문
  - React-Query-Devtools
    - 캐시에 존재하는 Query를 볼 수 있음
      - React-Query의 모든 내부 동작을 시각화하는 데 도움
      - 문제 발생시 디버깅 시간을 절약할 수 있음
    - 기본적으로 React-Query-Devtools는 process.env.NODE_ENV === 'development'인 경우에만 번들에 포함되므로, production build 중에 제외하는 것에 대해 걱정할 필요 없음
    - 설치법 : 'npm i @tanstack/react-query-devtools'
    - 설정 및 사용법 : 'App.tsx'에서 'ReactQueryDevtools'를 import한 후 컴포넌트를 사용
      - 'initialIsOpen={true}' 속성 필수
- **23-08-28 : #5.12 ~ #5.16 / ApexCharts + React-Helmet**
  - useOutletContext()
    - 중첩된 라우트(Nested Routes)에서 부모에서 자식 컴포넌트에게 상태(state)를 공유하기 위한 목적으로 사용하는 Hook
    - &lt;Outlet /&gt; 사용 시 하위 Route에게 변수를 넘겨줄 수 있는 기능
      - 송신 기본형 : &lt;Outlet context={{ ... }}&gt; (object 형식으로 사용)
      - 수신 기본형
        - import { useOutletContext } from "react-router-dom";
        - const 변수명 = useOutletContext<제네릭>();
  - ApexCharts.js
    - API로 받아온 데이터 등을 시각화 할 수 있는 패키지
    - 설치법 : 'npm i react-apexcharts apexcharts'
    - 사용법
      - import ApexChart from "react-apexcharts";
      - &lt;ApexChart 속성들 /&gt;
        - type : 그래프 타입 (string)
        - series : 보여줄 데이터 (object[]) { name: string, data: [] }
        - options : 공식문서를 참고하여 사용 (object)
  - React-Helmet
    - 문서의 &lt;head&gt;로 렌더링하는 컴포넌트형 패키지
    - 설치법 : 'npm i react-helmet'
    - 사용법
      - import { Helmet } from "react-helmet";
      - &lt;Helmet&gt; ... &lt;/Helmet&gt;
    - 'Using UNSAFE_componentWillMount in strict mode is not recommended
      and may indicate bugs in your code.'의 Error 시 'react-helmet-async' 패키지를 사용
      - 'App.tsx'에서 &lt;Router /&gt;를 &lt;HelmetProvider&gt;로 감싸준 후 사용
      - 'react-helmet' 패키지도 다운 받아야 함
- **23-08-29 : [Code Challenge] use ApexChart**
- **23-08-30 : #6.0 ~ #6.4 / Recoil Atom**
  - Recoil
    - React에서 사용할 수 있는 상태 관리(state management) 라이브러리
    - 설치법 : 'npm i recoil'
    - 설정법 : 'index.tsx'에서 &lt;RecoilRoot&gt;로 앱을 감싸주기
  - atom : 특정 컴포넌트에 종속되지 않으며, global state를 저장하는 기본 단위
    - Recoil에서는 state값을 'atom'이라는 버블에 담아서 사용
    - atom이 변경되면 컴포넌트도 변경된 값으로 re-rendering 됨
    - 사용법
      1. 'atom'을 관리하는 파일 생성하기
         - '/src/atoms.ts'
      2. 'atom' 생성하기
         - import { atom } from "recoil";
         - 기본형 : export const 변수명 = atom({ key: 키값, default: 초기값});
      3. [Read] 다른 컴포넌트에서 'atom' 연결하기
         - 기본형 : const 변수명 = useRecoilValue(아톰명);
      4. [Write] 다른 컴포넌트에서 'atom' 수정하기
         - 기본형 : const Setter함수 = useRecoilState(아톰명);
         - 'useState()'처럼 사용하면 됨
- **23-09-20 : Fix: price chart**
  - Fix: 'Price' 차트에서 색깔이 반전되어있는 현상 수정

---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.
