"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildMembersRepository = void 0;
const base_repository_1 = require("./base-repository");
class GuildMembersRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.guildMembers;
    }
}
exports.GuildMembersRepository = GuildMembersRepository;
//# sourceMappingURL=guild-members-repository.js.map