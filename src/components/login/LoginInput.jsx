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

// 핸드폰 번호 유효성 검사
