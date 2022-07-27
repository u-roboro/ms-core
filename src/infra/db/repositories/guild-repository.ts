import { GuildModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class GuildRepository extends BaseRepository<GuildModel> {
	constructor() {
		super();
		this.modelSelected = this.database.models.guild;
	}
}
