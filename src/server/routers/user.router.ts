import { z } from "zod";
import { createUserSchema } from "../prisma/schema/user.schema";
import { procedure, router } from "../trpc";

export const userRouter = router({
  registerUser: procedure.input(createUserSchema).mutation(() => {}),
});
