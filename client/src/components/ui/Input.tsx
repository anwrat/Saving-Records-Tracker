import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, id, className = "", ...props }: InputProps) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          w-full rounded-lg border px-3 py-2.5
          text-sm outline-none transition
          placeholder:text-gray-400
          ${
            error
              ? "border-red-300 focus:border-red-400 focus:ring-red-100"
              : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
          }
          focus:ring-2
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
