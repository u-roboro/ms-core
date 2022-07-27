import { UserEventsModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class UserEventsRepository extends BaseRepository<UserEventsModel> {
    constructor() {
        super();
        this.modelSelected = this.database.models.userEvents;
    }
}