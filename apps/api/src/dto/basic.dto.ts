import { Static, t } from "elysia";

export const zBasicResponse = t.Object({
	message: t.String(),
});

export type zBasicResponseType = Static<typeof zBasicResponse>;
