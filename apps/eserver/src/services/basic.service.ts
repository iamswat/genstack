import { zBasicResponseType } from "../dto/basic.dto";

export function basicDefaultService(): zBasicResponseType {
	return {
		message: "base route reached",
	};
}
