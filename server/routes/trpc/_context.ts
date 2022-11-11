import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { inferAsyncReturnType } from "@trpc/server";

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const user = { name: req.headers["username"] ?? "anonymous" };

  return { req, res, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
