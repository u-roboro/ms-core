"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepository = void 0;
const base_repository_1 = require("./base-repository");
class AccountRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.modelSelected = this.database.models.account;
    }
}
exports.AccountRepository = AccountRepository;
//# sourceMappingURL=account-repository.js.map