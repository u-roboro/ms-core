"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllGenericController = void 0;
const consts_1 = require("urobo/build/main/consts");
class FindAllGenericController {
    constructor(entityRepository) {
        this.entityRepository = entityRepository;
    }
    async handle(request) {
        const entities = await this.entityRepository.findAll();
        return {
            statusCode: consts_1.HttpStatusCode.OK,
            body: entities,
        };
    }
}
exports.FindAllGenericController = FindAllGenericController;
//# sourceMappingURL=find-all.js.map