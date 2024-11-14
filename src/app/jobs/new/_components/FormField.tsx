import Select from "@/components/home/Select";
import LocationInput from "./LocationInput";

type FormFieldProps = {
  label: string;
  type?:
    | "text"
    | "email"
    | "url"
    | "number"
    | "file"
    | "select"
    | "textarea"
    | "location";
  name: string;
  placeholder?: string;
  options?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  required?: boolean;
};

export function FormField({
  label,
  type = "text",
  name,
  placeholder,
  options,
  control,
  errors,
  required = false,
}: FormFieldProps) {
  const { register } = control;
  const error = errors[name];

  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      {type === "select" && options ? (
        <Select
          id={name}
          {...register(name)}
          defaultValue=""
          required={required}
          className="h-10 w-full appearance-none truncate rounded-md border border-input bg-background py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" hidden>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder}
          required={required}
          className="input h-24 w-full rounded-md border border-input resize-none "
        />
      ) : type === "location" ? (
        <LocationInput
          {...register(name)}
          placeholder="Enter city..."
          aria-invalid={error ? "true" : "false"}
        />
      ) : (
        <input
          id={name}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          required={required}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      )}
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
