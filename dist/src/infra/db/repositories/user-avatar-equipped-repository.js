"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAvatarEquippedRepository = void 0;
const base_repository_1 = require("./base-repository");
class UserAvatarEquippedRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.userAvatarEquipped;
    }
}
exports.UserAvatarEquippedRepository = UserAvatarEquippedRepository;
//# sourceMappingURL=user-avatar-equipped-repository.js.map