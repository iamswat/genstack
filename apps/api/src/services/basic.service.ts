import { zBasicResponseType } from "../dto/basic.dto";
import { NotFoundError } from "elysia";

export function basicDefaultService(): zBasicResponseType {
	return {
		message: "base route reached",
	};
}

export function basicFailService(): zBasicResponseType {
	throw new NotFoundError("omg");
}
