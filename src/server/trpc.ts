import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = t.router;
export const midleware = t.middleware;
export const procedure = t.procedure;
