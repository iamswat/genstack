import { Elysia } from "elysia";
import { APPLICATION_NAME, PORT } from "@gen/env";
import { errorConfig } from "./config/error.config";
import { swaggerConfig } from "./config/swagger.config";
import { logger } from "@bogeychan/elysia-logger";
import { output, pinoTransportOptions } from "./config/logger.config";
import { zDefaultResponse, zDefaultResponseType } from "./dto/common.dto";
import { basicController } from "./controllers/basic.controller";
import staticPlugin from "@elysiajs/static";

const app: Elysia = new Elysia({ name: APPLICATION_NAME });

app.use(staticPlugin({ prefix: "/" }));
app.use(errorConfig);
app.use(swaggerConfig);
app.use(
	logger({
		transport: pinoTransportOptions,
	})
);

// default route
app.get(
	"/",
	(): zDefaultResponseType => {
		return { status: true, message: "welcome" };
	},
	{
		response: zDefaultResponse,
		type: "application/json",
	}
);

app.use(basicController);
app.listen(PORT);

output.info(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
