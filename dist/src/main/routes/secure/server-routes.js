"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const server_controller_1 = require("../../factories/controllers/server-controller");
exports.default = (router) => {
    router.post("/servers", urobo_1.adapters.adaptRoute((0, server_controller_1.makeCreateController)()));
    router.delete("/servers/:id", urobo_1.adapters.adaptRoute((0, server_controller_1.makeDeleteByIdController)()));
    router.delete("/servers/slug/:slug", urobo_1.adapters.adaptRoute((0, server_controller_1.makeDeleteBySlugController)()));
    router.delete("/servers", urobo_1.adapters.adaptRoute((0, server_controller_1.makeDeleteByWhereController)()));
    router.get("/servers", urobo_1.adapters.adaptRoute((0, server_controller_1.makeFindAllController)()));
    router.get("/servers/:id", urobo_1.adapters.adaptRoute((0, server_controller_1.makeFindByIdController)()));
    router.get("/servers/slug/:slug", urobo_1.adapters.adaptRoute((0, server_controller_1.makeFindBySlugController)()));
    router.get("/servers/where", urobo_1.adapters.adaptRoute((0, server_controller_1.makeFindByWhereController)()));
    router.put("/servers/:id", urobo_1.adapters.adaptRoute((0, server_controller_1.makeUpdateByIdController)()));
    router.put("/servers/slug/:slug", urobo_1.adapters.adaptRoute((0, server_controller_1.makeUpdateBySlugController)()));
    router.put("/servers", urobo_1.adapters.adaptRoute((0, server_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=server-routes.js.map