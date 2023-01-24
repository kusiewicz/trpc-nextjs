import { TRPCError } from "@trpc/server";
import { registerSchema } from "../prisma/schema/auth.schema";
import { procedure, router } from "../trpc";
const bcrypt = require("bcrypt");

export const userRouter = router({
  registerUser: procedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      const { email, password } = input;
      const isExistingUser = await ctx.prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (isExistingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists",
        });
      }

      ctx.prisma.user.create({
        data: {
          email: email,
          password: bcrypt.hashSync(password, 10),
        },
      });

      return {
        status: 201,
        message: "Account created successfully",
      };
    }),
});
