import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 characters" }),
});

export const registerSchema = loginSchema;

export type LoginProps = z.infer<typeof loginSchema>;
export type RegisterProps = z.infer<typeof registerSchema>;
