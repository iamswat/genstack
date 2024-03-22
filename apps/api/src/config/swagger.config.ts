import swagger from "@elysiajs/swagger";
import { APPLICATION_NAME, HOST, PORT } from "@gen/env";

export enum swaggerTagNames {
	basic = "basic"
}

export const swaggerConfig = swagger({
	provider: "swagger-ui",
	documentation: {
		info: {
			title: APPLICATION_NAME,
			version: "0.1.0",
			description: `application live at http://${HOST}:${PORT}`,
		},
		tags: [
			{
				name: swaggerTagNames.basic,
				description: "list of basic endpoints",
			}
		],
	},
});