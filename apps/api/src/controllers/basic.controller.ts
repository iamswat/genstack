import { Elysia, t } from "elysia";
import { zBasicResponse, zBasicResponseType } from "../dto/basic.dto";
import { swaggerTagNames } from "../config/swagger.config";
import { basicDefaultService, basicFailService } from "../services/basic.service";

export const basicController = new Elysia({ prefix: "/basic" });

basicController.get(
	"/",
	(): zBasicResponseType => {
		return basicDefaultService();
	},
	{
		response: zBasicResponse,
		type: "application/json",
		detail: { tags: [swaggerTagNames.basic] },
	}
);

basicController.post(
	"/fail",
	({ body }): zBasicResponseType => {
		return basicFailService();
	},
	{
		body: t.Object({
			name: t.String(),
			age: t.Number(),
		}),
		// headers: t.Object({
		// 	name: t.String(),
		// }),
		response: zBasicResponse,
		type: "application/json",
		detail: { tags: [swaggerTagNames.basic] },
	}
);
