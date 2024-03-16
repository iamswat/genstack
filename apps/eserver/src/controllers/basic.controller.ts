import { Elysia } from "elysia";
import { zBasicResponse, zBasicResponseType } from "../dto/basic.dto";
import { swaggerTagNames } from "../config/swagger.config";
import { basicDefaultService } from "../services/basic.service";

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
