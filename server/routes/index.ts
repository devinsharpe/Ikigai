import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions
} from "fastify";

import auth from "./auth";
import fp from "fastify-plugin";
import health from "./health";

const routes: FastifyPluginCallback = (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(health, { prefix: "/health" });
  server.register(auth, { prefix: "/auth" });
};

export default fp(routes);
