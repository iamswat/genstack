export const APPLICATION_NAME: string = Bun.env.APPLICATION_NAME || "genstack";
export const HOST: string = Bun.env.HOST || "localhost";
export const PORT: number = Number(Bun.env.PORT) || 3000;
export const DATABASE_URI: string = Bun.env.DATABASE_URI || "mongo://localhost:27017";