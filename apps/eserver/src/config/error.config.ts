import { Elysia } from "elysia";
import { output } from "./logger.config";

export const errorConfig = new Elysia();

errorConfig.onError(({ code, error }) => {
	output.error(error);
	const message = code === "VALIDATION" ? JSON.parse(error.message) : error.message;
	return {
		status: false,
		code: code,
		message: message,
	};
});
