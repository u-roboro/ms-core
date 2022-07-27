import { UserAvatarEquippedModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class UserAvatarEquippedRepository extends BaseRepository<UserAvatarEquippedModel> {
	constructor() {
		super();
		this.modelSelected = this.database.models.userAvatarEquipped;
	}
}
