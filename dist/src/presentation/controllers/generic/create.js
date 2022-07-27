"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGenericController = void 0;
class CreateGenericController {
    constructor(entityRepository) { }
    async handle(request) {
        return {
            statusCode: 200,
            body: {
                message: "Create Generic Controller",
            },
        };
    }
}
exports.CreateGenericController = CreateGenericController;
//# sourceMappingURL=create.js.map