"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const avatar_controller_1 = require("../../factories/controllers/avatar-controller");
exports.default = (router) => {
    router.post("/avatars", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeCreateController)()));
    router.delete("/avatars/:id", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeDeleteByIdController)()));
    router.delete("/avatars/slug/:slug", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeDeleteBySlugController)()));
    router.delete("/avatars", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeDeleteByWhereController)()));
    router.get("/avatars", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeFindAllController)()));
    router.get("/avatars/:id", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeFindByIdController)()));
    router.get("/avatars/slug/:slug", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeFindBySlugController)()));
    router.get("/avatars/where", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeFindByWhereController)()));
    router.put("/avatars/:id", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeUpdateByIdController)()));
    router.put("/avatars/slug/:slug", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeUpdateBySlugController)()));
    router.put("/avatars", urobo_1.adapters.adaptRoute((0, avatar_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=avatar-routes.js.map