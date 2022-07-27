"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAvatarsRepository = void 0;
const base_repository_1 = require("./base-repository");
class UserAvatarsRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.userAvatars;
    }
}
exports.UserAvatarsRepository = UserAvatarsRepository;
//# sourceMappingURL=user-avatars-repository.js.map