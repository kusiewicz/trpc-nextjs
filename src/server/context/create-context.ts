import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

import prisma from "../utils/prisma";

export const createContext = async (ctx: CreateNextContextOptions) => {
  const { req, res } = ctx;

  return {
    req,
    res,
    prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
