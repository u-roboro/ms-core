import { protocols } from "urobo";
import { BaseModel } from "../../../domain/model";
import { BaseRepository } from "../../../infra/db/repositories";

export class UpdateByIdGenericController implements protocols.Controller {
	constructor(entityRepository: BaseRepository<BaseModel>) {}

	async handle(request: any) {
		return {
			statusCode: 200,
			body: {
				message: "Create Generic Controller",
			},
		};
	}
}
