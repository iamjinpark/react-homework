import React from "react";
import direction from "../../public/images/directionL.svg";

export function GoBackButton() {
  return (
    <button>
      <img src={direction} alt="뒤로가기" className="w-[1.25rem] h-[1.25rem]" />
    </button>
  );
}
