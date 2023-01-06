import { procedure, router } from "../trpc";

export const appRouter = router({
  hello: procedure.query(() => "hello world"),
});

export type AppRouter = typeof appRouter;
