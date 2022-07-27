import { protocols } from "urobo";
import { BaseModel } from "../../../domain/model";
import { BaseRepository } from "../../../infra/db/repositories";

export class FindBySlugGenericController implements protocols.Controller {
	constructor(public entityRepository: BaseRepository<BaseModel>) {}

	async handle(request: any) {
		const item = await this.entityRepository.findBySlug(request.params.slug);

		return {
			statusCode: 200,
			body: item,
		};
	}
}
