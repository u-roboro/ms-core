import { BaseError } from "urobo/build/main/errors";

export class CommonNotFoundError extends BaseError {
	constructor() {
		super("GAAAAA", 404, {
			name: "Not Found",
			type: "system",
		});
	}
}
