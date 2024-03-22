import { describe, expect, it } from "bun:test";
import { app } from "../src";
import { zDefaultResponse, zDefaultResponseType } from "../src/dto/common.dto";
import { StandardValidator } from "typebox-validators";

describe("Elysia", () => {
	it("valid", async () => {
		const res = await app.handle(new Request("http://localhost/"));
		const response: zDefaultResponseType = await res.json();
		const validator: StandardValidator<typeof zDefaultResponse> = new StandardValidator(zDefaultResponse);
		expect(validator.test(response)).toBeTrue();
	});
});
