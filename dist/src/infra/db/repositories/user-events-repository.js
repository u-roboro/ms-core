"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEventsRepository = void 0;
const base_repository_1 = require("./base-repository");
class UserEventsRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.userEvents;
    }
}
exports.UserEventsRepository = UserEventsRepository;
//# sourceMappingURL=user-events-repository.js.map