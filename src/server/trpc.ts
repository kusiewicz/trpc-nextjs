import { initTRPC } from "@trpc/server";
import { Context } from "./context/create-context";

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const midleware = t.middleware;
export const procedure = t.procedure;
