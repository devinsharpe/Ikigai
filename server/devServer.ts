import { closeServer } from "./server";
import { env } from "./env";
import localtunnel from "localtunnel";

(async () => {
  const tunnel = await localtunnel({
    port: parseInt(env.PORT),
    subdomain: env.DEV_SUBDOMAIN
  });
  console.log(`Dev server running on ${tunnel.url}`);
  tunnel.on("close", () => {
    closeServer();
  });
})();
