"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const guild_controller_1 = require("../../factories/controllers/guild-controller");
exports.default = (router) => {
    router.post("/guild", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeCreateController)()));
    router.delete("/guild/:id", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeDeleteByIdController)()));
    router.delete("/guild/slug/:slug", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeDeleteBySlugController)()));
    router.delete("/guild", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeDeleteByWhereController)()));
    router.get("/guild", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeFindAllController)()));
    router.get("/guild/:id", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeFindByIdController)()));
    router.get("/guild/slug/:slug", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeFindBySlugController)()));
    router.get("/guild/where", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeFindByWhereController)()));
    router.put("/guild/:id", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeUpdateByIdController)()));
    router.put("/guild/slug/:slug", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeUpdateBySlugController)()));
    router.put("/guild", urobo_1.adapters.adaptRoute((0, guild_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=guild-routes.js.map