import { Elysia } from "elysia";
import { output } from "./logger.config";
import { DEPLOY, DEPLOY_ENVIRONMENT } from "@gen/env";

export const errorConfig = new Elysia();

errorConfig.onError({ as: "global" }, ({ code, error, request: { url, method } }) => {
	output.error({ method: method, path: url, message: error.message });
	let outputMessage;
	try {
		outputMessage = JSON.parse(error.message);
	} catch (e) {
		outputMessage = error.message;
	}
	if (DEPLOY !== DEPLOY_ENVIRONMENT.dev) outputMessage = "Something Went Wrong"; // hide message in stag/prod
	return {
		code: code,
		message: outputMessage,
	};
});
