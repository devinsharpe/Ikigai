import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions
} from "fastify";

import fastifyPassport from "@fastify/passport";
import fp from "fastify-plugin";

const googleAuthRoutes: FastifyPluginCallback = (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/", async (req, res) => {
    res.send("👋 Hello world!");
  });
  server.get(
    "/callback",
    {
      preValidation: fastifyPassport.authenticate("google", {
        scope: ["profile"]
      })
    },
    async (req, res) => {
      res.redirect("/");
    }
  );
};

export default fp(googleAuthRoutes);
