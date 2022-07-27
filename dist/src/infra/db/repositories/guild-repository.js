"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildRepository = void 0;
const base_repository_1 = require("./base-repository");
class GuildRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.guild;
    }
}
exports.GuildRepository = GuildRepository;
//# sourceMappingURL=guild-repository.js.map