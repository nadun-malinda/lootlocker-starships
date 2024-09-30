"use client";

import { useState, useEffect } from "react";

// Symbol to indicate that the value has not been set yet
const symbol = Symbol("not-set-yet");

type NotSetYet = typeof symbol;

/**
 * Custom hook to debounce a callback function. It delays invoking the callback
 * until after the specified time has passed since the last call.
 *
 * @param {function} callback - The callback function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {(arg: T) => void} A debounced function that can be called with the provided argument.
 */
export function useDebouncedCallback<T>(
  callback: (arg: T) => void,
  delay: number
): (arg: T) => void {
  const [value, setValue] = useState<T | NotSetYet>(symbol);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value !== symbol) {
        callback(value as T);
        setValue(symbol); // Reset value to the initial symbol state
      }
    }, delay);

    return () => {
      clearTimeout(timeout); // Cleanup timeout on component unmount or delay change
    };
  }, [value, callback, delay]);

  // Return a function that updates the value to debounce
  return (arg: T) => {
    setValue(arg);
  };
}
