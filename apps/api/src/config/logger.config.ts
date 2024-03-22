import { createPinoLogger } from "@bogeychan/elysia-logger";

const destFileName: string = "./api.log";
export const pinoTransportOptions = {
	targets: [
		{ level: "trace", target: "pino-pretty" }, // Send pretty formatted logs to console (stdout)
		{ level: "trace", target: "pino/file", options: { destination: destFileName } },
	],
};

export const output = createPinoLogger({
	file: destFileName,
	transport: pinoTransportOptions,
});
