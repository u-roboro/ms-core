import { GuildMembersModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class GuildMembersRepository extends BaseRepository<GuildMembersModel> {
	constructor() {
		super();
		this.modelSelected = this.database.models.guildMembers;
	}
}
