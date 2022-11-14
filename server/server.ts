import { appRouter } from "./routes/trpc";
import { createContext } from "./routes/trpc/_context";
import { env } from "./env";
import fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import prismaPlugin from "./plugins/prisma";
import routes from "./routes";

const envToLogger = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname"
      }
    }
  },
  production: true,
  test: false
};

const server = fastify({
  maxParamLength: 5000,
  logger: envToLogger[env.NODE_ENV] ?? true
});

server.register(prismaPlugin);
server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext }
});
server.register(routes);

export const closeServer = () => server.close();

(async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    console.log(err);
    server.log.error(err);
    process.exit(1);
  }
})();
