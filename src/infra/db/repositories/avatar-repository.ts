import { AvatarModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class AvatarRepository extends BaseRepository<AvatarModel> {
	constructor() {
		super();
		this.modelSelected = this.database.models.avatar;
	}
}
