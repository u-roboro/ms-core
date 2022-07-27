"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrixRepository = void 0;
const base_repository_1 = require("./base-repository");
class UserPrixRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.userPrix;
    }
}
exports.UserPrixRepository = UserPrixRepository;
//# sourceMappingURL=user-prix-repository.js.map