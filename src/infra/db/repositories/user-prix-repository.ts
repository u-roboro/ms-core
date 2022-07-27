import { UserPrixModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class UserPrixRepository extends BaseRepository<UserPrixModel> {
    constructor() {
        super();
        this.modelSelected = this.database.models.userPrix;
    }
}