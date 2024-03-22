import { Static, t } from "elysia";

export const zDefaultResponse = t.Object({
	status: t.Boolean(),
	message: t.String({ default: "welcome" }),
});

export type zDefaultResponseType = Static<typeof zDefaultResponse>;
