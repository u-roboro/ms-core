"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdGenericController = void 0;
const http_status_code_1 = require("urobo/build/main/consts/http-status-code");
class FindByIdGenericController {
    constructor(entityRepository) {
        this.entityRepository = entityRepository;
    }
    async handle(request) {
        const entity = await this.entityRepository.findById(Number(request.params.id));
        return {
            statusCode: http_status_code_1.HttpStatusCode.OK,
            body: entity,
        };
    }
}
exports.FindByIdGenericController = FindByIdGenericController;
//# sourceMappingURL=find-by-id.js.map