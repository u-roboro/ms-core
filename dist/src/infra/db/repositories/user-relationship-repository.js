"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationshipRepository = void 0;
const base_repository_1 = require("./base-repository");
class UserRelationshipRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.userRelationship;
    }
}
exports.UserRelationshipRepository = UserRelationshipRepository;
//# sourceMappingURL=user-relationship-repository.js.map