import { serve } from "https://deno.land/std@0.63.0/http/server.ts";
import * as flags from "https://deno.land/std@v0.63.0/flags/mod.ts";
const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;
const s = serve({ port: port });
console.log(`http://localhost:${port}/`)
const body = new TextEncoder().encode("<h1 style='margin: 10% auto; width: 60%; font color = blue'><marquee>Leandro Vilas Boas, obrigado! Floriano.</marquee></h1>\n");
for await (const req of s) {
     req.respond({ body: body });
}
