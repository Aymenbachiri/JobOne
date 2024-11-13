import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registration: UseFormRegisterReturn<any>;
  error?: FieldError;
  variant?: "input" | "textarea" | "select";
  options?: Array<{ value: string; label: string }>;
  valueAsNumber?: boolean;
};

export function FormField({
  label,
  type = "text",
  placeholder = "",
  registration,
  error,
  variant = "input",
  options = [],
  valueAsNumber = false,
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {variant === "input" && (
        <input
          type={type}
          placeholder={placeholder}
          {...(valueAsNumber
            ? { ...registration, type: "number" }
            : registration)}
          className="block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      )}
      {variant === "textarea" && (
        <textarea
          placeholder={placeholder}
          {...registration}
          className="block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      )}
      {variant === "select" && (
        <select
          {...registration}
          className="block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {error ? <p className="mt-1 text-red-500">{error.message}</p> : null}
    </div>
  );
}
