"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBySlugGenericController = void 0;
class DeleteBySlugGenericController {
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
exports.DeleteBySlugGenericController = DeleteBySlugGenericController;
//# sourceMappingURL=delete-by-slug.js.map