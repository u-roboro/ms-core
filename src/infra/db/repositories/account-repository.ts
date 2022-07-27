import { AccountModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class AccountRepository extends BaseRepository<AccountModel> {
	constructor() {
		super();
		this.modelSelected = this.database.models.account;
	}
}
