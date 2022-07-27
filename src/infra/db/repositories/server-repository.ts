import { ServerModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class ServerRepository extends BaseRepository<ServerModel> {
	constructor() {
		super();
		this.modelSelected = this.database.models.server;
	}
}
