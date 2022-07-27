import { protocols } from "urobo";
import { HttpStatusCode } from "urobo/build/main/consts";
import { BaseModel } from "../../../domain/model";
import { BaseRepository } from "../../../infra/db/repositories";

export class FindAllGenericController implements protocols.Controller {
	constructor(public entityRepository: BaseRepository<BaseModel>) {}

	async handle(request: any) {
		const entities = await this.entityRepository.findAll();
		return {
			statusCode: HttpStatusCode.OK,
			body: entities,
		};
	}
}
