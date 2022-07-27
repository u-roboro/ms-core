"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const user_controller_1 = require("../../factories/controllers/user-controller");
exports.default = (router) => {
    router.post("/users", urobo_1.adapters.adaptRoute((0, user_controller_1.makeCreateController)()));
    router.delete("/users/:id", urobo_1.adapters.adaptRoute((0, user_controller_1.makeDeleteByIdController)()));
    router.delete("/users/slug/:slug", urobo_1.adapters.adaptRoute((0, user_controller_1.makeDeleteBySlugController)()));
    router.delete("/users", urobo_1.adapters.adaptRoute((0, user_controller_1.makeDeleteByWhereController)()));
    router.get("/users", urobo_1.adapters.adaptRoute((0, user_controller_1.makeFindAllController)()));
    router.get("/users/:id", urobo_1.adapters.adaptRoute((0, user_controller_1.makeFindByIdController)()));
    router.get("/users/slug/:slug", urobo_1.adapters.adaptRoute((0, user_controller_1.makeFindBySlugController)()));
    router.get("/users/where", urobo_1.adapters.adaptRoute((0, user_controller_1.makeFindByWhereController)()));
    router.put("/users/:id", urobo_1.adapters.adaptRoute((0, user_controller_1.makeUpdateByIdController)()));
    router.put("/users/slug/:slug", urobo_1.adapters.adaptRoute((0, user_controller_1.makeUpdateBySlugController)()));
    router.put("/users", urobo_1.adapters.adaptRoute((0, user_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=user-routes.js.map