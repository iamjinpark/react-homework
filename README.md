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

#### 컴포넌트 분리

<img src="https://github.com/iamjinpark/react-homework/assets/146078235/1ba8a86a-491b-4169-aa21-5bf553c68e93">
 1) 뒤로가기 버튼 = GoBackButton.jsx<br />
 2) 로그인 안내 문구 = LoginText.jsx<br />
 3) 로그인 입력창 = LoginInput.jsx<br />
 4) 이메일로 계정찾기 = FindAccountText.jsx<br />

총 4파트로 구분했으며 각 컴포넌트별로 파일 생성

<p align="center">
<img src="https://github.com/iamjinpark/react-homework/assets/146078235/d84b24c7-e69b-4b09-9d25-59ef68bb28e0" width="200px" >
</p>

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

#### 최종 렌더링 구현

<img src="https://github.com/iamjinpark/react-homework/assets/146078235/1aff3e47-1543-47ae-96cf-d13408d85c6e">

#### 느낀점

리액트의 렌더링 구조에 대해 잘 파악할 수 있었고 (App.js -> main.js -> 최종 렌더링) <br/>
컴포넌트별로 쪼갠 뒤 App.js에서 깔끔하게 코드를 정리한 점을 보면서 리액트의 편리함을 깨달을 수 있었다.
아직은 렌더링만 할 수 있는 실력이지만 추후 이벤트 함수 적용을 배워 유효성 검사 파트까지 구현하고 싶다.

</details>
