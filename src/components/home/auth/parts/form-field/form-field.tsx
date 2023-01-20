import { forwardRef, ForwardedRef, LegacyRef } from "react";

// eslint-disable-next-line react/display-name
export const FormField = forwardRef(
  (
    {
      field,
      label,
      type = "text",
      className,
    }: {
      field: string;
      label: string;
      type?: "text" | "password" | "email";
      className?: string;
    },
    ref: LegacyRef<HTMLInputElement>
  ) => (
    <div className={className}>
      <label
        htmlFor={field}
        className="text-xl lg:text-2xl tracking-wide font-light"
      >
        {label}
      </label>
      <input
        type={type}
        className="border border-orange-200 rounded-md h-5 focus:border-2 focus:border-orange-400 outline-0 h-7 mt-1 cursor-pointer"
        ref={ref}
        name={field}
      />
    </div>
  )
);
