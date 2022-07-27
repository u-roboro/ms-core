import { UserModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class UserRepository extends BaseRepository<UserModel> {
	constructor() {
		super();
		this.modelSelected = this.database.models.user;
	}
}
