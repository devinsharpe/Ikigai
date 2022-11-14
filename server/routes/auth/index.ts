import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions
} from "fastify";

import fp from "fastify-plugin";
import google from "./google";

const routes: FastifyPluginCallback = (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(google, { prefix: `${options.prefix}/google` });
};

export default fp(routes);
