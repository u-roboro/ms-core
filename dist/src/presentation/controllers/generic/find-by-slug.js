"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindBySlugGenericController = void 0;
class FindBySlugGenericController {
    constructor(entityRepository) {
        this.entityRepository = entityRepository;
    }
    async handle(request) {
        const item = await this.entityRepository.findBySlug(request.params.slug);
        return {
            statusCode: 200,
            body: item,
        };
    }
}
exports.FindBySlugGenericController = FindBySlugGenericController;
//# sourceMappingURL=find-by-slug.js.map