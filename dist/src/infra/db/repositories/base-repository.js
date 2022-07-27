"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const errors_1 = require("urobo/build/main/errors");
const config_1 = require("../config");
class BaseRepository {
    constructor() {
        this.database = config_1.db;
    }
    // Create
    async create(entity) {
        const result = await this.modelSelected.create(entity);
        return result.toJSON();
    }
    // Update
    async updateById(id, entity) {
        const updated = await this.updateByWhere({ id }, entity);
        return updated;
    }
    async updateBySlug(slug, entity) {
        const updated = await this.updateByWhere({ slug }, entity);
        return updated;
    }
    async updateByWhere(where, entity) {
        const updated = await this.modelSelected.update(entity, {
            where,
        });
        if (updated[0] === 0) {
            throw new Error("Entity not found");
        }
        return entity;
    }
    // Delete
    async deleteById(id) {
        await this.deleteByWhere({ id });
    }
    async deleteBySlug(slug) {
        await this.deleteByWhere({ slug });
    }
    async deleteByWhere(where) {
        const deleted = await this.modelSelected.destroy({
            where,
        });
        if (deleted === 0) {
        }
    }
    // Read
    async findById(id) {
        const entity = await this.findByWhere({ id });
        if (entity.length === 0) {
            throw new errors_1.ResourceNotFound("id: " + id);
        }
        return entity[0];
    }
    async findBySlug(slug) {
        const entity = await this.findByWhere({ slug });
        if (entity.length === 0) {
            throw new errors_1.ResourceNotFound("slug: " + slug);
        }
        return entity[0];
    }
    async findByWhere(where) {
        const result = await this.modelSelected.findAll({ where });
        return result.map((entity) => entity.toJSON());
    }
    async findAll() {
        const result = await this.modelSelected.findAll();
        return result.map((entity) => entity.toJSON());
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base-repository.js.map