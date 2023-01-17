import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "../../../server/context/create-context";
import { appRouter } from "../../../server/routers/_app.router";

// TODO: Add onError handler.
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => createContext,
});
