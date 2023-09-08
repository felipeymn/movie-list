"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handler(event: any) {
    if (event.key === "Enter") {
      event.preventDefault();
      router.push(`/movie/?q=${query}`);
    }
  }
  return (
    <div className="flex relative items-center gap-2 justify-self-center">
      <input
        type="search"
        value={query}
        onKeyDown={handler}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
        className="bg-transparent font-light text-sm text-gray-200 w-28 outline-none border-b border-b-gray-500"
        placeholder="search"
      ></input>
      <Link href={`/movie/?q=${query}`}>
        <svg
          className="w-3 h-3 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </Link>
    </div>
  );
}
