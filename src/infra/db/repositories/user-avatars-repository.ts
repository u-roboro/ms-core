import { UserAvatarsModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class UserAvatarsRepository extends BaseRepository<UserAvatarsModel> {
	constructor() {
		super();
		this.modelSelected = this.database.models.userAvatars;
	}
}
