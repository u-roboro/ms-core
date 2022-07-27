"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByWhereGenericController = void 0;
class FindByWhereGenericController {
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
exports.FindByWhereGenericController = FindByWhereGenericController;
//# sourceMappingURL=find-by-where.js.map