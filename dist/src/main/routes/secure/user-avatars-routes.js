"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const user_avatars_controller_1 = require("../../factories/controllers/user-avatars-controller");
exports.default = (router) => {
    router.post("/user-avatars", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeCreateController)()));
    router.delete("/user-avatars/:id", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeDeleteByIdController)()));
    router.delete("/user-avatars/slug/:slug", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeDeleteBySlugController)()));
    router.delete("/user-avatars", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeDeleteByWhereController)()));
    router.get("/user-avatars", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeFindAllController)()));
    router.get("/user-avatars/:id", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeFindByIdController)()));
    router.get("/user-avatars/slug/:slug", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeFindBySlugController)()));
    router.get("/user-avatars/where", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeFindByWhereController)()));
    router.put("/user-avatars/:id", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeUpdateByIdController)()));
    router.put("/user-avatars/slug/:slug", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeUpdateBySlugController)()));
    router.put("/user-avatars", urobo_1.adapters.adaptRoute((0, user_avatars_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=user-avatars-routes.js.map