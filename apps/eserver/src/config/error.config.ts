import { Elysia } from "elysia";
import { output } from "./logger.config";

export const errorConfig = new Elysia();

errorConfig.onError(({ code, error, set }) => {
	output.warn("some error occurred", code);
	switch (code) {
		case "INTERNAL_SERVER_ERROR":
			break;
		case "INVALID_COOKIE_SIGNATURE":
			break;
		case "NOT_FOUND":
			break;
		case "PARSE":
			break;
		case "UNKNOWN":
			break;
		case "VALIDATION":
			break;
	}
});
