function MakeBoolean(value: string) {
	return value.toLowerCase() === "true";
}

export enum DEPLOY_ENVIRONMENT {
	dev = "dev",
	stag = "stag",
	prod = "prod",
}

export const APPLICATION_NAME: string = Bun.env.APPLICATION_NAME || "genstack";
export const DEPLOY: DEPLOY_ENVIRONMENT = (Bun.env.DEPLOY as DEPLOY_ENVIRONMENT) || DEPLOY_ENVIRONMENT.dev;
export const DEBUG: boolean = MakeBoolean(Bun.env.DEBUG || "") || false;
export const HOST: string = Bun.env.HOST || "localhost";
export const PORT: number = Number(Bun.env.PORT) || 3000;
