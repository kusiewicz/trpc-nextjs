import { initTRPC } from "@trpc/server";
import { createContext } from "./context/create-context";

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const midleware = t.middleware;
export const procedure = t.procedure;
