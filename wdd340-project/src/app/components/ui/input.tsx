"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}

        <input
          ref={ref}
          {...props}
          className={clsx(
            "border rounded-lg px-3 py-2 outline-none transition",
            "focus:ring-2 focus:ring-black focus:border-black",
            error && "border-red-500",
            className
          )}
        />

        {error && (
          <p className="text-sm text-red-500 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
