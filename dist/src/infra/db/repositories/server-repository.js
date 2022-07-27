"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerRepository = void 0;
const base_repository_1 = require("./base-repository");
class ServerRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.server;
    }
}
exports.ServerRepository = ServerRepository;
//# sourceMappingURL=server-repository.js.map