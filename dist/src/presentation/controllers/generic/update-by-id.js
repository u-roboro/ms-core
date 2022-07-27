"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateByIdGenericController = void 0;
class UpdateByIdGenericController {
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
exports.UpdateByIdGenericController = UpdateByIdGenericController;
//# sourceMappingURL=update-by-id.js.map