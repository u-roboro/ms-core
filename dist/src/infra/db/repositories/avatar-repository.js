"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarRepository = void 0;
const base_repository_1 = require("./base-repository");
class AvatarRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.avatar;
    }
}
exports.AvatarRepository = AvatarRepository;
//# sourceMappingURL=avatar-repository.js.map