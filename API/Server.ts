import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./Routes.ts";
import { cfg } from "./config/Index.ts";

const port = +cfg.PORT;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());


console.log(`Server running on port ${port} `);
await app.listen({ port });