import { createPinoLogger } from "@bogeychan/elysia-logger";

export const pinoTransportOptions = {
	targets: [
		{ level: "trace", target: "pino-pretty" }, // Send pretty formatted logs to console (stdout)
		{ level: "trace", target: "pino/file", options: { destination: "./eServer.log" } },
	],
};

export const output = createPinoLogger({
	file: "./eServer.log",
	transport: pinoTransportOptions,
});
