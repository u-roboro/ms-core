"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const user_prix_controller_1 = require("../../factories/controllers/user-prix-controller");
exports.default = (router) => {
    router.post("/user-prix", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeCreateController)()));
    router.delete("/user-prix/:id", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeDeleteByIdController)()));
    router.delete("/user-prix/slug/:slug", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeDeleteBySlugController)()));
    router.delete("/user-prix", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeDeleteByWhereController)()));
    router.get("/user-prix", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeFindAllController)()));
    router.get("/user-prix/:id", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeFindByIdController)()));
    router.get("/user-prix/slug/:slug", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeFindBySlugController)()));
    router.get("/user-prix/where", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeFindByWhereController)()));
    router.put("/user-prix/:id", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeUpdateByIdController)()));
    router.put("/user-prix/slug/:slug", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeUpdateBySlugController)()));
    router.put("/user-prix", urobo_1.adapters.adaptRoute((0, user_prix_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=user-prix-routes.js.map