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
