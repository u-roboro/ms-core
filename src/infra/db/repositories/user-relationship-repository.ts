import { UserRelationshipModel } from "../../../domain/model";
import { BaseRepository } from "./base-repository";

export class UserRelationshipRepository extends BaseRepository<UserRelationshipModel> {
    constructor() {
        super();
        this.modelSelected = this.database.models.userRelationship;
    }
}