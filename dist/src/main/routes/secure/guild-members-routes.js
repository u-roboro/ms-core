"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urobo_1 = require("urobo");
const guild_members_controller_1 = require("../../factories/controllers/guild-members-controller");
exports.default = (router) => {
    router.post("/guild-members", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeCreateController)()));
    router.delete("/guild-members/:id", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeDeleteByIdController)()));
    router.delete("/guild-members/slug/:slug", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeDeleteBySlugController)()));
    router.delete("/guild-members", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeDeleteByWhereController)()));
    router.get("/guild-members", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeFindAllController)()));
    router.get("/guild-members/:id", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeFindByIdController)()));
    router.get("/guild-members/slug/:slug", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeFindBySlugController)()));
    router.get("/guild-members/where", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeFindByWhereController)()));
    router.put("/guild-members/:id", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeUpdateByIdController)()));
    router.put("/guild-members/slug/:slug", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeUpdateBySlugController)()));
    router.put("/guild-members", urobo_1.adapters.adaptRoute((0, guild_members_controller_1.makeUpdateByWhereController)()));
};
//# sourceMappingURL=guild-members-routes.js.map