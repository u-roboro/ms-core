"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteByWhereGenericController = void 0;
class DeleteByWhereGenericController {
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
exports.DeleteByWhereGenericController = DeleteByWhereGenericController;
//# sourceMappingURL=delete-by-where.js.map