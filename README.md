## React Weekly Mission

<details> 
  <summary><b>1주차 과제 리드미</b></summary>

### [ 프로젝트 페이지 리액트로 재구현 ]

#### 목표

JSX 또는 React API를 사용해, Vanilla 프로젝트에서 구현한 인터페이스의 일부를 마크업하여 웹 브라우저에 렌더링되도록 만듭니다.

---

#### 환경구성

vite와 tailwind를 동시 사용할 수 있게 구성
(참고 : https://tailwindcss.com/docs/guides/vite)

---

#### 컴포넌트 분리

<img src="https://github.com/iamjinpark/react-homework/assets/146078235/1ba8a86a-491b-4169-aa21-5bf553c68e93">

1.  뒤로가기 버튼 = GoBackButton.jsx<br />
2.  로그인 안내 문구 = LoginText.jsx<br />
3.  로그인 입력창 = LoginInput.jsx<br />
4.  이메일로 계정찾기 = FindAccountText.jsx<br />

총 4파트로 구분했으며 각 컴포넌트별로 파일 생성

<p align="center">
<img src="https://github.com/iamjinpark/react-homework/assets/146078235/d84b24c7-e69b-4b09-9d25-59ef68bb28e0" width="200px" >
</p>

---

#### 각 컴포넌트별 코드 구성

##### 1. GoBackButton

함수 설정 후 html 구성을 리턴하는 형식으로 작성
이미지를 불러올땐 import 사용 후 { 이미지이름 }으로 사용

```
import React from "react";
import direction from "../../public/images/directionL.svg";

export function GoBackButton() {
  return (
    <button>
      <img src={direction} alt="뒤로가기" className="w-[1.25rem] h-[1.25rem]" />
    </button>
  );
}
```

##### 2. LoginText

```
import React from "react";

export function LoginText() {
  return (
    <div className="py-[0.75rem]">
      <p className="text-lg font-semibold">안녕하세요!</p>
      <p className="text-lg font-semibold">휴대폰 번호로 로그인해주세요</p>
      <p className="text-xs">
        휴대폰 번호는 안전하게 보관되며 서로에게 공개되지 않아요.
      </p>
    </div>
  );
}
```

##### 3. LoginInput

useState 사용으로 입력값 유효성 검사까지 하고 싶었으나 하지 못함
추후 수업에서 배운 뒤 적용해볼 예정

```
import { useState } from "react";
import React from "react";

export function LoginInput() {
  return (
    <form className="login-form-before flex flex-col justify-center items-center gap-3 mb-[0.75rem]">
      <label htmlFor="phoneNumber" className="login-label-phoneNumber sr-only">
        휴대폰 번호 입력
      </label>
      <input
        className="login-input-phoneNumber border-solid border-[0.5px] border-gray-900 rounded-sm w-full h-[2.375rem] py-[0.5rem] px-[0.75rem] placeholder:text-base font-normal"
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="휴대폰 번호(-없이 숫자만 입력)"
        pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
        maxLength="11"
        required
      />
      <button
        className="login-button-verify timer-button border-solid border-[0.5px] rounded-sm w-full h-[2.375rem] py-[0.5rem] text-base font-normal text-gray-500"
        id="verify"
        type="submit"
        aria-label="인증문자 받기"
        disabled
      >
        인증문자 받기
      </button>
    </form>
  );
}

```

##### 4.FindAccountText

```
import React from "react";

export function FindAccountText() {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <p className="text-sm text-gray-500">휴대폰 번호가 변경되었나요?</p>
      <a href="/" className="text-sm underline underline-offset-2">
        이메일로 계정찾기
      </a>
    </div>
  );
}

```

##### 각 컴포넌트 App.js에 합치기

<img src="https://github.com/iamjinpark/react-homework/assets/146078235/43ea5522-7ce7-4ecb-a32e-46e603ae23be">

---

#### 최종 렌더링 구현

<img src="https://github.com/iamjinpark/react-homework/assets/146078235/1aff3e47-1543-47ae-96cf-d13408d85c6e">

---

#### 느낀점

리액트의 렌더링 구조에 대해 잘 파악할 수 있었고 (App.js -> main.js -> 최종 렌더링) <br/>
컴포넌트별로 쪼갠 뒤 App.js에서 깔끔하게 코드를 정리한 점을 보면서 리액트의 편리함을 깨달을 수 있었다.
아직은 렌더링만 할 수 있는 실력이지만 추후 이벤트 함수 적용을 배워 유효성 검사 파트까지 구현하고 싶다.

</details>

<details> 
  <summary><b>3주차 과제 리드미</b></summary>

### [프로젝트 페이지 리액트로 구현 + 기능 추가]

#### 목표

- [x] 바닐라 프로젝트의 데이터베이스 연동 부분을 리액트로 구현합니다.
- [x] 리액트 방식으로 앱의 상태 및 사이드 이펙트를 관리해봅니다.
- [ ] 커스텀 훅 함수를 1개 이상 작성해 여러 곳에서 재사용 해봅니다.
- [ ] 가능한 경우, DOM 객체에 접근/조작하는 부분도 구현합니다. (옵션)
- [ ] 가능한 경우, Storybook을 활용해보세요. (옵션)

#### 구현 기능

<p align="center">
<img src="https://github.com/iamjinpark/react-homework/assets/146078235/fea0bf73-2a3a-473b-8a74-a46bb3d795ce">
</p>

카테고리 페이지에 서치 기능을 추가했다.
바닐라 프로젝트때 구현해보고 싶었던 기능이였는데 화면에 바로 렌더링 되는 방법을 몰라 아예 input 태그를 지우고 제출했었는데 리액트 덕분에 손쉽게 구현할 수 있었다. <br/>(하지만 절대 과정이 손쉽지는 않았다.)

#### category.json 파일 생성

바닐라 프로젝트때 하드코딩으로 직접 type, name, id 값을 각 아이템마다 직접 다 쳤다면,
리액트에서는 컴포넌트 생성 후 데이터.json 에서 불러와 리스트 렌더링을 사용하면 된다.

<p align="center">
<img src="https://github.com/iamjinpark/react-homework/assets/146078235/462c5e52-d73f-4c10-92c5-2b1a6515283f">
</p>

#### 컴포넌트 구성

[이전]<br/>
각 SearchInput, CategoryItem, CategoryButton로 구분한 뒤 SearchForm 내부에 추가하는 방식으로 구현
그러나 SearchInput 컴포넌트 내에 onChange 함수를 적용할 수 없었고 (상태 관리 연동이 안됨), CategoryItem에 filter 기능을 연동할 수 없는 문제점 발생
<br/>
[이후]<br/>
SearchForm 태그 내부에 컴포넌트가 아닌 JSX 구문으로 추가한 뒤 각 속성들을 추가해줌

1. SearchInput 컴포넌트 대신에 아래 코드와 같이 추가

```
<input
            id="search"
            type="search"
            placeholder="분야 (이름)로 검색 (ex.프론트)"
            className="category-search-input w-full h-[1.125rem] placeholder:text-base appearance-none outline-none"
            defaultValue={searchText}
            onChange={debounce(handleSearch)}
          />
```

2. CategoryItem에 map을 사용해서 직접 속성값 (item.\*) 추가

```
 {filteredNameSecond.map((item) => (
          <div className="w-[49%] mt-3" key={item.id}>
            <label
              htmlFor={item.id}
              className="category-label w-full flex justify-between items-center bg-gray-300 p-[0.75rem] rounded-2xl"
            >
              <div className="flex flex-col">
                <p className=" text-[0.6875rem] leading-4 font-semibold text-gray-100">
                  {item.type}
                </p>
                <p className="text-lg leading-7 font-semibold text-nowrap">
                  {item.name}
                </p>
              </div>
              <input
                value={item.name}
                type="checkbox"
                id={item.id}
                className="category-checkbox appearance-none w-[1.25rem] h-[1.25rem] bg-categoryPlus bg-no-repeat bg-right checked:bg-categoryCheck"
              />
            </label>
          </div>
        ))}
```

#### 디바운스 함수 추가

##### 야무쌤과 만든 유틸함수 사용

input onChange 속성에 연결해주었다.

```
export default function debounce(callback, timeout = 400 /* 0.4s */) {
  let cleanup;

  // closure
  return (...args) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, ...args), timeout);
  };
}
```

#### 상태관리

<p align="center">
<img src="https://github.com/iamjinpark/react-homework/assets/146078235/05ac795f-945d-4af2-97f4-f178ccbc7df3">
</p>

searchInput에 값을 입력하면 리액트 상태 관리로 인해 state에 값이 들어오는 것을 확인할 수 있다.

#### input 에 입력값이 화면에 바로 렌더링 될 수 있는 이유?

첫 렌더링 자체를 filter 메서드를 이용해 리스트 렌더링 해주고 입력값(즉, searchText)를 포함하고 있는 아이템 객체만 추후 렌더링하여 화면에 보여지는 구조로 코드를 짰다.

```
  const filteredNameSecond = category.filter((item) =>
    item.name.includes(searchText)
  );
```

#### 회고

useState에 대해서 개념을 잘 익혔다고 생각했는데 막상 코드로 상태 관리를 하려니 생각만큼 쉽지 않았다.
각 컴포넌트별로 어떤 값을 상태 관리 할 것인지, 어디에 이벤트를 줄 것인지 로직을 잘 생각해야했고 야무쌤과 수업에서 다룬 내용을 직접 응용하려니 쉽지 않았다. 단순히 텍스트를 리스트 렌더링했던 실습 예제와는 다르게 컴포넌트를 생성하고 적용하려니 컴포넌트 내부에 입력되야할 값들이 매칭되지 않거나, 화면에 렌더링이 되지 않거나 아주 다양한 문제점을 마주할 수 있었다. 그래도 바닐라 프로젝트 조원들의 도움과 야무쌤 코드를 찬찬히 훑어보며 최종적으로 원하는 기능을 구현할 수 있었다.

</details>
