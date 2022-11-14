import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions
} from "fastify";

import fp from "fastify-plugin";

const heatlhRoutes: FastifyPluginCallback = (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/", (req, res) => {
    res.send({ status: "ok" });
  });
};

export default fp(heatlhRoutes);
