import React from "react";

export {};

export function debounce(
  fn: (e: React.ChangeEvent<HTMLInputElement>) => void,
  time: number
) {
  let timeoutId: number | null;
  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      timeoutId = null;
      // @ts-ignore
      fn(...args);
    }, time);
  };
}
