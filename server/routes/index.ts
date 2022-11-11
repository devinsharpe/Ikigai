import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions
} from "fastify";

import fp from "fastify-plugin";
import health from "./health";

const routes: FastifyPluginCallback = (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(health, { prefix: "/v1/health" });
};

export default fp(routes);
