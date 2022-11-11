import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions
} from "fastify";

import fp from "fastify-plugin";

const heatlhRoutes: FastifyPluginAsync = async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/", (req, res) => {
    res.send({ status: "ok" });
  });
};

export default fp(heatlhRoutes);
