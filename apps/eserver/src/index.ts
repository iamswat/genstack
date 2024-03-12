import { Elysia } from "elysia";
import { PORT } from "@gen/env";

const app = new Elysia();
app.get("/", () => "Hello Elysia");
app.listen(PORT);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
