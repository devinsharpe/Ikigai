import { Context } from "./_context";
import { router } from "@trpc/server";
import { z } from "zod";

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const appRouter = router<Context>()
  .query("getUserById", {
    input: z.string(),
    async resolve({ input }) {
      return users[input]; // input type is string
    }
  })
  .mutation("createUser", {
    // validate input with Zod
    input: z.object({
      name: z.string().min(3),
      bio: z.string().max(142).optional()
    }),
    async resolve({ input }) {
      const id = Date.now().toString();
      const user: User = { id, ...input };
      users[user.id] = user;
      return user;
    }
  });

// export type definition of API
export type AppRouter = typeof appRouter;
