"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const user_avatar_equipped_controller_1 = require("../../factories/controllers/user-avatar-equipped-controller");
exports.default = (router) => {
    router.post("/user-avatar-equipped", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeCreateController)()));
    router.delete("/user-avatar-equipped/:id", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeDeleteByIdController)()));
    router.delete("/user-avatar-equipped/slug/:slug", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeDeleteBySlugController)()));
    router.delete("/user-avatar-equipped", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeDeleteByWhereController)()));
    router.get("/user-avatar-equipped", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeFindAllController)()));
    router.get("/user-avatar-equipped/:id", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeFindByIdController)()));
    router.get("/user-avatar-equipped/slug/:slug", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeFindBySlugController)()));
    router.get("/user-avatar-equipped/where", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeFindByWhereController)()));
    router.put("/user-avatar-equipped/:id", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeUpdateByIdController)()));
    router.put("/user-avatar-equipped/slug/:slug", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeUpdateBySlugController)()));
    router.put("/user-avatar-equipped", urobo_1.adapters.adaptRoute((0, user_avatar_equipped_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=user-avatar-equipped-routes.js.map