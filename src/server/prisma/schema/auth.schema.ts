import z from "zod";

export const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = loginSchema.extend({ username: z.string() });

export type LoginProps = z.infer<typeof loginSchema>;
export type RegisterProps = z.infer<typeof registerSchema>;
