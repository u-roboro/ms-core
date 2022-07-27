"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteByIdGenericController = void 0;
class DeleteByIdGenericController {
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
exports.DeleteByIdGenericController = DeleteByIdGenericController;
//# sourceMappingURL=delete-by-id.js.map