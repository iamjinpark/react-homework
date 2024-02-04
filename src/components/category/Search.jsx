import { React, useState } from "react";
import { GoBackButton } from "../login/GoBackButton";
import category from "../../data/category.json";
import debounce from "../../utils/debounce";

export function Search() {
  return (
    <div>
      <SearchForm />
    </div>
  );
}

function SearchForm() {
  // 상태 관리
  const [searchText, setSearchText] = useState("");

  // 리렌더링 요청
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  // category 에서 searchText 값을 가진 항목만 거른 배열이 필요해! => 그리고 필터 된 값들을 렌더링 해주는거지!
  const filteredNameSecond = category.filter((item) =>
    item.name.includes(searchText)
  );

  return (
    <div>
      {/* 서치 인풋 */}
      <form className=" flex justify-between flex-wrap" id="category-form">
        <div className="flex flex-row gap-6 mb-3 w-full">
          <GoBackButton />
          <label className="sr-only" htmlFor="search">
            검색하기
          </label>
          <input
            id="search"
            type="search"
            placeholder="분야 (이름)로 검색 (ex.프론트)"
            className="category-search-input w-full h-[1.125rem] placeholder:text-base appearance-none outline-none"
            defaultValue={searchText}
            onChange={debounce(handleSearch)}
          />
          <button className="category-search-button w-[1.25rem] h-[1.25rem]">
            <img src="../../../public/images/search.svg" alt="검색" />
          </button>
        </div>

        {/* 카테고리 아이템 */}
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

        <CategoryButton />
      </form>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="flex flex-row gap-6 mb-3 w-full">
      <GoBackButton />
      <label className="sr-only" htmlFor="search">
        검색하기
      </label>
      <input
        id="search"
        type="search"
        placeholder="분야 (이름)로 검색 (ex.프론트)"
        className="category-search-input w-full h-[1.125rem] placeholder:text-base appearance-none outline-none"
        defaultValue={searchText}
        onChange={debounce(handleSearch)}
      />
      <button className="category-search-button w-[1.25rem] h-[1.25rem]">
        <img src="../../../public/images/search.svg" alt="검색" />
      </button>
    </div>
  );
}

function CategoryItem() {
  return category.map((item) => {
    return (
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
            defaultValue={item.name}
            type="checkbox"
            id={item.id}
            className="category-checkbox appearance-none w-[1.25rem] h-[1.25rem] bg-categoryPlus bg-no-repeat bg-right checked:bg-categoryCheck"
          />
        </label>
      </div>
    );
  });
}

function CategoryButton() {
  return (
    <button
      className="category-button-save hover:bg-tertiary block text-center w-full mt-[1.125rem] py-[0.5rem] bg-primary rounded-2xl border-primary text-background text-base font-bold leading-5"
      aria-label="저장하기"
    >
      이대로 저장할래요
    </button>
  );
}
