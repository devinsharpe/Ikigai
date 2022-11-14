import { FastifyPluginCallback } from "fastify";
import GoogleStrategy from "passport-google-oauth20";
import { env } from "../env";
import fastifyPassport from "@fastify/passport";
import fastifySecureSession from "@fastify/secure-session";
import fp from "fastify-plugin";

const authPlugin: FastifyPluginCallback = fp((server) => {
  server.register(fastifySecureSession, {
    secret: env.SESSION_SECRET,
    salt: env.SESSION_SALT,
    cookie: {
      path: "/",
      httpOnly: true
    }
  });
  server.register(fastifyPassport.initialize());
  server.register(fastifyPassport.secureSession());
  fastifyPassport.use(
    "google",
    new GoogleStrategy.Strategy(
      {
        clientID: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        callbackURL: `https://${env.HOST_URL}/auth/google/callback`
      },
      function (accessToken, refreshToken, profile, cb) {
        // Save profile/user in DB
        cb(undefined, profile);
      }
    )
  );
});

export default authPlugin;
