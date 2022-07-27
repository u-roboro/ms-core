"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const user_relationship_controller_1 = require("../../factories/controllers/user-relationship-controller");
exports.default = (router) => {
    router.post("/user-relationship", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeCreateController)()));
    router.delete("/user-relationship/:id", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeDeleteByIdController)()));
    router.delete("/user-relationship/slug/:slug", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeDeleteBySlugController)()));
    router.delete("/user-relationship", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeDeleteByWhereController)()));
    router.get("/user-relationship", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeFindAllController)()));
    router.get("/user-relationship/:id", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeFindByIdController)()));
    router.get("/user-relationship/slug/:slug", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeFindBySlugController)()));
    router.get("/user-relationship/where", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeFindByWhereController)()));
    router.put("/user-relationship/:id", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeUpdateByIdController)()));
    router.put("/user-relationship/slug/:slug", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeUpdateBySlugController)()));
    router.put("/user-relationship", urobo_1.adapters.adaptRoute((0, user_relationship_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=user-relationship-routes.js.map