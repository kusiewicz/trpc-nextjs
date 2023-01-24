import { forwardRef, ForwardedRef, LegacyRef } from "react";

// eslint-disable-next-line react/display-name
export const FormField = forwardRef(
  (
    {
      field,
      label,
      type = "text",
      className,
      errorMessage,
      ...rest
    }: {
      field: string;
      label: string;
      type?: "text" | "password" | "email";
      errorMessage?: string;
      className?: string;
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
        <label
          htmlFor={field}
          className="text-xl lg:text-2xl tracking-wide font-light"
        >
          {label}
        </label>
        <input
          type={type}
          className={`border ${
            errorMessage ? "border-red-500 border-2" : "border-orange-500"
          } rounded-md h-5 focus:border-2 focus:border-orange-400 outline-0 h-7 mt-1 cursor-pointer`}
          ref={ref}
          name={field}
          {...rest}
        />

        {errorMessage ? (
          <span className="font-light text-red-600 text-xs inline-block mt-1">
            {errorMessage}
          </span>
        ) : null}
      </div>
    );
  }
);
