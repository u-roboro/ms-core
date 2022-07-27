import { protocols } from "urobo";
import { HttpStatusCode } from "urobo/build/main/consts/http-status-code";
import { BaseModel } from "../../../domain/model";
import { BaseRepository } from "../../../infra/db/repositories";

export class FindByIdGenericController implements protocols.Controller {
	constructor(public entityRepository: BaseRepository<BaseModel>) {}

	async handle(request: any) {
		const entity = await this.entityRepository.findById(Number(request.params.id));

		return {
			statusCode: HttpStatusCode.OK,
			body: entity,
		};
	}
}
