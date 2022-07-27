"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const account_controller_1 = require("../../factories/controllers/account-controller");
exports.default = (router) => {
    router.post("/accounts", urobo_1.adapters.adaptRoute((0, account_controller_1.makeCreateController)()));
    router.delete("/accounts/:id", urobo_1.adapters.adaptRoute((0, account_controller_1.makeDeleteByIdController)()));
    router.delete("/accounts/slug/:slug", urobo_1.adapters.adaptRoute((0, account_controller_1.makeDeleteBySlugController)()));
    router.delete("/accounts", urobo_1.adapters.adaptRoute((0, account_controller_1.makeDeleteByWhereController)()));
    router.get("/accounts", urobo_1.adapters.adaptRoute((0, account_controller_1.makeFindAllController)()));
    router.get("/accounts/:id", urobo_1.adapters.adaptRoute((0, account_controller_1.makeFindByIdController)()));
    router.get("/accounts/slug/:slug", urobo_1.adapters.adaptRoute((0, account_controller_1.makeFindBySlugController)()));
    router.get("/accounts/where", urobo_1.adapters.adaptRoute((0, account_controller_1.makeFindByWhereController)()));
    router.put("/accounts/:id", urobo_1.adapters.adaptRoute((0, account_controller_1.makeUpdateByIdController)()));
    router.put("/accounts/slug/:slug", urobo_1.adapters.adaptRoute((0, account_controller_1.makeUpdateBySlugController)()));
    router.put("/accounts", urobo_1.adapters.adaptRoute((0, account_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=account-routes.js.map